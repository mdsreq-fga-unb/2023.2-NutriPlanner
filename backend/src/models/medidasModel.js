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
            maxLength: 2
        },
        anteBracos: {
            type: [Number],
            maxLength: 2
        },
        abdomen: Number,
        cintura: Number,
        peitoral: Number,
        ombros: Number,
        coxas: {
            type: [Number],
            maxLength: 2
        },
        panturrilhas: {
            type: [Number],
            maxLength: 2
        },
        quadril: Number,
        pescoco: Number
    }],
    dobrasCutaneas: {
        type: String,
        maxLength: 750,
        trim: true
    },
    gastoEnergeticoDiario: {
        type: Number,
        required: [true, 'Medida deve conter gasto energetico diario!'],
        max: 10000  // nao sei um valor apropriado
    },
    metabolismoBasal: {
        type: Number,
        required: [true, 'Medida deve conter metabolismo basal!'],
        max: 50000 // nao sei um valor apropriado
    },
    valorCaloricoPlano: {
        type: Number,
        required: [true, 'Medida deve conter valor calorico do plano alimentar!'],
        max: 100000 // nao sei um valor apropriado
    },
});


const Medida = mongoose.model('Medida', medidasSchema, 'Medidas');

module.exports = Medida;