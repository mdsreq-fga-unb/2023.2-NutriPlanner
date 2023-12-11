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
    idPaciente: '656fe262751bb37143d35513',
    sessoes: [
      {
        codigo: 'a',
        dia: '',
        regiaoFocal: '',
        duracaoAerobico: 0,
        tempoDescanso: 0,
        exercicios: [],
      },
    ],
  }
  const [quantidadeTreinos, setQuantidadeTreinos] = useState(0);
  const [indiceSessao, setIndiceSessao] = useState(0);
  let indiceExercicio = 0;
  

  const handleChangeQuantidadeTreinos = (event) => {
    let valor = parseInt(event.target.value, 10);

    // Limita o valor a 7
    valor = Math.min(valor, 7);

    setQuantidadeTreinos(isNaN(valor) ? 1 : valor);
    setIndiceSessao(isNaN(valor) ? 0 : valor - 1);
  };

  const gerarDivsTreino = () => {
    const divsTreino = [];

    for (let i = 0; i < quantidadeTreinos; i++) {
      console.log('indice s', indiceSessao)
      divsTreino.push(
        <div key={i} className='treinoModal'>
          
            <h3>Treino {String.fromCharCode(65 + i)}</h3>

                      <div className='CadastroTreino-campos-formulario CadastroTreino-container'>
                        <div className="CadastroTreino-item-formulario">
                                      <label className="CadastroTreino-label-campo CadastroTreino-campo-obrigatorio" for="nome">Região Focal</label>
                                      <input 
                                      className="CadastroTreino-input CadastroTreino-input-texto" 
                                      type="text" 
                                      id="nome" 
                                      name="regiaoFocal"
                                      onChange={e => preencheAtributoTreino(e)}
                                      required
                                      maxLength={100}
                                      />
                        </div>
                      </div>
                        
                        <div className='CadastroTreino-campos-formulario CadastroTreino-container'>
                          <div className="CadastroTreino-item-formulario">
                              <label className="CadastroTreino-label-campo CadastroTreino-campo-obrigatorio" for="nome">Dia da semana</label>
                                  <select className="CadastroTreino-input CadastroTreino-input-texto"
                                  id="nome"
                                  name="dia"
                                  onChange={e => preencheAtributoTreino(e)}
                                  required
                                >
                                  <option value="" disabled selected>Selecione o dia da semana</option>
                                  {diasDaSemana.map((dia, index) => (
                                    <option key={index} value={dia}>
                                      {dia}
                                    </option>
                                  ))}
                                </select>
                          </div>
                        </div>

                        <div className='CadastroTreino-campos-formulario CadastroTreino-container'>
                          <div className="CadastroTreino-item-formulario">
                                        <label className="CadastroTreino-label-campo CadastroTreino-campo-obrigatorio" for="nome">Duração do aeróbico (min)</label>
                                        <input 
                                        className="CadastroTreino-input CadastroTreino-input-numero" 
                                        type="text" 
                                        id="nome" 
                                        name="duracaoAerobico"
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
                                        name="tempoDescanso"
                                        onChange={e => preencheAtributoTreino(e)}
                                        required
                                        maxLength={100}
                                        />
                          </div>
                        </div>
                        <div className='CadastroTreino-campos-formulario CadastroTreino-container'>
                          <div className="CadastroTreino-exercicios">
                            <label className="CadastroTreino-label-campo">Exercícios</label>
                            <div id="formExercicio" >
                            </div>
                            <div className='CadastroTreino-botoes-exercicios'>
                                <Button title="Adicionar Exercício" classeAdicional="CadastroTreino-botao-opcao" onClick={e => adicionarExercicio(e, indiceExercicio)}/>
                                 <Button title="Remover Exercício" classeAdicional="CadastroTreino-botao-opcao" onClick={e => removerExercicio(e)}/>
                            </div>
                          </div>
                        </div>
                   
          
        </div>
      );
    }

    return divsTreino;
  };

  const preencheAtributoExercicio = (event, indice) => {
    const { name, value } = event.target;
    
    const exercicioAtual = dadosTreino.sessoes[0].exercicios[indice]
    exercicioAtual[name] = value;
};

  function adicionarExercicio(event, index) {
    event.preventDefault()

    dadosTreino.sessoes[0].exercicios.push({
      nome: '',
      series: 0,
      repeticoes: 0,
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
            <input class="CadastroTreino-input CadastroTreino-input-series" type="tel" id="series" name="series" required="required" max="10" min="1" defaultValue="1"/>
        </div>
        <div class="CadastroTreino-item-formulario-exercicio">
            <label class="CadastroTreino-label-campo CadastroTreino-label-exercicio CadastroTreino-campo-obrigatorio" for="repeticoes">Repetições</label>
            <input class="CadastroTreino-input CadastroTreino-input-repeticoes" type="tel" id="repeticoes" name="repeticoes" required="required" max="200" min="1" defaultValue="10"/>
        </div>
        <div class="CadastroTreino-item-formulario-exercicio">
          <label class="CadastroTreino-label-campo CadastroTreino-label-exercicio CadastroTreino-campo-obrigatorio" for="carga">Carga (kg)</label>
          <input class="CadastroTreino-input CadastroTreino-input-carga" type="tel" id="carga" name="carga" required="required" max="200" min="1" defaultValue="10"/>
        </div>
        <div class="CadastroTreino-item-formulario-exercicio">
          <label class="CadastroTreino-label-campo CadastroTreino-label-exercicio CadastroTreino-campo-obrigatorio" for="carga">Técnica avançada</label>
          <input class="CadastroTreino-input CadastroTreino-input-tecavancada" type="text" id="tecavancada" name="tecnicaAvancada" required="required" max="200" min="1" defaultValue="10"/>
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

    dadosTreino.sessoes[0].exercicios.pop()
    const formExercicio = document.getElementById('formExercicio');
    const exercicios = formExercicio.querySelectorAll('.CadastroTreino-campos-exercicio');

    if (exercicios.length > 0) {
        formExercicio.removeChild(exercicios[exercicios.length - 1]);
    }

    indiceExercicio--;
  } 

  function cadastrarTreino(event){
    event.preventDefault();

    const url = 'http://localhost:3000/treinos/656fe262751bb37143d35513';
    console.log(dadosTreino)

    axios.post(url, dadosTreino)
      .then((response) => {
        alert('Treino Cadastrado com sucesso!')

      }, (error) => {
        alert('Não foi possível adicionar o treino. Verifique os dados informados!')
        console.log(error.response.data)
      });
  };

  const preencheAtributoTreino = (event) => {
    let { name, value } = event.target;

    dadosTreino.sessoes[0][name] = value;
};


const diasDaSemana = [
  'Domingo',
  'Segunda-Feira',
  'Terça-Feira',
  'Quarta-Feira',
  'Quinta-Feira',
  'Sexta-Feira',
  'Sábado',
];

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
                        <MenuButton title="Cadastrar Paciente" icon={adicaoPaciente} />
                    </a>
                    <a href="/" className='CadastroPaciente-item-menu'>
                        <MenuButton title="Criar Dieta" icon={dieta}/>
                    </a>
                    <a href="/cadastroTreino" className='CadastroPaciente-item-menu'>
                        <MenuButton title="Criar Plano de Treino" icon={treino} selecionado="true"/>
                    </a>
                    <a href="/" className='CadastroPaciente-item-menu'>
                        <MenuButton title="Agendar Consulta" icon={agendamento} />
                    </a>
                </nav>
            </div>
    
            <div className="CadastroPaciente-conteudo">
                <div className="CadastroPaciente-cabecalho">
                    <div className='CadastroPaciente-items-cabecalho'>
                        <Header title="Criar Plano de Treino" caminhoImagem={treino} />
                        <div className='CadastroPaciente-botoes-cabecalho'>
                            <Button title="Ajuda" classeAdicional="CadastroPaciente-botoes-cabecalho" icon={ajuda} />
                            <Button title="Sair" classeAdicional="CadastroPaciente-botoes-cabecalho" icon={sair}/>
                        </div>
                    </div>
                    <hr className="CadastroPaciente-divisao-conteudo"></hr>
                    <Button title="Voltar" classeAdicional="CadastroPaciente-botao-voltar" icon={voltar}/>
                </div>
    

                    <Search />

            <div className='form-gera-treino'>
            <label className="CadastroTreino-label-campo CadastroTreino-campo-obrigatorio" htmlFor="quantidadeTreinos">
                  Quantidade de Treinos
                </label>
                <input
                  className='CadastroTreino-input CadastroTreino-input-numero-treinos'
                  type="tel"
                  id="quantidadeTreinos"
                  value={quantidadeTreinos}
                  onChange={e => handleChangeQuantidadeTreinos(e)}
                />
            </div>

                    {/* Renderiza as divs de treino com base na quantidade */}
                    {gerarDivsTreino()
                    }

                    <Button title="Finalizar" classeAdicional="CadastroPaciente-enviar" icon={salvar} onClick={e => cadastrarTreino(e)}/>

            </div>
            <Footer className="CadastroPaciente-rodape"/>
        </div>
    )    
};

export default CadastroTreino