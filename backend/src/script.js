const enviaEmail = require("./enviarEmail.js");
const cron = require("node-cron");      

const clients = await mongoClient.find({ // Obtém os clientes que possuem aniversário hoje
  birthDate: {
    $eq: moment().format("YYYY-MM-DD"),
  },
});

cron.schedule("0 0 * * *", () => {
  enviaEmail(clients);               // Executa o código
});

enviaEmail(clients);
