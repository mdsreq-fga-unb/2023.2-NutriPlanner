import './CadastroTreinoStyle.css'
import React, { useState } from 'react';
import axios from 'axios'

//Componentes
import Logo from '../../components/Logo/Logo'
import MenuButton from '../../components/Buttons/Menu/MenuButton'
import Button from '../../components/Buttons/Button'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Search from '../../components/Search/Search'

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
  const dadosTreino = {
    idPaciente: '',
    sessoes: [
      {
        codigo: '',
        dia: '',
        regiaoFocal: '',
        duracaoAerobico: 0,
        tempoDescanso: 30,
        exercicios: [
          {
            nome: '',
            series: 1,
            repeticoes: 10,
            carga: 0,
            tecnicaAvancada: '',
          },
        ],
      },
    ],
  }

  let indiceExercicio = 0;
  let indiceSessao = 0;

  const preencheAtributoExercicio = (event, indice) => {
    const { name, value } = event.target;
    
    const exercicioAtual = dadosTreino.sessoes[indiceSessao].exercicios[indice]
    exercicioAtual[name] = value;
};

  function adicionarExercicio(event, index) {
    event.preventDefault()

    dadosTreino.sessoes[indiceSessao].exercicios.push({
      nome: '',
      series: 1,
      repeticoes: 10,
      carga: 0,
      tecnicaAvancada: '',
  })

  let containerCampos = document.createElement('div')
  containerCampos.classList.add('CadastroTreino-campos-exercicio');
  containerCampos.dataset.index = indiceExercicio;

    containerCampos.innerHTML = `
        <div class="CadastroTreino-item-formulario-exercicio">
            <label class="CadastroTreino-label-campo CadastroTreino-label-exercicio CadastroTreino-campo-obrigatorio" for="nomeExercicio">Nome do Exercício</label>
            <input class="CadastroTreino-input CadastroTreino-input-exercicio" type="text" id="nomeExercicio" name="nome" required="required" maxLength="200"/>
        </div>
        <div class="CadastroTreino-item-formulario-exercicio">
            <label class="CadastroTreino-label-campo CadastroTreino-label-exercicio CadastroTreino-campo-obrigatorio" for="series">Séries</label>
            <input class="CadastroTreino-input CadastroTreino-input-series" type="number" id="series" name="series" required="required" max="10" min="1" defaultValue="1"/>
        </div>
        <div class="CadastroTreino-item-formulario-exercicio">
            <label class="CadastroTreino-label-campo CadastroTreino-label-exercicio CadastroTreino-campo-obrigatorio" for="repeticoes">Repetições</label>
            <input class="CadastroTreino-input CadastroTreino-input-repeticoes" type="number" id="repeticoes" name="repeticoes" required="required" max="200" min="1" defaultValue="10"/>
        </div>
        <div class="CadastroTreino-item-formulario-exercicio">
          <label class="CadastroTreino-label-campo CadastroTreino-label-exercicio CadastroTreino-campo-obrigatorio" for="carga">Carga (kg)</label>
          <input class="CadastroTreino-input CadastroTreino-input-carga" type="number" id="carga" name="carga" required="required" max="200" min="1" defaultValue="10"/>
        </div>
        <div class="CadastroTreino-item-formulario-exercicio">
          <label class="CadastroTreino-label-campo CadastroTreino-label-exercicio CadastroTreino-campo-obrigatorio" for="carga">Técnica avançada</label>
          <input class="CadastroTreino-input CadastroTreino-input-tecavancada" type="text" id="tecavancada" name="tecavancada" required="required" max="200" min="1" defaultValue="10"/>
        </div>

    `;

    const inputNome = containerCampos.querySelector('.CadastroTreino-input-exercicio');
    inputNome.addEventListener('change', function(e) {
        preencheAtributoExercicio(e, containerCampos.dataset.index)
    })

    const inputSeries = containerCampos.querySelector('.CadastroTreino-input-series');
    inputSeries.addEventListener('change', function(e) {
        preencheAtributoExercicio(e, containerCampos.dataset.index)
    })

    const inputRepeticoes = containerCampos.querySelector('.CadastroTreino-input-repeticoes');
    inputRepeticoes.addEventListener('change', function(e) {
        preencheAtributoExercicio(e, containerCampos.dataset.index)
    })

    const inputCarga = containerCampos.querySelector('.CadastroTreino-input-carga');
    inputCarga.addEventListener('change', function(e) {
        preencheAtributoExercicio(e, containerCampos.dataset.index)
    })

    const inputTecAvancada = containerCampos.querySelector('.CadastroTreino-input-tecavancada');
    inputTecAvancada.addEventListener('change', function(e) {
        preencheAtributoExercicio(e, containerCampos.dataset.index)
    })

    document.getElementById('formExercicio').appendChild(containerCampos);
    indiceExercicio++;
  }

  function removerExercicio(event) {
    event.preventDefault()

    dadosTreino.sessoes[indiceSessao].exercicios.pop()
    const formExercicio = document.getElementById('formExercicio');
    const exercicios = formExercicio.querySelectorAll('.CadastroTreino-campos-exercicio');

    if (exercicios.length > 0) {
        formExercicio.removeChild(exercicios[exercicios.length - 1]);
    }

    indiceExercicio--;
} 

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
                        <Header title="Criar Plano de Treino" caminhoImagem={adicaoPaciente} />
                        <div className='CadastroPaciente-botoes-cabecalho'>
                            <Button title="Ajuda" classeAdicional="CadastroPaciente-botoes-cabecalho" icon={ajuda} />
                            <Button title="Sair" classeAdicional="CadastroPaciente-botoes-cabecalho" icon={sair}/>
                        </div>
                    </div>
                    <hr className="CadastroPaciente-divisao-conteudo"></hr>
                    <Button title="Voltar" classeAdicional="CadastroPaciente-botao-voltar" icon={voltar}/>
                </div>
    

                    <Search />
                    
                    <div className='treinoModal'>
                      <h1>Treino A</h1>

                      <div className='CadastroTreino-campos-formulario CadastroTreino-container'>
                        <div className="CadastroTreino-item-formulario">
                                      <label className="CadastroTreino-label-campo CadastroTreino-campo-obrigatorio" for="nome">Região Focal</label>
                                      <input 
                                      className="CadastroTreino-input CadastroTreino-input-texto" 
                                      type="text" 
                                      id="nome" 
                                      name="nome"
                                      onChange={e => preencheAtributoTreino(e)}
                                      required
                                      maxLength={100}
                                      />
                        </div>
                      </div>
                        
                        <div className='CadastroTreino-campos-formulario CadastroTreino-container'>
                          <div className="CadastroTreino-item-formulario">
                                        <label className="CadastroTreino-label-campo CadastroTreino-campo-obrigatorio" for="nome">Dia da semana</label>
                                        <input 
                                        className="CadastroTreino-input CadastroTreino-input-texto" 
                                        type="text" 
                                        id="nome" 
                                        name="nome"
                                        onChange={e => preencheAtributoTreino(e)}
                                        required
                                        maxLength={100}
                                        />
                          </div>
                        </div>

                        <div className='CadastroTreino-campos-formulario CadastroTreino-container'>
                          <div className="CadastroTreino-item-formulario">
                                        <label className="CadastroTreino-label-campo CadastroTreino-campo-obrigatorio" for="nome">Duração do aeróbico (min)</label>
                                        <input 
                                        className="CadastroTreino-input CadastroTreino-input-numero" 
                                        type="text" 
                                        id="nome" 
                                        name="nome"
                                        onChange={e => preencheAtributoTreino(e)}
                                        required
                                        maxLength={100}
                                        />
                          </div>
                        </div>
                        <div className='CadastroTreino-campos-formulario CadastroTreino-container'>
                          <div className="CadastroTreino-item-formulario">
                                        <label className="CadastroTreino-label-campo CadastroTreino-campo-obrigatorio" for="nome">Tempo de descanso (seg)</label>
                                        <input 
                                        className="CadastroTreino-input CadastroTreino-input-numero" 
                                        type="text" 
                                        id="nome" 
                                        name="nome"
                                        onChange={e => preencheAtributoTreino(e)}
                                        required
                                        maxLength={100}
                                        />
                          </div>
                        </div>
                      </div>
                   
                      <div className="CadastroTreino-exercicios">
                                <label className="CadastroTreino-label-campo">Exercícios</label>
                                <div id="formExercicio" >
                                </div>
                                <div className='CadastroTreino-botoes-exercicios'>
                                    <Button title="Adicionar Exercício" classeAdicional="CadastroTreino-botao-opcao" onClick={e => adicionarExercicio(e, indiceExercicio)}/>
                                    <Button title="Remover Exercício" classeAdicional="CadastroTreino-botao-opcao" onClick={e => removerExercicio(e)}/>
                                </div>
                            </div>
    
                    <Button title="Continuar" classeAdicional="CadastroPaciente-enviar" icon={salvar} onClick={e => cadastrarPaciente(e)}/>

            </div>
            <Footer className="CadastroPaciente-rodape"/>
        </div>
    )    
};

export default CadastroTreino