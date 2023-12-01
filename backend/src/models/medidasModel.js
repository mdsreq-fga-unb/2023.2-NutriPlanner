const mongoose = require('mongoose');

const medidasSchema = new mongoose.Schema({
    idPaciente: {
        type: mongoose.Schema.ObjectId,
        ref: 'Paciente',
        required: [true, 'A medida deve pertencer a um paciente!']
    },
    dtEmissao: {
        type: Date,
        required: [true],
        default: new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"}),
        immutable: true
    },
    altura: { // em metro
        type: Number,
        required: [true, 'Medida deve conter altura!'],
        max: 2.50 
    },
    pesoJejum: {
        type: Number,
        required: [true, 'Medida deve conter peso em jejum!'],
        max: 600 
    },
    pesoObjetivo: {
        type: Number,
        required: [true, 'Medida deve conter peso de objetivo!'],
        max: 600 
    },
    imc: {
        type: Number,
        default: 0
    },
    circunferencia: [{
        bracos: {
            type: [Number],
            minLength:2,
            maxLength: 2
        },
        anteBracos: {
            type: [Number],
            minLength:2,
            maxLength: 2
        },
        abdomen: Number,
        cintura: Number,
        peitoral: Number,
        ombros: Number,
        coxas: {
            type: [Number],
            minLength:2,
            maxLength: 2
        },
        panturrilhas: {
            type: [Number],
            minLength:2,
            maxLength: 2
        },
        quadril: Number,
        pescoco: Number
    }],
    dobrasCutaneas: {
        type: String,
        maxLength: 750,
        trim: true,
        default: 'Não possui.'
    }
});


const Medida = mongoose.model('Medida', medidasSchema, 'Medidas');

module.exports = Medida;