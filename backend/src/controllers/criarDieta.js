const ejs = require('ejs');
const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const moment = require('moment');

// Models
const Dieta = require('../models/dietaModel');
const Paciente = require('../models/pacienteModel');

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


async function generatePDF(dataDieta, dataPaciente){
    const templatePath = `${__dirname}/../templates/dietaTemplate.ejs`;
    console.log(templatePath);
    const htmlContent = await ejs.renderFile(templatePath, {dieta: dataDieta, paciente: dataPaciente});

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(htmlContent, {waitUntil: 'networkidle0'});
    
    const pdfBuffer = await page.pdf({format: 'A4', buffer: true});

    await browser.close();

    return pdfBuffer;
}

exports.pdfDieta = async (req, res) =>{
    try{
        let dieta  = await Dieta.findOne({'_id': req.params.idDieta, 'idPaciente': req.params.idPaciente});

        const paciente = await Paciente.findOne({'id': req.params.idPaciente});

        if (dieta != null){
            dieta.dtEmissao = moment(dieta.dtEmissao).format('DD/MM/YYYY');

            const pdfContent = await generatePDF(dieta, paciente);

            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename=test.pdf');

            res.send(pdfContent);
        }
        else {
            res.status(404).json({
                status: "falha",
                message: "Treino não encontrado"
            });
        }
    }
    catch(err){
        res.status(500).json({
            status: "falha",
            message: err.message
        });
    }
}