const mongoose = require('mongoose');

const refeicoesSchema = new mongoose.Schema({
    nome: String
});

const Refeicao = mongoose.model('Refeicao', refeicoesSchema, 'Refeicoes')

module.exports = Refeicao