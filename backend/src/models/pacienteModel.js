const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'O paciente deve conter um nome!']
    },
    sobrenome: {
        type: String,
        required: [true, 'O paciente deve conter um sobrenome!']
    },
    dtNascimento: {
        type: Date,
        required: [true, 'O paciente deve conter uma data de nascimento!'],
        default: ''
    },
    email: {
        type: String,
        required: [true, 'O paciente deve conter um e-mail cadastrado!']
    },
    telefone: {
        type: String,
        default: ''
    },
    endereco: {
        type: String,
        default: ''
    },
    questionario: {
        type: [String],
        default: []
    }
});


const Paciente = mongoose.model('Paciente', pacienteSchema, 'Pacientes');

module.exports = Paciente;