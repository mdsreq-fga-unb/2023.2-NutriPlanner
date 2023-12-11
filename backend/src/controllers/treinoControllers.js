const ejs = require('ejs');
const puppeteer = require('puppeteer');
const fs = require('fs').promises;

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

async function generatePDF(data) {
    
    // CASO FOR FAZER COM HTML/CSS
    // TROCAR ESSE TRECHO ABAIXO
    // ==========================
    
    const templatePath = `${__dirname}/../templates/treinoTemplate.ejs`;
    console.log(templatePath);
    const htmlContent = await ejs.renderFile(templatePath, { treino: data });
    
    // ==========================

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    const pdfBuffer = await page.pdf({ format: 'A4', buffer: true });

    await browser.close();

    return pdfBuffer;
}


exports.pdfTreino = async (req, res) => {
    try {
        const treino = await Treino.findOne({ '_id': req.params.idTreino, 'idPaciente': req.params.idPaciente });

        if (treino != null) {
            const pdfContent = await generatePDF(treino);

            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename=teste.pdf');

            res.send(pdfContent);
        }
        else {
            res.status(404).json({
                status: "falha",
                message: "Treino não encontrado"
            });
        }
    } catch (err) {
        res.status(500).json({
            status: "falha",
            message: err.message
        });
    }
}
