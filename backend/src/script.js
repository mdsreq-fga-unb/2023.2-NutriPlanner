const enviaEmail = require("./enviarEmail.js");
const cron = require("node-cron");      

console.log('Executei script.js')

//Função 'enviaEmail()' será executada todo dia às 9:00 da manhã.
cron.schedule("0 9 * * *", () => {
  enviaEmail(); 
});