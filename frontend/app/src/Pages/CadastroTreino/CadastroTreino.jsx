import './CadastroTreino.css'
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
import salvar from '../../assets/icons/Salvar.svg';
import voltar from '../../assets/icons/Voltar.svg';

const CadastroTreino = () =>{


    // function cadastrarDieta(e){
    //     e.preventDefault();

    //     //console.log(dadosPaciente)

    //     const url = 'http://localhost:3000/path';

    //     axios.post(url, dadosPaciente)
    //       .then((response) => {
    //         alert('Usuário Cadastrado com sucesso!')
    //       }, (error) => {
    //         alert('Não foi possível cadastrar o usuário. Verifique os dados informados!')
    //         console.log(error.response.data)
    //       });
    // };

    return(     
        <div className="CadastroPaciente">
            <div className="CadastroPaciente-menu-lateral">
                <Logo />
                <span className="CadastroPaciente-menu-titulo">MENU</span>
                <hr className="CadastroPaciente-menu-divisao" />
                <nav className="CadastroPaciente-navegacao">
                    <a href="/" className='CadastroPaciente-item-menu'>
                        <MenuButton title="Pacientes" icon={paciente}/>
                    </a>
                    <a href="/" className='CadastroPaciente-item-menu'>
                        <MenuButton title="Cadastrar Paciente" icon={adicaoPaciente}selecionado="true" />
                    </a>
                    <a href="/" className='CadastroPaciente-item-menu'>
                        <MenuButton title="Criar Dieta" icon={dieta}/>
                    </a>
                    <a href="/" className='CadastroPaciente-item-menu'>
                        <MenuButton title="Criar Plano de Treino" icon={treino}/>
                    </a>
                    <a href="/" className='CadastroPaciente-item-menu'>
                        <MenuButton title="Agendar Consulta" icon={agendamento} />
                    </a>
                </nav>
            </div>
    
            <div className="CadastroPaciente-conteudo">
                <div className="CadastroPaciente-cabecalho">
                    <div className='CadastroPaciente-items-cabecalho'>
                        <Header title="Cadastrar Paciente" caminhoImagem={adicaoPaciente} />
                        <div className='CadastroPaciente-botoes-cabecalho'>
                            <Button title="Ajuda" classeAdicional="CadastroPaciente-botoes-cabecalho" icon={ajuda} />
                            <Button title="Sair" classeAdicional="CadastroPaciente-botoes-cabecalho" icon={sair}/>
                        </div>
                    </div>
                    <hr className="CadastroPaciente-divisao-conteudo"></hr>
                    <Button title="Voltar" classeAdicional="CadastroPaciente-botao-voltar" icon={voltar}/>
                </div>
    
                <form className="CadastroPaciente-formulario">
                    <fieldset className="CadastroPaciente-area-formulario">
                        <legend className="CadastroPaciente-titulo-area">Buscar Paciente</legend>
    
                        <input
                        type="text"
                        placeholder="Digite o nome do usuário"
                        />
                        <button>Buscar</button>
                    </fieldset>
    
                    <Button title="Cadastrar" classeAdicional="CadastroPaciente-enviar" icon={salvar} onClick={e => cadastrarPaciente(e)}/>
                </form>
            </div>
            <Footer className="CadastroPaciente-rodape"/>
        </div>
    )    
};

export default CadastroTreino
