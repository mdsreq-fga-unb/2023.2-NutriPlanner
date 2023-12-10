import './Home.css'
import React from 'react'
import axios from 'axios'
import moment from 'moment'

//Componentes
import Logo from '../../components/Logo/Logo'
import MenuButton from '../../components/Buttons/Menu/MenuButton'
import Button from '../../components/Buttons/Button'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

//Ícones -- Menu
import dieta from '../../assets/icons/Adição Dieta.svg';
import agendamento from '../../assets/icons/Agendamento.svg';
import treino from '../../assets/icons/Treino.svg';
import paciente from '../../assets/icons/Paciente.svg';
import adicaoPaciente from '../../assets/icons/Adição Paciente.svg';

//Ícones -- Botões
import ajuda from '../../assets/icons/Ajuda.svg';
import sair from '../../assets/icons/Sair.svg';

//Ícones -- Seções
import grupoPacientes from '../../assets/icons/GrupoPacientes.svg';
import consultas from '../../assets/icons/Consultas.svg';
import bolo from '../../assets/icons/Bolo de Aniversário.svg';

function buscaQuantidadePacientes(){
    const url = 'http://localhost:3000/pacientes/buscaQuantidades';

    
    axios.get(url)
    .then((response) => {
        const quantidades = response.data.dados;

        const cardPacientes = document.getElementById('quantidadesPacientes');
        
        for(const campo in quantidades){
            const dado = document.createElement('p');
            dado.innerText = `${quantidades[campo]}  |  ${campo}`;
            dado.classList.add('Card-Pacientes-item');

            cardPacientes.appendChild(dado)
        }

      }, (error) => {
        const cardPacientes = document.getElementById('quantidadesPacientes');

        cardPacientes.innerHTML = `<p class="Card-Pacientes-item">Não foi possível obter a quantidade de pacientes.</p>`
      });
};

function buscaAniversariantes(){
    const url = 'http://localhost:3000/pacientes/buscaAniversarios';

    axios.get(url)
    .then((response) => {
        const aniversariantes = response.data.data.aniversariantes;
        const dataAtual = new Date();

        const areaAniversarios = document.getElementById('pacientesAniversariantes');

        for(let i = 0; i < aniversariantes.length; i++){
            // Card de aniversário
            const cardAniversario = document.createElement('div');

            cardAniversario.classList.add('Aniversariantes-paciente');

            const dataPaciente = new Date(aniversariantes[i].dtNascimento)
            const dataFormatada = moment(dataPaciente).format('DD/MM/YYYY');

            const idadePaciente = dataAtual.getFullYear() - dataPaciente.getFullYear();

            cardAniversario.innerHTML = 
            `
            <div class="Aniversariante-foto"></div>
            <div class='Aniversariante-dados'>
                <span class='Aniversariante-texto'>${aniversariantes[i].nome}</span>
                <span class='Aniversariante-texto'>Aniversário: ${dataFormatada}</span>
                <span class='Aniversariante-texto'>Fará ${idadePaciente} anos!</span>
                <a class='Aniversariante-link' href="">Ver dados do Paciente</a>
                </div>

            `

            areaAniversarios.appendChild(cardAniversario);
        }
      }, (error) => {
        console.log(error.response)
      });
};

const Home = () =>{
    buscaQuantidadePacientes();
    buscaAniversariantes();

    return(     
        <div className="Home">
            <div className="Home-menu-lateral">
                <Logo />
                <span className="Home-menu-titulo">MENU</span>
                <hr className="Home-menu-divisao" />
                <nav className="Home-navegacao">
                    <a href="/home" className='Home-item-menu'>
                        <MenuButton title="Pacientes" icon={paciente} selecionado="true"/>
                    </a>
                    <a href="/cadastrarPaciente" className='Home-item-menu'>
                        <MenuButton title="Cadastrar Paciente" icon={adicaoPaciente}/>
                    </a>
                    <a href="/" className='Home-item-menu'>
                        <MenuButton title="Criar Dieta" icon={dieta}/>
                    </a>
                    <a href="/" className='Home-item-menu'>
                        <MenuButton title="Criar Plano de Treino" icon={treino}/>
                    </a>
                    <a href="/" className='Home-item-menu'>
                        <MenuButton title="Agendar Consulta" icon={agendamento} />
                    </a>
                </nav>
            </div>
    
            <div className="Home-conteudo">
                <div className="Home-cabecalho">
                    <div className='Home-items-cabecalho'>
                        <Header className="Home-info-cabecalho"  title="Pacientes" caminhoImagem={paciente} />
                        <div className='Home-botoes-cabecalho'>
                            <a className='Home-link-botao' href="">
                                <Button title="Ajuda" classeAdicional="Home-botoes-cabecalho" icon={ajuda} />
                            </a>
                            <a className='Home-link-botao' href="/">
                                <Button title="Sair" classeAdicional="Home-botoes-cabecalho" icon={sair}/>
                            </a>
                        </div>
                    </div>
                    <hr className="Home-divisao-conteudo"></hr>
                </div>
                <div className="Home-cards">
                    <div className="Home-card">
                        <div className="Home-card-cabecalho">
                            <img className='Home-card-icone' src={grupoPacientes}/>
                            <span className="Home-card-titulo">Quantidade de Pacientes</span>
                        </div>
                        <hr className="Home-divisao-conteudo-card"></hr>
                        <div id="quantidadesPacientes">
                        </div>
                    </div>
                    <div className="Home-card">
                        <div className="Home-card-cabecalho">
                            <img className='Home-card-icone icone-consultas' src={consultas}/>
                            <span className="Home-card-titulo">Consultas do Dia</span>
                        </div>
                        <hr className="Home-divisao-conteudo-card"></hr>
                        <div>
                            <p className='Card-Pacientes-item'>Lucas | 12/12/2023 | 12:12</p>
                            <p className='Card-Pacientes-item'>Lucas | 12/12/2023 | 12:12</p>
                        </div>
                    </div>
                </div>
                <hr className="Home-divisao-conteudo"></hr>
                <div className='Home-aniversariantes' id="pacientesAniversariantes">
                    <div className='Home-aniversariantes-cabecalho'>
                        <img className='Aniversariantes-cabecalho-imagem' src={bolo} alt="" />
                        <span className='Aniversariantes-cabecalho-texto'>Aniversariantes</span>
                    </div>
                </div>
            </div>
            <Footer className="Home-rodape"/>
        </div>
    )    
};

export default Home;
