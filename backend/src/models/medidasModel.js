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
        max: 3.50 
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
        bracoEsquerdo: Number,
        bracoDireito: Number,
        antebracoEsquerdo: Number,
        antebracoDireito: Number,
        abdomen: Number,
        cintura: Number,
        peitoral: Number,
        ombros: Number,
        coxaEsquerda: Number,
        coxaDireita: Number,
        panturrilhaEsquerda: Number,
        panturrilhaDireita: Number,
        coxaDireita: Number,
        quadril: Number,
        pescoco: Number
    }],
    dobrasCutaneas: {
        subscapular: Number,
        axilarMedia: Number,
        coxa: Number,
        tricipetal: Number,
        suprailiaca: Number,
        peitoral: Number,
        abdominal: Number
    }
});


const Medida = mongoose.model('Medida', medidasSchema, 'Medidas');

module.exports = Medida;