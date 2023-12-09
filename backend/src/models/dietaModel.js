const mongoose = require('mongoose');
const Refeicao = require('./refeicaoModel');

const dietasSchema = new mongoose.Schema({
    idPaciente: {
        type: mongoose.Schema.ObjectId,
        ref: 'Pacientes',
        required: [true, "Uma dieta precisa ter um paciente"]
    },
    dtEmissao: {
        type: Date,
        default: new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }),
        immutable: true
    },
    planoAlimentar:{
        type: [{
            consumoLiquidos: {
                type: String,
                enum: ['agua', 'cha'], // Vai escolher entre os dois
                required: true,
            },
            litros: {
                type: Number,
                max: 1000, // Livros
                default: 0
            },
            vegetaisSugeridos: [{
                type: String,
            }],
            suplementos: [{
                type: String,
            }],
            refeicoes: {
                type: [{
                    nome: {
                        type: mongoose.Schema.ObjectId,
                        ref: 'Refeicao',
                        required: [true, "A refeição precisa ter um nome"]
                    },
                    refeicao: [{
                        type: String,
                        maxlength: 100,
                        default: ""
                    }],
                }],
                maxlength: 30,
                minlength: 1
            },
        }],
    }
});

dietasSchema.pre('save', function(next) {
    this.populate({
        path: 'planoAlimentar.refeicoes.nome',
        select: 'nome'
    })
    next();
});

const Dieta = mongoose.model('Dieta', dietasSchema, 'Dietas');
module.exports = Dieta;