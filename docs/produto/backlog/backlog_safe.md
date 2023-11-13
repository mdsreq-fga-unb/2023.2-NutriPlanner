# SAFe

## Introdução

A gestão de requisitos é uma disciplina essencial do SAFe, que é um framework complexo de gestão de empresas. Ela é usada para definir o tema, épico, capacidade, funcionalidade e histórias de usuário do projeto.

## Objetivos do projeto

- **Objetivo Principal**: o sistema deve auxiliar um negócio de consultoria de nutrição, tanto na parte de administração dos pacientes (envios de mensagens por e-mail, dados pessoais) quanto na parte de administração de consultas (geração e envio de dietas e treinos, agendamento de consultas).

- **Objetivos Específicos**: 
    1. Cadastrar e administrar informações de pacientes no sistema;
    2. Realizar o agendamento de consultas no sistema;
    3. Gerar dietas pelo sistema;
    4. Gerar treinos pelo sistema;
    5. Enviar mensagens por e-mail aos pacientes cadastrados na plataforma usando a própria plataforma;

### Relação entre objetivos e Funcionalidade
    
<center>

| Objetivo | Funcionalidade relacionada |
|:--------:|----------------------------|
| A | F03, F04, F08|
| B | F09 |
| C | F04, F05 |
| D | F04, F06 |
| E | F07 |

</center>

## Tema

Gestão, análise e armazenamento de dados de pacientes para um consultório de Nutrição

## Épicos

- EP01 - Gerenciamento da Clínica
- EP02 - Gerenciamento de Consultoria

## Capacidades

| **Épico** | **Capacidade 1**                    | **Capacidade 2**                          | 
|:---------:|:-----------------------------------:|:-----------------------------------------:|
| EP01      | CP01 - Acesso ao sistema            | CP02 - Gerenciamento de Dados do Paciente |
| EP02      | CP03 - Informações para o Paciente  | CP05 - Coordenação de Consultas           |

## Funcionalidades

| **Épico** | **Capacidade**                            | **Funcionalidade 1**            | **Funcionalidade 2**                     |**Funcionalidade 3**              |
|:---------:|:-----------------------------------------:|:-------------------------------:|:----------------------------------------:|:--------------------------------:|
| EP01      | CP01 - Acesso ao sistema                  | F01 - Cadastro de Nutricionista        | F02 - Processo de autenticação              |
| EP01      | CP02 - Gerenciamento de Dados do Paciente | F03 - Análise de dados do Paciente     | F04 - Dashboard de dados dos Pacientes      |
| EP02      | CP03 - Coordenação de Consultas           | F05 - Criação de Dietas Nutricionais   | F06 - Criação de Itinerário de Treinamentos | F07 - Envio de emails |
| EP02      | CP04 - Coordenação de Consultas           | F08 - Cadastro dos dados dos Pacientes | F09 - Gerenciamento de Consulta             |

## Histórias de usuário

| **Épico** | **Capacidade** | **Funcionalidade** | **História de usuário**                     |
|:---------:|:--------------:|:------------------:|:-------------------------------------------:|
| EP01      | CP01           | F01                | Eu, como nutricionista, quero ser capaz de cadastrar minhas informações no sistema, como nome, e-mail e senha, para armazenar as informações no sistema. |
| EP01      | CP01           | F01                | Eu, como nutricionista, quero ser capaz de visualizar meu nome e e-mail cadastrado no sistema, para poder consultar meus dados. |
| EP01      | CP01           | F01                | Eu, como nutricionista, quero poder alterar meu nome, e-mail e senha, cadastrados no sistema para mantê-los sempre atualizados. |
| EP01      | CP01           | F01                | Eu, como nutricionista, quero ser capaz de excluir minha conta do sistema, caso não queira mais usá-lo. |
| EP01      | CP01           | F02                | Eu, como nutricionista, devo ser capaz de fazer login no sistema, para ter acesso e ver minhas informações. |
| EP01      | CP01           | F02                | Eu, como nutricionista, quero que o sistema seja capaz de enviar um e-mail que redirecione o usuário para a redefinição de senha, garantindo que o acesso contínuo ao sistema.|
| EP01      | CP02           | F03                | Eu, como nutricionista, devo ser capaz de gerar gráficos comparativos pela plataforma para acompanhar a evolução do paciente. |
| EP01      | CP02           | F04                | Eu, como nutricionista, quero ser capaz de visualizar os clientes cadastrados na pagina inicial, para ver melhor quem está cadastrado |
| EP01      | CP02           | F04                | Eu, como nutricionista, devo ser capaz de buscar pacientes cadastrados, por nome, a fim de agilizar o atendimento. |
| EP01      | CP02           | F04                | Eu, como nutricionista, quero ser capaz de visualizar os aniversariantes do dia, para me manter informado sobre meus pacientes |
| EP02      | CP02           | F05                | Eu, como nutricionista, devo ser capaz de criar dietas personalizadas pela plataforma para atender às necessidades nutricionais específicas dos meus pacientes.|
| EP02      | CP03           | F05                | Eu, como nutricionista, devo ser capaz de visualizar dietas armazenadas na plataforma para rever os planejamentos nutricionais feitos para meus  pacientes. |
| EP02      | CP03           | F05                | Eu, como nutricionista, devo ser capaz de editar dietas armazenadas na plataforma para adaptar ela às necessidades nutricionais específicas dos meus pacientes. |
| EP02      | CP03           | F05                | Eu, como usuário, quero ser capaz de gerar um PDF contendo todas as informações da dieta do meu paciente, para facilitar a transmissão de informações |
| EP02      | CP03           | F05                | Eu, como nutricionista, devo ser capaz de deletar dietas armazenadas na plataforma caso não sejam mais necessárias. |
| EP02      | CP03           | F06                | Eu, como nutricionista, devo ser capaz de visualizar treinamentos armazenados na plataforma para rever os treinamentos feitos para meus pacientes. |
| EP02      | CP03           | F06                | Eu, como nutricionista, devo ser capaz de visualizar treinamentos armazenados na plataforma para rever os treinamentos feitos para meus pacientes. |
| EP02      | CP03           | F06                | Eu, como nutricionista, devo ser capaz de editar treinos armazenadas na plataforma para realizar adaptações para meus pacientes. |
| EP02      | CP03           | F06                | Eu, como nutricionista, devo ser capaz de deletar treinos armazenadas na plataforma caso não sejam mais necessários.|
| EP02      | CP03           | F06                | Eu, como nutricionista, quero ser capaz de gerar um PDF contendo todas as informações do treinamento do meu paciente, para facilitar a transmissão de informações |
| EP02      | CP03           | F07                | Eu, como nutricionista, devo ser capaz de enviar avisos no e-mail de todos os pacientes cadastrados, para mantê-los informados sobre possíveis imprevistos. |
| EP02      | CP03           | F07                | Eu, como nutricionista, quero ser capaz de enviar a dieta criada, em formato de PDF, para o e-mail do cliente cadastrado no sistema, como forma de facilitar a transmissão de informações. |
| EP02      | CP03           | F07                | Eu, como usuário, quero ser capaz de enviar o treino criado, em formato de PDF, para o e-mail do cliente cadastrado no sistema, como forma de facilitar a transmissão de informações|
| EP02      | CP03           | F07                | Eu, como nutricionista, quero que o sistema deva ser capaz de enviar mensagens de aniversário pré-cadastradas para os usuários, para felicitá-los por esse dia.|
| EP02      | CP04           | F08                | Eu, como nutricionista, quero ser capaz de cadastrar pacientes, inserindo nome, e-mail, telefone, endereço, altura, peso e medidas corporais para armazenar as informações no sistema.|
| EP02      | CP04           | F08                | Eu, como nutricionista, quero ser capaz de visualizar as informações de um paciente cadastrado no sistema, para poder consultar as informações.|
| EP02      | CP04           | F08                | Eu, como nutricionista, quero poder alterar as informações de um paciente cadastrado no sistema, como nome, e-mail e telefone para ter as informações sempre atualizadas.|
| EP02      | CP04           | F08                | Eu, como nutricionista, quero ser capaz de excluir um paciente cadastrado no sistema, para evitar o excesso de dados.|
| EP02      | CP04           | F08                | Eu, como nutricionista, quero ser capaz de calcular o IMC, inserindo altura e peso de um paciente, para facilitar a realização do cálculo.|
| EP02      | CP05           | F09                | Eu, como nutricionista, quero que o sistema envie ao e-mail cadastrado do paciente, uma confirmação do agendamento da consulta, para que ele veja se a operação foi bem sucedida.|
| EP02      | CP05           | F09                | Eu, como nutricionista, quero ser capaz de agendar consultas, para deixar marcado em meu calendário.|
| EP02      | CP05           | F09                | Eu, como nutricionista, quero ser capaz de reagendar consultas, alterando as informações de uma consulta anteriormente cadastrada, para manter as informações atualizadas.|

## Requisitos não-funcionais
Requisito Não-Funcional trata-se de restrição ao sistema, seja ela de tempo, processos ou normas, que não é uma funcionalidade. Estão relacionados, por exemplo, à restrição de design ou interface.Utilizamos o modelo URPS+ para categorizá-los em aspectos como Usabilidade, Confiabilidade, Desempenho, Suportabilidade, Restrições de Design, Requisitos de Implementação, Requisitos de Interface e Requisitos Físicos.

| Número | Categoria | Declaração |
| :----: | --------- | ---------- |
|  RNF1  | Implementação   | O produto deve ser uma aplicação web |
|  RNF2  | Usabilidade     | O produto deve ser responsivo a diferentes tamanhos de tela e dispositivos |
|  RNF3  | Implemetação    | O front-end do produto deve ser desenvolvido utilizando ReactJs |
|  RNF4  | Implementação   | O back-end do produto deve ser desenvolvido utilizando NodeJs |
|  RNF5  | Suportabilidade | A aplicação deverá rodar nos navegadores Chrome e Safari em suas versões recentes |

##  Histórico de Versão:

| **Data** | **Versão** | **Descrição** | **Autor** |
| :--------: | :--------: | :--------:  | :--------: | 
| 25/10/2023 | 1.0 | Criação do Documento  | [Mateus Fidelis](https://github.com/MatsFidelis)  |
| 13/11/2023 | 1.1 | Adição dos requisitos não funcionais | [Maria Alice](https://github.com/Maliz30) |