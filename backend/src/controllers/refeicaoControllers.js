// Model de exercicio
const Dieta = require('../models/dietaModel');

// Busca exercicios
exports.getRefeicao = async (req, res) => {
    try {
        const ver = await Dieta.find(null, 'nome').sort({ 'nome': 1 });

        res.status(200).json({
            status: "sucesso",
            message: "Busca concluida com sucesso",
            ver
        });
    } catch (err) {
        res.status(400).json({
            status: "falha",
            message: err.message
        });
    }
}