const express = require("express");
const app = express();
const cron = require("node-cron");      
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({    // Configura o serviço de e-mail
  service: "gmail",
  auth: {
    user: process.env.USERNAME,  // Gmail do enviante do e-mail
    pass: process.env.PASSWORD   // "Senha de App" gerada pelo Gmail
  },
});

// const clients = await mongoClient.find({ // Obtém os clientes que possuem aniversário hoje
//   birthDate: {
//     $eq: moment().format("YYYY-MM-DD"),
//   },
// });

const clients = [
  {
    name: 'Mateus Fidelis',
    email: 'mateusfidelis.43@gmail.com'
  },
  {
    name: 'Lucas Spinosa',
    email: 'lucas.shot.lima@gmail.com' 
  }
];

function enviaEmail(clientes) {
  clientes.forEach((client) => {                   // Envia um e-mail para cada cliente
  
    const text =                                  // Gera o conteúdo do e-mail
      `
      Prezado(a) ${client.name},
  
      Desejamos um feliz aniversário!
  
      Atenciosamente,
      Equipe da empresa
      `
    ;
  
    transporter.sendMail({                        // Envia o e-mail
      from: "empresa@example.com",
      to: client.email,
      subject: "Feliz aniversário!",
      text,
    }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("E-mail enviado com sucesso para " + client.name , " em " + data);
      }
    });
  });
}

cron.schedule("0 0 * * *", () => {
  enviaEmail(clients);               // Executa o código
});

app.listen(3030, () => {
  console.log("Servidor rodando na porta 3030");
  enviaEmail(clients);
});
