const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const ics = require('ics');

const Paciente = require('./../models/pacienteModel');
const Consulta = require('./../models/consultasModel');

const { configDotenv } = require('dotenv');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});


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
  const tempoMaximo = new Date(dataInicio.getTime() + 50 * 60 * 1000);

  const consultaExistente = await Consulta.findOne({
    dtConsulta: { $gte: tempoMinimo, $lt: tempoMaximo },
  });

  if (consultaExistente != null)
    return false;
  return true;
};

exports.agendarConsulta = async (req, res) => {
  try {
    // Validação dos dados
    const local = req.body.local;

    const [paciente, data, horarioDisponivel] = await Promise.all([
      Paciente.findById(req.params.idPaciente, 'ativo nome email'),
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
      message: 'Erro ao marcar a consulta',
      error: error.message
    });
  }
};



exports.reagendarConsulta = async (req, res) => {
  try {
    // Validação dos dados
    let local;

    if (req.body.local) local = req.body.local;

    const data = new Date(req.body.data)
    const horarioDisponivel = checarHorario(data)

    if (!horarioDisponivel) {
      return res.status(404).json({
        status: 'falha',
        message: 'Horario indisponível'
      });
    }

    const consulta = await Consulta.findOneAndUpdate(
      {
        '_id': req.params.idConsulta,
        'idPaciente': req.params.idPaciente
      },
      {
        dtConsulta: data,
        local: local
      },
      {
        returnDocument: 'after',
        runValidators: true
      }
    );

    if (!consulta) {
      return res.status(404).json({
        status: 'falha',
        message: 'Consulta ou Paciente inválido'
      });
    }

    const paciente = await Paciente.findById(req.params.idPaciente, 'ativo nome email');

    // Cria o evento iCalendar
    const event = {
      start: [data.getFullYear(), data.getMonth() + 1, data.getDate(), data.getHours(), data.getMinutes()],
      duration: { minutes: 50 },
      title: 'Consulta Nutricional',
      location: local,
      status: 'CONFIRMED',
      busyStatus: 'BUSY',
      organizer: { name: 'Leonardo Lima', email: 'emailLeonardo@teste.com' },
      method: 'REQUEST',
      uid: consulta.uid,
    }

    const { error, value } = ics.createEvent(event);

    if (error) {
      return res.status(500).json({
        status: 'falha',
        message: 'Erro ao criar o evento iCalendar'
      });
    }

    const arqIcs = value;

    let mailOptions = {
      from: process.env.EMAIL,
      to: paciente.email,
      subject: 'Reagendamento de Consulta Nutricional',
      text: 'Por favor, veja o compromisso anexado.',
      icalEvent: {
        content: arqIcs
      }
    };

    // Enviar e-mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      status: 'sucesso',
      message: 'Consulta reagendada com sucesso!',
      data: consulta
    });
  } catch (error) {
    res.status(500).json({
      status: 'falha',
      message: 'Erro ao marcar a consulta',
      error: error.message
    });
  }
};