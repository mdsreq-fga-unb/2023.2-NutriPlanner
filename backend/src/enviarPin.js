const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({    // Configura o serviço de e-mail
  service: "gmail",
  auth: {
    user: process.env.EMAIL,  // Gmail do enviante do e-mail
    pass: process.env.PASSWORD   // "Senha de App" gerada pelo Gmail
  },
});

module.exports = async function recuperarPin() {

const mensagemEmail = 
    `
    Olá,

    Foi solicitado a recuperação do seu PIN de acesso ao sistema.

    Para acessar o sistema, utilize o PIN abaixo:

    ${process.env.USER.PIN}

    Atenciosamente,
    Nutriplanner.
    `
    .trim();

const mailOptions = {
    from: 'empresa@example.com',
    to: client.email,
    subject: 'Recuperação de Pin de Acesso',
    text: mensagemEmail
};

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    throw new Error(err);
  }

  console.log("E-mail enviado com sucesso para " + client.nome);
}
