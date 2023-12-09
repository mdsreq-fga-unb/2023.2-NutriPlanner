const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({
    idPaciente: {
        type: mongoose.Schema.ObjectId,
        ref: 'Paciente',
        required: [true, 'A medida deve pertencer a um paciente!']
    },
    uid: {
        type: String,
        required: [true],
        immutable: true
    },
    dtConsulta: {
        type: Date,
        required: [true],
    },
});


const Consulta = mongoose.model('Consulta', consultaSchema, 'Consultas');

module.exports = Consulta;