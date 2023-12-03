const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

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


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


require("./db/connection.js");
