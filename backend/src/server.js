const express = require('express');
//const mongoose = require('mongoose');
const app = express();

// Rotas da API
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

// forma de ler JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
);
 
app.use(express.json());

app.get('/', (req,res) =>{
    res.send('Hello World!');
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
});
