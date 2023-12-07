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

        res.status(200),json({
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
