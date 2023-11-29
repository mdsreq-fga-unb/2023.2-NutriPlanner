const express = require("express");
const app = express();
const dotenv = require("dotenv");
const routes = require("./routes.js");

dotenv.config();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

require("./db/connection.js");

app.use(routes);