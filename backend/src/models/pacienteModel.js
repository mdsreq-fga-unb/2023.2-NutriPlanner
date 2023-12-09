const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
    dtAdmissao: {
        type: Date,
        required: [true],
        default: new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"}),
        immutable: true
    },
    ativo: {
        type: Boolean,
        default: true,
        required: true
    },
    nome: {
        type: String,
        required: [true, 'O paciente deve conter um nome!'],
        trim: true,
        maxLength: 200
    },
    dtNascimento: {
        type: Date,
        required: [true, 'O paciente deve conter uma data de nascimento!'],
        default: ''
    },
    sexo: {
        type: String,
        required: [true, 'O paciente deve conter sexo!'],
        enum: ["Masculino", "Feminino"]
    },
    email: {
        type: String,
        required: [true, 'O paciente deve conter um e-mail cadastrado!'],
        trim: true,
        maxLength: 320,
    },
    telefone: {
        type: String,
        default: '',
        trim: true,
        maxLength: 15
    },
    endereco: {
        type: String,
        default: '',
        trim: true,
        maxLength: 200
    },
    questionario: {
        objetivosPaciente: {
            type: String,
            required: [true, 'O paciente deve conter um objetivo!'],
            maxLength: 1000,
            trim: true,
        },
        problemasSaudeIndividual: {
            type: String,
            maxLength: 1000,
            trim: true,
            default: 'Não possui.'
        },
        problemasSaudeFamiliares: {
            type: String,
            maxLength: 1000,
            trim: true,
            default: 'Não possui.'
        },
        medicamentosIngeridos: [{
            nome: {
                type: String,
                required: true,
                maxLength: 200,
                trim: true,
                required: true
            },
            horario: {
                type: String,
                validate: function (value) {
                    return /^([01]\d|2[0-3]):([0-5]\d)$/.test(value);
                },
                message: props => `${props.value} não é um formato de horário válido (HH:mm)!`,
                required: true
            },
            tipo: {
                type: String,
                enum: ["Eventual", "Contínuo"],
                required: true
            }
        }],
        alergiasAlimentares: {
            type: String,
            maxLength: 500,
            trim: true,
            default: 'Não possui.'
        },
        alteracoes: {
            type: String,
            maxLength: 1000,
            trim: true,
            default: 'Nunca sentiu.'
        },
        cirurgias: {
            type: String,
            maxLength: 1000,
            trim: true,
            default: 'Nunca passou.'
        },
        lesoes: {
            type: String,
            maxLength: 500,
            trim: true,
            default: 'Não possui.'
        },
        restricoesMedicas: {
            type: String,
            maxLength: 500,
            trim: true,
            default: 'Não possui.'
        },
        habitosGeraisAlimentares: {
            type: String,
            maxLength: 1000,
            trim: true,
            default: ''
        }
    },
    gastoEnergeticoDiario: {
        type: Number,
        required: [true, 'O paciente deve conter gasto energetico diario!'],
    },
    metabolismoBasal: {
        type: Number,
        required: [true, 'O paciente deve conter metabolismo basal!'],
    },
    valorCaloricoPlano: {
        type: Number,
        required: [true, 'O paciente deve conter valor calorico do plano alimentar!'],
    },
    conclusoes: {
        type: String,
        maxLength: 1500,
        trim: true,
        default: ''
    }
});


const Paciente = mongoose.model('Paciente', pacienteSchema, 'Pacientes');

module.exports = Paciente;