const Dieta = require('../models/dietaModel');

exports.criarDieta =  async (req, res) =>{
    try {
        const novaDieta = await Dieta.create({
            idPaciente: req.params.idPaciente,
            ...req.body
        });

        if (novaDieta){
            res.status(200).json({
                status: "sucesso",
                message: "Dieta criada com sucesso",
                data: {
                    novaDieta
                }
            });
        }
    }
    catch (err){
        res.status(400).json({
            status: "falha",
            message: err.message
        });
    }
}

// visualizar dieta

exports.getDieta = async (req, res) => {
    try{
        const ver = await Dieta.find({'idPaciente': req.params.idPaciente}, '_id dtEmissao').sort({'dtEmissao': -1});

        res.status(200).json({
            status: "sucesso",
            message: "Busca concluida com sucesso",
            ver
        });
    }
    catch(err){
        res.status(400).json({
            status: "falha",
            message: err.message
        });
    }
}

// Visualizar dieta especifica

exports.getDietaEspecifica = async (req, res) => {
    try {
        const ver = await Dieta.findOne({'_id': req.params.idDieta, 'idPaciente': req.params.idPaciente});

        res.status(200).json({
            status: "sucesso",
            message: "Busca concluida com sucesso",
            ver
        });
    }
    catch(err) {
        res.status(400).json({
            status: "falha",
            message: err.message
        });
    }
}


// Função de editar dieta PATCH 

exports.editarDieta = async (req, res) => {
    try {
        const atualizarDieta = await Dieta.findOneAndUpdate({
            idPaciente: req.params.idPaciente,
            ...req.body
        });
        
        if(atualizarDieta){
            res.status(200).json({
                status: "sucesso",
                message: "Dieta atualizada com sucesso",
                data: {
                    atualizarDieta
                }
            });
        }
    }
    catch(err){
        res.status(400).json({
            status: "falha",
            message: err.message
        });
    }
};