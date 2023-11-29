const mongoose = require('mongoose');

const person = mongoose.model('person', {
    nome: String,
    email: String,
    telefone: Number,
    endereco: String,
    altura: Number,
    peso: Number,
});

module.exports = person