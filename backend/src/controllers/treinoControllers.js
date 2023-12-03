

// Model de Treino
const Treino = require('./../models/treinoModel');

// Cria treino
exports.criaTreino = async (req,res) => {
    try {
        // Use o ID da rota conforme necessário na sua lógica de criação de treino
        const newTreino = await Treino.create({
            idPaciente: req.params.idPaciente,
            ...req.body
        });

        if (newTreino) {
            res.status(200).json({
                status: "sucesso",
                message: "Treino criado com sucesso",
                data: { 
                    newTreino
                }    
            });
        }
    } catch (err) {
        res.status(400).json({
            status: "falha",
            message: err.message
        });
    }
}