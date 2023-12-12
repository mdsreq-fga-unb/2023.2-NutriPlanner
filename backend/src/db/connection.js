const moongoose = require('mongoose');

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD; 

const connect = async () => {
    moongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@nutriplanner.uja7pbr.mongodb.net/NutriPlanner?retryWrites=true&w=majority`)

    const connection = moongoose.connection;
    
    connection.on("error", () => {
        console.error('Erro ao conectar ao MongoDB')
    })

    connection.on("open", ()=> {
        console.log("Conectado ao MongoDB com sucesso!")
    })
}

connect();
module.exports = moongoose;