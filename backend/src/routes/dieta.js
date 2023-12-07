const express = require('express');
const dietas = require('../controllers/criarDieta');

const routes = express.Router();

routes.route('/:idPaciente').post(dietas.criarDieta).get(dietas.getDieta);

module.exports = routes;