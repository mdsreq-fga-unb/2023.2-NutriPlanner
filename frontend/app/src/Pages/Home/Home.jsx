import './Home.css'
import React from 'react'
import axios from 'axios'

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

let quantidades;

function buscaQuantidadePacientes(){
    const url = 'http://localhost:3000/pacientes';

    
    axios.get(url)
    .then((response) => {
        quantidades = response.data.dados;

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

const Home = () =>{
    buscaQuantidadePacientes();

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
                            <Button title="Ajuda" classeAdicional="Home-botoes-cabecalho" icon={ajuda} />
                            <Button title="Sair" classeAdicional="Home-botoes-cabecalho" icon={sair}/>
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
                <div className='Home-aniversariantes'>
                    <div className='Home-aniversariantes-cabecalho'>
                        <img className='Aniversariantes-cabecalho-imagem' src={bolo} alt="" />
                        <span className='Aniversariantes-cabecalho-texto'>Aniversariantes</span>
                    </div>
                    <div className="Aniversariantes-paciente">
                        <div className="Aniversariante-foto">
                        </div>
                        <div className='Aniversariante-dados'>
                            <span className='Aniversariante-texto'>Nome</span>
                            <span className='Aniversariante-texto'>Aniversário</span>
                            <span className='Aniversariante-texto'>Fará 26 anos!</span>
                        </div>
                            <a className='Aniversariante-link' href="">Ver dados do Paciente</a>
                    </div>
                </div>
            </div>
            <Footer className="Home-rodape"/>
        </div>
    )    
};

export default Home;
