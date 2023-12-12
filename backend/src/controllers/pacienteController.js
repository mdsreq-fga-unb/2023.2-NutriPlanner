const mongoose = require('mongoose');
const validator = require('validator');
const diacritic = require('diacritic');

// Modelo de Paciente
const Paciente = require('./../models/pacienteModel');
const Medida = require('./../models/medidasModel');

// Validadores de E-mail e Telefone

exports.checkEmail = async (req, res, next) => {
    if (req.body.email && !validator.isEmail(req.body.email)) {
        return res.status(400).json({
            status: "falha",
            message: "E-mail inválido"
        })
    }
    next();
};

exports.checkTelefone = async (req, res, next) => {
    if (req.body.telefone && !validator.isMobilePhone(req.body.telefone, 'pt-BR')) {
        return res.status(400).json({
            status: "falha",
            message: "Telefone inválido"
        })
    }
    next(); 
};

// Funcao de Cadastro de paciente e suas medidas no BD

exports.cadastroPaciente = async (req, res) => {
    let newPaciente;
    let newMedida;
    
    try {
        // Criar o Paciente
        newPaciente = await Paciente.create(req.body.paciente);

        // Adicionar o id do Paciente às informações da Medida
        const medidaData = {
            idPaciente: newPaciente._id,
            ...req.body.medida,
        };

        // Criar a Medida
        newMedida = await Medida.create(medidaData);

        return res.status(200).json({
            status: "sucesso",
            message: "Paciente e Medida criados com sucesso",
            data: { 
                paciente: newPaciente,
                medida: newMedida
            }    
        });
    } catch (err) {
        // Se houver um erro em qualquer uma das etapas, desfazer as operações já realizadas
        if (newPaciente) {
            await Paciente.deleteOne({ _id: newPaciente._id });
        }
    
        if (newMedida) {
            await Medida.deleteOne({ _id: newMedida._id });
        }
    
        return res.status(400).json({
            status: "falha",
            message: err
        });
    }
};

// Buscar pacientes

exports.buscarPacientes = async (req, res) => {
    try {
        let nomeBusca;
        
        if(req.params.nome === undefined) nomeBusca = ""; 
        else nomeBusca = diacritic.clean(req.params.nome.replace(/-/g, ' ')).toLowerCase();

        const data = await Paciente.find({}, 'nome dtNascimento ativo').sort({ nome: 1 });

        const result = data.filter(paciente => diacritic.clean(paciente.nome).toLowerCase().includes(nomeBusca));

        return res.status(200).json({
            status: "sucesso",
            data: result
        });
    } catch (err) {
        return res.status(400).json({
            status: "falha",
            message: err.message
        });
    }
}

// Método GET

exports.getPaciente = async (req, res) => {
    const pacienteId = req.params.pacienteId;
    try{
        const paciente = await Paciente.findById(pacienteId);

        if(!paciente) {
            return res.status(404).json({
                status: "falha",
                message: "Paciente não encontrado"
            });
        }
        const medida = await Medida.findOne({idPaciente: paciente._id});

        if(!medida){
            return res.status(404).json({
                status: "falha",
                message: "Medida não encontrada para este paciente"
            });
        }

        return res.status(200).json({
            status: "sucesso",
            data:{
                paciente: paciente,
                medida: medida
            }
        });
    }
    catch(err){
        return res.status(500).json({
            status: "falha",
            message: err.message
        })
    }
}


// Método UPDATE - PATCH

exports.updatePaciente = async (req, res) => {
    const pacienteId = req.params.pacienteId;

    try{
        const encontrarPaciente = await Paciente.findById(pacienteId);

        if(!encontrarPaciente){
            return res.status(404).json({
                status: "falha",
                message: "Paciente não encontrado"
            });
        }

        await Paciente.findByIdAndUpdate(pacienteId, req.body.paciente, {new: true});

        const medida = await Medida.findOne({idPaciente: pacienteId});

        if(!medida){
            return res.status(404).json({
                status: "falha",
                message: "Medida não encontrada para este paciente"
            });
        }

        // Atualizar medida
        const atualizarMedida = {
            ...req.body.medida,
            imc: (req.body.medida.pesoJejum / (req.body.medida.altura ** 2)).toFixed(2)
        };

        await Medida.findByIdAndUpdate(medida._id, atualizarMedida, {new: true})

        return res.status(200).json({
            status: "sucesso",
            message: "Paciente e medida atualizados com sucesso"
        });
    }
    catch(err){}
}
    
// Buscar pacientes

exports.buscarPacientes = async (req, res) => {
    try {
        let nomeBusca;
        
        if(req.params.nome === undefined) nomeBusca = ""; 
        else nomeBusca = diacritic.clean(req.params.nome.replace(/-/g, ' ')).toLowerCase();

        const data = await Paciente.find({}, 'nome dtNascimento ativo').sort({ nome: 1 });

        const result = data.filter(paciente => diacritic.clean(paciente.nome).toLowerCase().includes(nomeBusca));

        return res.status(200).json({
            status: "sucesso",
            data: result
        });
    } catch (err) {
        return res.status(400).json({
            status: "falha",
            message: err.message
        });
    }
}

// Método GET

exports.getPaciente = async (req, res) => {
    const pacienteId = req.params.pacienteId;
    try{
        const paciente = await Paciente.findById(pacienteId);

        if(!paciente) {
            return res.status(404).json({
                status: "falha",
                message: "Paciente não encontrado"
            });
        }
        const medida = await Medida.findOne({idPaciente: paciente._id});

        if(!medida){
            return res.status(404).json({
                status: "falha",
                message: "Medida não encontrada para este paciente"
            });
        }

        return res.status(200).json({
            status: "sucesso",
            data:{
                paciente: paciente,
                medida: medida
            }
        });
    }
    catch(err){
        return res.status(500).json({
            status: "falha",
            message: err.message
        })
    }
}


// Método UPDATE - PATCH

exports.updatePaciente = async (req, res) => {
    const pacienteId = req.params.pacienteId;

    try{
        const encontrarPaciente = await Paciente.findById(pacienteId);

        if(!encontrarPaciente){
            return res.status(404).json({
                status: "falha",
                message: "Paciente não encontrado"
            });
        }

        await Paciente.findByIdAndUpdate(pacienteId, req.body.paciente, {new: true});

        const medida = await Medida.findOne({idPaciente: pacienteId});

        if(!medida){
            return res.status(404).json({
                status: "falha",
                message: "Medida não encontrada para este paciente"
            });
        }

        // Atualizar medida
        const atualizarMedida = {
            ...req.body.medida,
            imc: (req.body.medida.pesoJejum / (req.body.medida.altura ** 2)).toFixed(2)
        };

        await Medida.findByIdAndUpdate(medida._id, atualizarMedida, {new: true})

        return res.status(200).json({
            status: "sucesso",
            message: "Paciente e medida atualizados com sucesso"
        });
    }
    catch(err){
        return res.status(400).json({
            status: "falha",
            message: err.message
        });
    }
}
exports.buscaQuantidade = async (req, res) => {
    try {
        const quantidadeTotal = await Paciente.countDocuments();
        const quantidadeAtivos = await Paciente.countDocuments({ativo: true});

        return res.status(200).json({
            status: "sucesso",
            dados: { 
                Total: quantidadeTotal,
                Ativos: quantidadeAtivos,
                Inativos: quantidadeTotal - quantidadeAtivos
            }    
        });
    }
    catch(err) {
        return res.status(400).json({
            status: "falha",
            message: err
        });
    }
}

exports.buscaAniversariantes = async (req, res) => {
    try{
        const dataAtual = new Date();
        const dataDaquiQuinzeDias = new Date(new Date().setDate(dataAtual.getDate() + 15));

        const aniversariantes = await Paciente.find({
            $expr: {
                $and: [
                    { $gte: [{ $dayOfMonth: "$dtNascimento" }, { $dayOfMonth: dataAtual }] },
                    { $gte: [{ $month: "$dtNascimento" }, { $month: dataAtual }] },
                    { $lte: [{ $dayOfMonth: "$dtNascimento" }, { $dayOfMonth: dataDaquiQuinzeDias }] },
                    { $lte: [{ $month: "$dtNascimento" }, { $month: dataDaquiQuinzeDias }] },
                ]
            }
        }).sort({ dtNascimento: 1});

        return res.status(200).json({
            status: "sucesso",
            data: { 
                aniversariantes: aniversariantes,
            }    
        });
    }catch(err){
        return res.status(400).json({
            status: "falha",
            message: err
        })
    }
}