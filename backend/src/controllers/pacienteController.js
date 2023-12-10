const mongoose = require('mongoose');
const validator = require('validator');

// Modelo de Paciente
const Paciente = require('./../models/pacienteModel');
const Medida = require('./../models/medidasModel');

// Validadores de E-mail e Telefone

exports.checkEmail = async (req, res, next) => {
    if (req.body.email && !validator.isEmail(req.body.email)) {
        return res.status(400).json({
            status: "falha",
            message: "E-mail inválido"
        })
    }
    next();
};

exports.checkTelefone = async (req, res, next) => {
    if (req.body.telefone && !validator.isMobilePhone(req.body.telefone, 'pt-BR')) {
        return res.status(400).json({
            status: "falha",
            message: "Telefone inválido"
        })
    }
    next(); 
};

// Funcao de Cadastro de paciente e suas medidas no BD

exports.cadastroPaciente = async (req, res) => {
    let newPaciente;
    let newMedida;
    
    try {
        // Criar o Paciente
        newPaciente = await Paciente.create(req.body.paciente);

        // Adicionar o id do Paciente às informações da Medida
        const medidaData = {
            idPaciente: newPaciente._id,
            ...req.body.medida,
            imc: (req.body.medida.pesoJejum / (req.body.medida.altura ** 2)).toFixed(2)
        };

        // Criar a Medida
        newMedida = await Medida.create(medidaData);

        return res.status(200).json({
            status: "sucesso",
            message: "Paciente e Medida criados com sucesso",
            data: { 
                paciente: newPaciente,
                medida: newMedida
            }    
        });
    } catch (err) {
        // Se houver um erro em qualquer uma das etapas, desfazer as operações já realizadas
        if (newPaciente) {
            await Paciente.deleteOne({ _id: newPaciente._id });
        }
    
        if (newMedida) {
            await Medida.deleteOne({ _id: newMedida._id });
        }
    
        return res.status(400).json({
            status: "falha",
            message: err
        });
    }
};

exports.buscaQuantidade = async (req, res) => {
    try {
        const quantidadeTotal = await Paciente.countDocuments();
        const quantidadeAtivos = await Paciente.countDocuments({ativo: true});

        return res.status(200).json({
            status: "sucesso",
            dados: { 
                Total: quantidadeTotal,
                Ativos: quantidadeAtivos,
                Inativos: quantidadeTotal - quantidadeAtivos
            }    
        });
    }
    catch(error) {
        return res.status(400).json({
            status: "falha",
            message: err
        });
    }
}