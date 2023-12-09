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
import aniversariantes from '../../assets/icons/Aniversariantes.svg';

const Home = () =>{
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
                        <Header title="Pacientes" caminhoImagem={paciente} />
                        <div className='Home-botoes-cabecalho'>
                            <Button title="Ajuda" classeAdicional="Home-botoes-cabecalho" icon={ajuda} />
                            <Button title="Sair" classeAdicional="Home-botoes-cabecalho" icon={sair}/>
                        </div>
                    </div>
                    <hr className="Home-divisao-conteudo"></hr>
                </div>
            </div>
            <Footer className="Home-rodape"/>
        </div>
    )    
};

export default Home;
