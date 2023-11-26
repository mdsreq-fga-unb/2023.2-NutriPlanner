const express = require("express");
const app = express();
const cron = require("node-cron");      

cron.schedule("0 0 * * *", () => {
  require("./script.js");               // Executa o código
});

const transporter = nodemailer.createTransport({    // Configura o serviço de e-mail
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const clients = await mongoClient.find({        // Obtém os clientes que possuem aniversário hoje
  birthDate: {
    $eq: moment().format("YYYY-MM-DD"),
  },
});

clients.forEach((client) => {                   // Envia um e-mail para cada cliente

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

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
