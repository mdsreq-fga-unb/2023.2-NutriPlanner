const express = require('express');
const mongoose = require('mongoose');

const pacientes = require('./pacientes');

const routes = express.Router();

routes.route('/pacientes').post(pacientes.checkEmail, pacientes.checkTelefone, pacientes.createPaciente);

module.exports = routes;
