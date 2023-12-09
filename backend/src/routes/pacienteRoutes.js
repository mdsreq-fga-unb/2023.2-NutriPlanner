const express = require('express');
const mongoose = require('mongoose');

const pacientes = require('./../controllers/pacienteController');

const routes = express.Router();

routes.route('/:nome?').post(pacientes.checkEmail, pacientes.checkTelefone, pacientes.cadastroPaciente).get(pacientes.buscarPacientes);

module.exports = routes;
