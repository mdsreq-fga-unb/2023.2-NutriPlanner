# SAFe

## Introdução

A gestão de requisitos é uma disciplina essencial do SAFe, que é um framework complexo de gestão de empresas. Ela é usada para definir o tema, épico, capacidade, funcionalidade e histórias de usuário do projeto.

## Objetivos do projeto

- **Objetivo Principal**: o sistema deve auxiliar um negócio de consultoria de nutrição, tanto na parte de administração dos pacientes (envios de mensagens por e-mail, dados pessoais) quanto na parte de administração de consultas (geração e envio de dietas e treinos, agendamento de consultas).

## Requisitos Funcionais

**Requisitos Funcionais** são **requisitos que descrevem uma ação/comportamento esperada do produto**. Em outras palavras, são as **funcionalidades do sistema**.

|  N°  | Descrição |
|------|-----------|
| RF01 | Cadastro das informações do nutricioniosta (nome, e-mail e senha) no sistema. |
| RF02 | Visualização do nome, e-mail e senha do nutricionista cadastrados no sistema |
| RF03 | Edição do nome, e-mail e senha do nutricionista cadastrados no sistema |
| RF04 | Exclusão da conta do nutricionista do sistema |
| RF05 | Login no sistema para ter acesso às informações |
| RF06 | Envio de e-mail para a redefinição de senha |
| RF07 | Geração de gráficos comparativos pela plataforma |
| RF08 | Visualização de pacientes cadastrados na página inicial do sistema |
| RF09 | Buscar de pacientes cadastrados no sistema por nome |
| RF10 | Visualização de pacientes aniversariantes na página inicial |
| RF11 | Criação de uma dieta personalizada na plataforma para um paciente |
| RF12 | Visualização da dieta armazenada na plataforma para um paciente |
| RF13 | Edição de uma dieta armazenada na plataforma para um paciente |
| RF14 | Geração de PDF contendo todas as informações da dieta de um paciente |
| RF15 | Exclusão de dietas armazenadas na plataforma |
| RF16 | Visualização de treinamentos armazenados na plataforma |
| RF17 | Edição de treinamentos armazenados na plataformas |
| RF18 | Exclusão de treinamentos armazenados na plataforma |
| RF19 | Geração de um PDF contendo todas as informações de um treinamento do paciente |
| RF20 | Envio de avisos por e-mail a todos os pacientes cadastrados na plataforma |
| RF21 | Envio de dieta criada, em formato PDF, para o e-mail do paciente cadastrado no sistema. |
| RF22 | Envio do treino criado, em formato de PDF, para o e-mail do paciente cadastrado no sistema. |
| RF23 | Envio de mensagens de aniversário pré-cadastradas para os pacientes em seu aniversário |
| RF24 | Cadastro do nome, e-mail, telefone, endereço, altura, peso e medidas corporais do paciente no sistema |
| RF25 | Visualização das informações de um paciente cadastrado no sistema |
| RF26 | Edição das informações de um paciente cadastrado no sistema |
| RF27 | Exclusão de um  paciente cadastrado no sistema |
| RF28 | Cálculo de IMC através do sistema |
| RF29 | Envio ao e-mail cadastrado do paciente uma confirmação do agendamento da consulta. |
| RF30 | Agendamento de consultas no calendário do nutricionista |
| RF31 | Reagendamento de consultas no calendário do nutricionista |


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

##  Histórico de Versão:

| **Data** | **Versão** | **Descrição** | **Autor** |
| :--------: | :--------: | :--------:  | :--------: | 
| 25/10/2023 | 1.0 | Criação do Documento  | [Mateus Fidelis](https://github.com/MatsFidelis)  |
| 14/11/2023 | 1.1 | Atualização dos requisitos funcionais  | [Lucas Spinosa](https://github.com/LucasSpinosa)  |