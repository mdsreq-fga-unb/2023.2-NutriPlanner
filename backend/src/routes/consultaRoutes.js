const express = require('express');
const mongoose = require('mongoose');

const consultas = require('./../controllers/consultaController');

const routes = express.Router();

routes.route('/:idPaciente').post(consultas.agendarConsulta);
routes.route('/:idPaciente/:idConsulta').patch(consultas.reagendarConsulta);

module.exports = routes;