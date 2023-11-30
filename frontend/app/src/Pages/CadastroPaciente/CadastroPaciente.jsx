import './CadastroPaciente.css'
import React from 'react'

//Componentes
import Logo from '../../components/Logo/Logo'
import MenuButton from '../../components/Buttons/Menu/MenuButton'
import Button from '../../components/Buttons/Button'
import Header from '../../components/Header/Header'

//Ícones
import dieta from '../../assets/icons/Adição Dieta.svg';
import agendamento from '../../assets/icons/Agendamento.svg';
import treino from '../../assets/icons/Treino.svg';
import paciente from '../../assets/icons/Paciente.svg';
import adicaoPaciente from '../../assets/icons/Adição Paciente.svg';

export default props =>
    <div className="cadastro">
        <div className="menu-lateral">
            <Logo />
            <span className="menu-titulo">MENU</span>
            <hr className="menu-divisao"/>
            <nav className="navegacao">
                <a href="/" className='item-menu'>
                    <MenuButton title="Pacientes"/>
                </a>
                <a href="/" className='item-menu'>
                    <MenuButton title="Cadastrar Paciente" selecionado="true"/>
                </a>
                <a href="/" className='item-menu'>
                    <MenuButton title="Criar Dieta"/>
                </a>
                <a href="/" className='item-menu'>
                    <MenuButton title="Criar Plano de Treino"/>
                </a>
                <a href="/" className='item-menu'>
                    <MenuButton title="Agendar Consulta"/>
                </a>
            </nav>
        </div>
        <div className="conteudo">
            <div className='cabecalho'>
                <Header title="Cadastrar Paciente" caminhoImagem={adicaoPaciente}/>
                <div>
                    <Button className="botao-Ajuda" title="Ajuda"/>
                    <Button title="Sair"/>
                </div>
            </div>
            <hr class="divisao-conteudo"></hr>
            <Button title="Voltar"/>
        </div>
    </div>