const express = require('express');
// const mongoose = require('mongoose');

const treinos = require('./../controllers/treinoControllers');

const routes = express.Router();

routes.route('/:idPaciente').post(treinos.criaTreino).get(treinos.getTreinos);
routes.route('/:idPaciente/:idTreino').get(treinos.getTreino).patch(treinos.editarTreino);

module.exports = routes;