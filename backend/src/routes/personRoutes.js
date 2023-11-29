const router = require('express').Router;
// const person = require('../models/person')

// CREATE

router.post('/', async (req, res) => {

    const {nome, email, telefone, endereco, altura, peso} = req.body

    if(!nome){
        res.status(422).json({error: 'O nome é obrigatório!'})
    }

    const person = {
        nome,
        email,
        telefone,
        endereco,
        altura,
        peso
    }

    try{
        // criando dados
        await person.create(person)

        res.status(201).json({message: 'Pessoa inserida com sucesso!'})

    } catch (error){
        res.status(500).json({error: error})
    }
})


// READ

router.get('/', async(req, res) => {
    try{
        const people = await person.find();
        res.status(200).json(people);
    } catch(error){
        res.status(500).json({error: error});
    }
})

// READ - POR ID

router.get('/id', async(req, res) => {
    const id = req.params.id;

    try{
        const people = await person.find({_id: id});
        if(!person){
            res.status(422).json({message: 'O usuário não foi encontrado!'})
            return
        }

        res.status(200).json(people);
    } catch(error){
        res.status(500).json({error: error});
    }
})

// UPDATE - (PUT, PATCH)

router.patch('/:id', async(req, res) => {
    const id = req.params.id;
    const {nome, email, telefone, endereco, altura, peso} = req.body
    const person = {
        nome,
        email,
        telefone,
        endereco,
        altura,
        peso
    }

    try{
        const updatedPerson = await person.updatedPerson({_id: id}, person);
        if(updatedPerson.matchedCount === 0){
            res.status(422).json({message: 'O usuário não foi encontrado!'})
            return
        }
        res.status(200).json(person);
    } catch(error){
        res.status(500).json({error: error});
    }
})


module.exports = router