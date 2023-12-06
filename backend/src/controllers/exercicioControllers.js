// Model de exercicio
const Exercicio = require('./../models/exercicioModel');

// Busca exercicios
exports.getExercicios = async (req, res) => {
    try {
        const data = await Exercicio.find(null, 'nome').sort({ 'nome': 1 });

        res.status(200).json({
            status: "sucesso",
            message: "Busca concluida com sucesso",
            data
        });
    } catch (err) {
        res.status(400).json({
            status: "falha",
            message: err.message
        });
    }
}