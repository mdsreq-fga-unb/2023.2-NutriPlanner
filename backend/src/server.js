const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (req,res) =>{
    res.send('Hello World!');
});


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


require("./db/connection.js");
