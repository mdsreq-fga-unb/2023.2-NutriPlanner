const express = require('express');

const routes = express.Router();

const users =[{
    id:1,
    name: 'Admin',
    pin: '12345'
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