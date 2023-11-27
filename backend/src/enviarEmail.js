const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({    // Configura o serviço de e-mail
  service: "gmail",
  auth: {
    user: process.env.EMAIL,  // Gmail do enviante do e-mail
    pass: process.env.PASSWORD   // "Senha de App" gerada pelo Gmail
  },
});

module.exports = function enviaEmail (clientes){
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
