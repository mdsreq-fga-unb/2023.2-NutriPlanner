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

module.exports = routes;