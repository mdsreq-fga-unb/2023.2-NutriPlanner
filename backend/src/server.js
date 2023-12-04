const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors")

const pacienteRoutes = require("./routes/pacienteRoutes.js");

dotenv.config();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

require("./db/connection.js");

app.use('/pacientes', pacienteRoutes);
