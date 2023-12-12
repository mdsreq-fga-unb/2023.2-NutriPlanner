const Paciente = require('./models/pacienteModel.js')
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({    // Configura o serviço de e-mail
  service: "gmail",
  auth: {
    user: process.env.EMAIL,  // Gmail do enviante do e-mail
    pass: process.env.PASSWORD   // "Senha de App" gerada pelo Gmail
  },
});

let dataAtual, mensagemEmail, clientes; 

module.exports = async function enviaEmail(){
  //Pegando a data de hoje
  dataAtual = new Date();

  //Pegando os pacientes que fazem aniversário hoje (mês e dia iguais à dataAtual)
  clientes = await Paciente.find({
    $expr: {
      $and: [   
        { $eq: [{ $month: "$dtNascimento" }, dataAtual.getMonth() + 1] },
        { $eq: [{ $dayOfMonth: "$dtNascimento" }, dataAtual.getDate()] },
      ],
    },
    ativo: true
  });

  // Envia um e-mail para cada cliente
  clientes.forEach((client) => {                   

    // Gera o conteúdo do e-mail para pacientes de sexo masculino
    if(client.sexo == 'Masculino'){
      mensagemEmail =                                  
          `
Bom dia meu querido, 
      
Passando para felicitar por mais um ano de vida. Que você tenha um novo ciclo maravilhoso e alcance todos os seus objetivos.
      
Com carinho,
    Leonardo de Lima
          `.trim()
      ;
    }

    // Gera o conteúdo do e-mail para pacientes de sexo feminino
    else{
      mensagemEmail =                                  
          `
Bom dia minha querida, 
      
Passando para felicitar por mais um ano de vida. Que você tenha um novo ciclo maravilhoso e alcance todos os seus objetivos.
      
Com carinho,
    Leonardo de Lima
          `.trim()
      ;
    }

    // Envia o e-mail
      transporter.sendMail({                       
        from: "empresa@example.com",
        to: client.email,
        subject: "Feliz aniversário!",
        text: mensagemEmail,
      }, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("E-mail enviado com sucesso para " + client.nome , " em " + dataAtual);
        }
      });
    });
  }