const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({
    idPaciente: {
        type: mongoose.Schema.ObjectId,
        ref: 'Paciente',
        required: [true, 'A medida deve pertencer a um paciente!'],
        immutable: true
    },
    uid: {
        type: String,
        required: true,
        unique:true,
        immutable: true
    },
    dtConsulta: {
        type: Date,
        required: true,
    },
    local: { 
        type: String,
        required: true,
        enum: ['Consultório', 'Online'],
    },
});


const Consulta = mongoose.model('Consulta', consultaSchema, 'Consultas');

module.exports = Consulta;