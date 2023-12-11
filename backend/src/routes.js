const express = require('express');
require('dotenv').config();

const routes = express.Router();

const users = [{
    id: process.env.USER_ID,
    name: process.env.USER_NAME,
    pin: process.env.USER_PIN
}];

routes.post('/login', (req,res) =>{
    const {pin} = req.body;
    const user = users.find(user => user.pin == pin);
    if(user){
        return res.status(200).json(user);
    }
    return res.status(401).json({message: 'Pin inválido'});

});

routes.post('/recuperar-pin', async (req, res) => {
    const { question, answer } = req.body;
  
    try {
      const user = await users.findOne({ question, answer });
      if (!user) {
        return res.status(401).json({ message: "Resposta incorreta" });
      } else {
        await recuperarPin();
      }
  
      return res.status(200).json({ message: "Pin de acesso enviado com sucesso" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao recuperar o pin de acesso" });
    }
  });

module.exports = routes;