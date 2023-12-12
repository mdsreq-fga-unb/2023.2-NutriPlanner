const express = require('express');
const dietas = require('../controllers/criarDieta');

const routes = express.Router();

routes.route('/:idPaciente').post(dietas.criarDieta).get(dietas.getDieta).patch(dietas.editarDieta);
routes.route('/:idPaciente/:idDieta').get(dietas.getDietaEspecifica);
routes.route('/pdf/:idPaciente/:idDieta').get(dietas.pdfDieta);
module.exports = routes;