// Model de Treino
const Treino = require('./../models/treinoModel');

// Cria treino
exports.criaTreino = async (req, res) => {
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

// Get treinos paciente
exports.getTreinos = async (req, res) => {
    try {
        const data = await Treino.find({ 'idPaciente': req.params.idPaciente }, '_id dtEmissao').sort({ 'dtEmissao': -1 });

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

// Get treino especifico
exports.getTreino = async (req, res) => {
    try {
        const data = await Treino.findOne({ '_id': req.params.idTreino, 'idPaciente': req.params.idPaciente });

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

// Editar treino

exports.editarTreino = async (req, res) => {
    try {
        const data = await Treino.findOneAndUpdate({ '_id': req.params.idTreino, 'idPaciente': req.params.idPaciente }, req.body, { new: false });

        res.status(200).json({
            status: "sucesso",
            message: "Treino atualizado com sucesso",
            data
        });
    } catch (err) {
        res.status(400).json({
            status: "falha",
            message: err.message
        });
    }
}