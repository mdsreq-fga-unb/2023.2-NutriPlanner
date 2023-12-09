const express = require('express');
const mongoose = require('mongoose');

const consultas = require('./../controllers/consultaController');

const routes = express.Router();

routes.route('/:idPaciente').post(consultas.agendarConsulta);

module.exports = routes;