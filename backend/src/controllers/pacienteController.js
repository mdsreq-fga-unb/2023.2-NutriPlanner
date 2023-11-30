const mongoose = require('mongoose');
const validator = require('validator');

// Modelo de Paciente
const Paciente = require('./../models/pacienteModel');

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

// Funcao de Cadastro de paciente no BD

exports.createPaciente = async (req, res) => {
    try {
        const newPaciente = await Paciente.create(req.body);

        res.status(201).json({
            status: "sucesso",
            data: {
                paciente: newPaciente
            }
        })
    } catch(err) {
        res.status(400).json({
            status: "falha",
            message: err
        })
    }
};