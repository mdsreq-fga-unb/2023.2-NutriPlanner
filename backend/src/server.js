const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const dotenv = require("dotenv");

const treinoRoutes = require('./routes/treinoRoutes.js');

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(routes);

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

require("./db/connection.js");

app.use('/treinos', treinoRoutes);
