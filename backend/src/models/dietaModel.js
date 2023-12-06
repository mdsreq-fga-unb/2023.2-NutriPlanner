const mongoose = require('mongoose');

const dieta = mongoose.model('dieta',{
    agua: Number,
    cha: Number,
    suplemento: [String],
    refeicoes: [String],
    vegetais: [String],
})

module.exports = dieta