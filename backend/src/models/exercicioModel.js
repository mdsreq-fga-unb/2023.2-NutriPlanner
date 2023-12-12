// models/exerciciosModel.js
const mongoose = require('mongoose');

const exerciciosSchema = new mongoose.Schema({
    nome: String
});

const Exercicio = mongoose.model('Exercicio', exerciciosSchema, 'Exercicios');


module.exports = Exercicio;

