const mongoose = require('mongoose')

const Exercicio = require('./exercicioModel');

const treinoSchema = new mongoose.Schema(
    {
        idPaciente: {
            type: mongoose.Schema.ObjectId,
            ref: 'Pacientes',
            required: [true, "O exercício deve pertencer a um paciente!"]
        },
        dtEmissao: {
            type: Date,
            default: new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }),
            immutable: true
        },
        sessoes: {
            type: [{
                codigo: {
                    type: String,
                    maxLength: 2,
                    minLength: 1,
                    uppercase: true,
                    required: [true, "A sessao de treino deve conter código!"]
                },
                dia: {
                    type: String,
                    enum: ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"],
                    required: [true, "A sessao de treino deve conter dia de realização!"]
                },
                regiaoFocal: {
                    type: String,
                    maxLength: 100,
                    required: [true, "A sessao de treino deve conter região focal!"]
                },
                duracaoAerobico: {
                    type: Number,
                    max: 1000, // min,
                    default: 0
                },
                tempoDescanso: {
                    type: Number,
                    max: 600, // seg,
                    default: 30
                },
                exercicios: {
                    type: [{
                        nome: {
                            type: String,
                            required: [true, "O exercício deve ter nome!"]
                        },
                        series: {
                            type: Number,
                            max: 10,
                            required: [true, "O exercício deve ter número de series definido!"]
                        },
                        repeticoes: {
                            type: Number,
                            max: 200,
                            required: [true, "O exercício deve ter número de repetições definido!"]
                        },
                        carga: {
                            type: Number,
                            max: 500, // kg
                            default: 0
                        },
                        tecnicaAvancada: {
                            type: String,
                            maxLength: 100,
                            default: ""
                        },
                    }],
                    maxLength: 30,
                    minLength: 1
                },

            }],
            maxLength: 7,
            minLength: 1
        }
    }
);

treinoSchema.pre('save', function (next) {
    this.populate({
        path: 'sessoes.exercicios.nome',
        select: 'nome'
    })
    next();
});

const Treino = mongoose.model('Treino', treinoSchema, 'Treinos');

module.exports = Treino;