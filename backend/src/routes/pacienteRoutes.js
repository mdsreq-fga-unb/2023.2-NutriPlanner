const express = require('express');
const mongoose = require('mongoose');

const pacientes = require('./../controllers/pacienteController');

const routes = express.Router();

routes.route('/').post(pacientes.checkEmail, pacientes.checkTelefone, pacientes.cadastroPaciente);

routes.route('/').get(pacientes.buscaQuantidade);


module.exports = routes;
