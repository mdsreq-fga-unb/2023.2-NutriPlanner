const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const ics = require('ics');

const Paciente = require('./../models/pacienteModel');
const Consulta = require('./../models/consultasModel');

const { configDotenv } = require('dotenv');


const validarPaciente = async (paciente) => {
  if (!paciente)
    return false;
  else if (paciente.ativo === false)
    return false;

  return true;
};

// Função para verificar a disponibilidade de horário
const checarHorario = async (dataInicio) => {
  // const agora = new Date();

  // Verifica se a dataInicio é maior que a data atual
  if (dataInicio <= new Date()) {
    return false;
  }
  
  const tempoMinimo = new Date(dataInicio.getTime() - 50 * 60 * 1000);

  const consultaExistente = await Consulta.findOne({
    dtConsulta: { $gte: tempoMinimo, $lte: dataInicio },
  });
  
  if (consultaExistente)
    return false;
  return true;
};


exports.agendarConsulta = async (req, res) => {
  try {
    // Validação dos dados
    const local = req.body.local;
    const [paciente, data, horarioDisponivel] = await Promise.all([
      Paciente.findById(req.params.idPaciente),
      new Date(req.body.data),
      checarHorario(new Date(req.body.data))
    ]);

    const valPaciente = await validarPaciente(paciente);
    if (!valPaciente || !horarioDisponivel) {
      return res.status(404).json({
        status: 'falha',
        message: !valPaciente ? 'Paciente inválido ou inativo' : 'Horario indisponível'
      });
    }

    // Cria o evento iCalendar
    const event = {
      start: [data.getFullYear(), data.getMonth() + 1, data.getDate(), data.getHours(), data.getMinutes()],
      duration: { minutes: 50 },
      title: 'Consulta Nutricional',
      location: local,
      status: 'CONFIRMED',
      busyStatus: 'BUSY',
      organizer: { name: 'Leonardo Lima', email: 'emailLeonardo@teste.com' },
      description: 'Detalhes adicionais da consulta aqui.',
      method: 'REQUEST',
    }

    const { error, value } = ics.createEvent(event);

    if (error) {
      return res.status(500).json({
        status: 'falha',
        message: 'Erro ao criar o evento iCalendar'
      });
    }

    const arqIcs = value;
    // Extrai o UID
    const lines = arqIcs.split('\n');
    const uidLine = lines.find(line => line.startsWith('UID:'));
    const uid = uidLine ? uidLine.split(':')[1] : null;

    // Cria transporte SMTP para enviar e-mail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Configura o e-mail
    let mailOptions = {
      from: process.env.EMAIL,
      to: paciente.email,
      subject: 'Convite para Consulta Nutricional',
      text: 'Por favor, veja o compromisso anexado.',
      icalEvent: {
        content: arqIcs
      }
    };

    // Enviar e-mail
    await transporter.sendMail(mailOptions);

    // Cadastra a consulta no banco de dados
    const consulta = await Consulta.create({
      idPaciente: paciente._id,
      dtConsulta: data,
      uid: uid,
      local: local,
    });

    res.status(200).json({
      status: 'sucesso',
      message: 'Consulta marcada com sucesso!',
      data: consulta
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'falha',
      message: 'Erro ao marcar a consulta'
    });
  }
};