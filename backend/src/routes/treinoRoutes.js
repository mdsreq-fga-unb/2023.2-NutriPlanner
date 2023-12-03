const express = require('express');
// const mongoose = require('mongoose');

const treinos = require('./../controllers/treinoControllers');

const routes = express.Router();

routes.route('/:idPaciente').post(treinos.criaTreino);

module.exports = routes;