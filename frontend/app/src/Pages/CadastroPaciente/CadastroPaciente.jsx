import './CadastroPaciente.css'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


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

const CadastroPaciente = () =>{
    const navigate = useNavigate();


    const dadosPaciente = {
        paciente: {
            nome: '',
            dtNascimento: '',
            sexo: '',
            email: '',
            //telefone: '',
            //endereco: '',
            questionario: {
                objetivosPaciente: '',
              //problemasSaudeIndividual: '',
              //problemasSaudeFamiliares: '',
                medicamentosIngeridos: [],
                //alergiasAlimentares: '',
                //alteracoes: '',
                //cirurgias: '',
                //lesoes: '',
                //restricoesMedicas: '',
                //habitosGeraisAlimentares: ''
            },
            gastoEnergeticoDiario: '',
            metabolismoBasal: '',
            valorCaloricoPlano: '',
            //conclusoes: ''
        },
        medida: {
            altura: '',
            pesoJejum: '',
            pesoObjetivo: '',
            imc: '',
            circunferencia: [
                {
                    bracoEsquerdo: '',
                    bracoDireito: '',
                    antebracoEsquerdo: '',
                    antebracoDireito: '',
                    abdomen: '',
                    cintura: '',
                    peitoral: '',
                    ombros: '',
                    coxaEsquerda: '',
                    coxaDireita: '',
                    panturrilhaEsquerda: '',
                    panturrilhaDireita: '',
                    quadril: '',
                    pescoco: '',
                }
            ],
            dobrasCutaneas: {
                subscapular: '',
                axilarMedia: '',
                coxa: '',
                tricipetal: '',
                suprailiaca: '',
                peitoral: '',
                abdominal: ''
            },
        }
    }

    function tratamentoDecimal(valor)  {
        valor = String(valor);
        valor = valor.replace(/,/g, '.');
        
        return valor;
    }
    
    const preencheAtributoPaciente = (event) => {
        let { name, value } = event.target;

        if(name == 'gastoEnergeticoDiario' || name == 'metabolismoBasal' || name == 'valorCaloricoPlano')
            value = tratamentoDecimal(value.trim())

        dadosPaciente.paciente[name] = value;
    };

    const preencheAtributoQuestionario = (event) => {
        let { name, value } = event.target;

        dadosPaciente.paciente.questionario[name] = value.trim();
    };

    const preencheAtributoMedicamento = (event, indice) => {
        let { name, value } = event.target;
        const medicamentoAtual = dadosPaciente.paciente.questionario.medicamentosIngeridos[indice]

        medicamentoAtual[name] = value.trim();
    };

    const preencheAtributoMedidasCorporais = (event) => {
        let { name, value } = event.target;
        value = tratamentoDecimal(value.trim())

        dadosPaciente.medida[name] = value;
    };

    const preencheAtributoCircunferencias = (event) => {
        let { name, value } = event.target;
        value = tratamentoDecimal(value).trim()

        dadosPaciente.medida.circunferencia[0][name] = value;
    };

    const preencheAtributoDobrasCutaneas = (event) => {
        let { name, value } = event.target;
        value = tratamentoDecimal(value)

        dadosPaciente.medida.dobrasCutaneas[name] = value.trim();
    };


    let indiceMedicamento = 0;

    function adicionarMedicamento(event, index) {
        event.preventDefault()

        dadosPaciente.paciente.questionario.medicamentosIngeridos.push({
            nome: '',
            horario: '',
            tipo: ''
        })

        let containerCampos = document.createElement('div')
        containerCampos.classList.add('CadastroPaciente-campos-medicamento');
        containerCampos.dataset.index = indiceMedicamento;
        
        containerCampos.innerHTML = `
            <div class="CadastroPaciente-item-formulario-medicamento">
                <label class="CadastroPaciente-label-campo CadastroPaciente-label-medicamento CadastroPaciente-campo-obrigatorio" for="nomeMedicamento">Nome do Medicamento</label>
                <input class="CadastroPaciente-input CadastroPaciente-input-medicamento" type="text" id="nomeMedicamento" name="nome" required="required" maxlength="200"/>
            </div>
            <div class="CadastroPaciente-item-formulario-medicamento">
                <label class="CadastroPaciente-label-campo CadastroPaciente-label-medicamento CadastroPaciente-campo-obrigatorio" for="horario">Horário</label>
                <input class="CadastroPaciente-input CadastroPaciente-input-horario" type="time" id="horario" name="horario" required="required"/>
            </div>
            <div class="CadastroPaciente-item-formulario-medicamento">
                <label class="CadastroPaciente-label-campo CadastroPaciente-label-medicamento CadastroPaciente-campo-obrigatorio">Tipo de Uso</label>
                <select class="CadastroPaciente-input CadastroPaciente-input-select" id="tipo" name="tipo">
                    <option value="" disabled="disabled" selected="selected">Selecione</option>
                    <option value="Eventual">Eventual</option>
                    <option value="Contínuo">Contínuo</option>
                </select>
            </div>
        `
        const inputNome = containerCampos.querySelector('.CadastroPaciente-input-medicamento');
        inputNome.addEventListener('change', function(e) {
            preencheAtributoMedicamento(e, containerCampos.dataset.index)
        })

        const inputHorario = containerCampos.querySelector('.CadastroPaciente-input-horario');
        inputHorario.addEventListener('change', function(e) {
            preencheAtributoMedicamento(e, containerCampos.dataset.index)
        })

        const inputTipo = containerCampos.querySelector('select');
        inputTipo.addEventListener('change', function(e) {
            preencheAtributoMedicamento(e, containerCampos.dataset.index)
        })

        document.getElementById('formMedicamento').appendChild(containerCampos);
        indiceMedicamento++;
    }
    
    function removerMedicamento(event) {
        event.preventDefault()

        dadosPaciente.paciente.questionario.medicamentosIngeridos.pop()
        const formMedicamento = document.getElementById('formMedicamento');
        const medicamentos = formMedicamento.querySelectorAll('.CadastroPaciente-campos-medicamento');

        if (medicamentos.length > 0) {
            formMedicamento.removeChild(medicamentos[medicamentos.length - 1]);
        }

        indiceMedicamento--;
    }

    function handleVoltar(e){
        navigate('/home');
    }


    function cadastrarPaciente(event){
        event.preventDefault();

        const url = 'http://localhost:3000/pacientes';

        axios.post(url, dadosPaciente)
        .then((response) => {
          alert('Paciente cadastrado com sucesso!')
        }, (error) => {
            let mensagemAlert = "";
            
            if (error.response && error.response.data && error.response.data.message && error.response.data.message.errors) {
                
                const erros = error.response.data.message.errors;
  
                Object.keys(erros).forEach(campo => {
                    mensagemAlert += `${erros[campo].message}\n`;
                });
            } 
            else 
            {
                mensagemAlert += "Não foi possível cadastrar o paciente, tente novamente mais tarde.";
            }
  
            alert(mensagemAlert);
        });   
    };

    return(     
        <div className="CadastroPaciente">
            <div className="CadastroPaciente-menu-lateral">
                <Logo />
                <span className="CadastroPaciente-menu-titulo">MENU</span>
                <hr className="CadastroPaciente-menu-divisao" />
                <nav className="CadastroPaciente-navegacao">
                    <a href="/home" className='CadastroPaciente-item-menu'>
                        <MenuButton title="Pacientes" icon={paciente}/>
                    </a>
                    <a href="/cadastrarPaciente" className='CadastroPaciente-item-menu'>
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
                            <a href="/">
                                <Button title="Sair" classeAdicional="CadastroPaciente-botoes-cabecalho" icon={sair}/>
                            </a>
                        </div>
                    </div>
                    <hr className="CadastroPaciente-divisao-conteudo"></hr>
                    <Button title="Voltar" classeAdicional="CadastroPaciente-botao-voltar" onClick={(e) => handleVoltar(e)} icon={voltar}/>
                </div>
    
                <form className="CadastroPaciente-formulario">
                    <fieldset className="CadastroPaciente-area-formulario">
                        <legend className="CadastroPaciente-titulo-area">Dados Pessoais</legend>
    
                        <div className='CadastroPaciente-campos-formulario CadastroPaciente-container'>
    
                            {/* Primeira Coluna de Campos */}
                            <div>
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo CadastroPaciente-campo-obrigatorio" for="nome">Nome Completo</label>
                                    <input 
                                    className="CadastroPaciente-input CadastroPaciente-input-texto" 
                                    type="text" 
                                    id="nome" 
                                    name="nome"
                                    onChange={e => preencheAtributoPaciente(e)}
                                    required
                                    maxLength={200}
                                    />
                                </div>
    
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo" for="endereco">Endereço</label>
                                    <input 
                                    className="CadastroPaciente-input CadastroPaciente-input-texto" 
                                    type="text" 
                                    id="endereco" 
                                    name="endereco" 
                                    onChange={e => preencheAtributoPaciente(e)}
                                    maxLength={200} 
                                    />
                                </div>
    
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo CadastroPaciente-campo-obrigatorio" for="email">E-mail</label>
                                    <input 
                                    className="CadastroPaciente-input CadastroPaciente-input-texto" 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    placeholder="email@exemplo.com"
                                    onChange={e => preencheAtributoPaciente(e)}
                                    required
                                    maxLength={320} 
                                    />
                                </div>
    
                            </div>
    
                            {/* Segunda Coluna de Campos */}
                            <div>
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo CadastroPaciente-campo-obrigatorio " for="dataNascimento">Data de Nascimento</label>
                                    <input 
                                    className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                    type="date" 
                                    id="dtNascimento"
                                    name="dtNascimento"
                                    onChange={e => preencheAtributoPaciente(e)} 
                                    required/>
                                </div>
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo" for="telefone">Telefone Celular</label>
                                    <input 
                                    className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                    type="tel" 
                                    id="telefone"
                                    name="telefone"
                                    onChange={e => preencheAtributoPaciente(e)} 
                                    placeholder="(xx) xxxxx-xxxx"
                                    maxLength={15}
                                    />
                                </div>  
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo CadastroPaciente-campo-obrigatorio" for="sexo">Sexo</label>
                                    <select 
                                    className="CadastroPaciente-input CadastroPaciente-input-select" 
                                    id="sexo" 
                                    name="sexo" 
                                    onChange={e => preencheAtributoPaciente(e)} required>
                                        <option value="" disabled selected>Selecione</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Feminino">Feminino</option>
                                    </select>
                                </div>
                            </div>                        
                        </div>
                    </fieldset>
    
                    <fieldset className="CadastroPaciente-area-formulario">
                        <legend className='CadastroPaciente-titulo-area'>Informações Médicas</legend>
                        <div className="CadastroPaciente-container">
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo CadastroPaciente-campo-obrigatorio" for="objetivosPaciente">Objetivos do Paciente</label>
                                <textarea 
                                rows="5" 
                                className="CadastroPaciente-area-texto CadastroPaciente-input" 
                                id="objetivosPaciente"
                                name="objetivosPaciente"
                                onChange={e => preencheAtributoQuestionario(e)} 
                                required
                                maxLength={1000}
                                />
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="problemasSaudeIndividual">Problemas de Saúde Individual</label>
                                <textarea 
                                rows="5" 
                                className="CadastroPaciente-area-texto CadastroPaciente-input" 
                                id="problemasSaudeIndividual" 
                                name="problemasSaudeIndividual"
                                onChange={e => preencheAtributoQuestionario(e)}
                                maxLength={1000} 
                                />
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="problemasSaudeFamiliares">Problemas de Saúde Familiares</label>
                                <textarea 
                                rows="5" 
                                className="CadastroPaciente-area-texto CadastroPaciente-input" id="problemasSaudeFamiliares"
                                name="problemasSaudeFamiliares"
                                onChange={e => preencheAtributoQuestionario(e)}
                                maxLength={1000} 
                                />
                            </div>
                            <div className="CadastroPaciente-medicamentos">
                                <label className="CadastroPaciente-label-campo">Medicamentos Ingeridos</label>
                                <div id="formMedicamento">
                                </div>
                                <div className='CadastroPaciente-botoes-medicamento'>
                                    <Button title="Adicionar Medicamento" classeAdicional="CadastroPaciente-botao-opcao" onClick={e => adicionarMedicamento(e, indiceMedicamento)}/>
                                    <Button title="Remover Medicamento" classeAdicional="CadastroPaciente-botao-opcao" onClick={e => removerMedicamento(e)}/>
                                </div>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="alergiasAlimentares">Alergias Alimentares</label>
                                <textarea 
                                rows="5" 
                                className="CadastroPaciente-area-texto CadastroPaciente-input" 
                                id="alergiasAlimentares" 
                                name="alergiasAlimentares"
                                onChange={e => preencheAtributoQuestionario(e)}
                                maxLength={500} 
                                />
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="alteracoes">Alterações de Saúde</label>
                                <textarea 
                                rows="5" 
                                className="CadastroPaciente-area-texto CadastroPaciente-input" 
                                id="alteracoes"
                                name="alteracoes"
                                onChange={e => preencheAtributoQuestionario(e)}
                                maxLength={1000}  
                                />
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="cirurgias">Cirurgias</label>
                                <textarea 
                                rows="5" 
                                className="CadastroPaciente-area-texto CadastroPaciente-input" 
                                id="cirurgias"
                                name="cirurgias"
                                onChange={e => preencheAtributoQuestionario(e)}
                                maxLength={1000}   
                                />
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="lesoes">Lesões Físicas</label>
                                <textarea 
                                rows="5" 
                                className="CadastroPaciente-area-texto CadastroPaciente-input" 
                                id="lesoes"
                                name="lesoes"
                                onChange={e => preencheAtributoQuestionario(e)}
                                maxLength={500}    
                                />
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="restricoes">Restrições Médicas</label>
                                <textarea 
                                rows="5" 
                                className="CadastroPaciente-area-texto CadastroPaciente-input" 
                                id="restricoesMedicas"
                                name="restricoesMedicas"
                                onChange={e => preencheAtributoQuestionario(e)}
                                maxLength={500}    
                                />
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo"for="habitosGeraisAlimentares">Hábitos Gerais e Alimentares</label>
                                <textarea 
                                rows="5" 
                                className="CadastroPaciente-area-texto CadastroPaciente-input" 
                                id="habitosGeraisAlimentares"
                                name="habitosGeraisAlimentares"
                                onChange={e => preencheAtributoQuestionario(e)}
                                maxLength={1000}  
                                 />
                            </div>
                        </div>
                    </fieldset>
    
                    <fieldset className="CadastroPaciente-area-formulario">
                        <legend className="CadastroPaciente-titulo-area">Avaliação Antropométrica</legend>    
                        <div className='CadastroPaciente-campos-formulario CadastroPaciente-container'>
                           {/* Primeira Coluna de Campos */}
                            <div>
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo CadastroPaciente-campo-obrigatorio" for="pesoObjetivo">Peso Objetivo</label>
                                    <input 
                                    className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                    type="tel" 
                                    id="pesoObjetivo"
                                    name="pesoObjetivo"
                                    onChange={e => preencheAtributoMedidasCorporais(e)}
                                    required/>
                                </div>
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo CadastroPaciente-campo-obrigatorio" for="altura">Altura</label>
                                    <input 
                                    className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                    type="tel" 
                                    id="altura"
                                    name="altura" 
                                    onChange={e => preencheAtributoMedidasCorporais(e)}
                                    placeholder='1.70'
                                    required/>
                                </div>
                            </div>
    
                            {/* Segunda Coluna de Campos */}
                            <div>
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo CadastroPaciente-campo-obrigatorio" for="pesoJejum">Peso Atual em Jejum</label>
                                    <input 
                                    className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                    type="tel" 
                                    id="pesoJejum"
                                    name="pesoJejum"
                                    onChange={e => preencheAtributoMedidasCorporais(e)}
                                    required/>
                                </div>
                    
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo" for="imc">IMC</label>
                                    <input 
                                    className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                    type="tel" 
                                    id="imc"
                                    name="imc"
                                    onChange={e => preencheAtributoMedidasCorporais(e)}
                                    required/>
                                    </div>
                            </div>
                        </div>

                        <h3>Circunferências</h3>

                        <div className='CadastroPaciente-campos-formulario CadastroPaciente-container'>
                            {/* Primeira Coluna de Campos */}
                            <div>
                                <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="bracoEsquerdo">Braço Esquerdo</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="bracoEsquerdo"
                                        name="bracoEsquerdo"
                                        onChange={e => preencheAtributoCircunferencias(e)}
                                        />
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="antebracoEsquerdo">Antebraço Esquerdo</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="antebracoEsquerdo"
                                        name="antebracoEsquerdo"
                                        onChange={e => preencheAtributoCircunferencias(e)}  
                                        />
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="coxaEsquerda">Coxa Esquerda</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="coxaEsquerda"
                                        name="coxaEsquerda"
                                        onChange={e => preencheAtributoCircunferencias(e)} 
                                        />
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="panturrilhaEsquerda">Panturrilha Esquerda</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="panturrilhaEsquerda" 
                                        name="panturrilhaEsquerda"
                                        onChange={e => preencheAtributoCircunferencias(e)} 
                                        />
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="abdomen">Abdômen</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="abdomen"
                                        name="abdomen"
                                        onChange={e => preencheAtributoCircunferencias(e)} 
                                        />
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="peitoral">Peitoral</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="peitoral"
                                        name="peitoral"
                                        onChange={e => preencheAtributoCircunferencias(e)} 
                                        />
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="quadril">Quadril</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="quadril"
                                        name="quadril"
                                        onChange={e => preencheAtributoCircunferencias(e)} 
                                        />
                                    </div>
                            </div>
    
                            {/* Segunda Coluna de Campos */}
                            <div>
                                <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="bracoDireito">Braço Direito</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="bracoDireito"
                                        name="bracoDireito"
                                        onChange={e => preencheAtributoCircunferencias(e)}  
                                        />
                                    </div>       
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="antebracoDireito">Antebraço Direito</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="antebracoDireito"
                                        name="antebracoDireito"
                                        onChange={e => preencheAtributoCircunferencias(e)}  
                                        />
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="coxaDireita">Coxa Direita</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="coxaDireita"
                                        name="coxaDireita"
                                        onChange={e => preencheAtributoCircunferencias(e)}  
                                        />
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="panturrilhaDireita">Panturrilha Direita</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="panturrilhaDireita"
                                        name="panturrilhaDireita"
                                        onChange={e => preencheAtributoCircunferencias(e)} 
                                        />
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="cintura">Cintura</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="cintura"
                                        name="cintura"
                                        onChange={e => preencheAtributoCircunferencias(e)}  
                                        />
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="ombros">Ombros</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="ombros"
                                        name="ombros"
                                        onChange={e => preencheAtributoCircunferencias(e)}  
                                        />
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="pescoco">Pescoço</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="pescoco"
                                        name="pescoco"
                                        onChange={e => preencheAtributoCircunferencias(e)} 
                                        />
                                    </div>

                            </div>
                        </div>
                        
                        <h3>Dobras Cutâneas (Protocolo: Pollock, 7DC)</h3>

                        <div className='CadastroPaciente-campos-formulario CadastroPaciente-container'>
                            {/* Primeira Coluna de Campos */}
                            <div>
                                <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="subscapular">Subscapular</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="subscapular"
                                        name="subscapular"
                                        onChange={e => preencheAtributoDobrasCutaneas(e)}  
                                        />
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="coxa">Coxa</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="coxa"
                                        name="coxa"
                                        onChange={e => preencheAtributoDobrasCutaneas(e)}  
                                        />
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="tricipetal">Tricipetal</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="tricipetal"
                                        name="tricipetal"
                                        onChange={e => preencheAtributoDobrasCutaneas(e)} 
                                        />
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="peitoral">Peitoral</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="peitoral"
                                        name="peitoral"
                                        onChange={e => preencheAtributoDobrasCutaneas(e)} 
                                        />
                                    </div>
                            </div>
    
                            {/* Segunda Coluna de Campos */}
                            <div>
                                <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="axilarMedia">Axilar-média</label>
                                        <input className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="axilarMedia"
                                        name="axilarMedia"
                                        onChange={e => preencheAtributoDobrasCutaneas(e)} 
                                        />
                                    </div>     
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="suprailiaca">Supra-ilíaca </label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="suprailiaca"
                                        name="suprailiaca"
                                        onChange={e => preencheAtributoDobrasCutaneas(e)} 
                                        />
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="abdominal">Abdominal</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto"
                                        type="tel" 
                                        id="abdominal"
                                        name="abdominal"
                                        onChange={e => preencheAtributoDobrasCutaneas(e)} 
                                        />
                                    </div>
                            </div>
                        </div>
                    </fieldset>
    
                    <fieldset className="CadastroPaciente-area-formulario">
                        <legend className="CadastroPaciente-titulo-area">Informações Nutricionais</legend>
                        <div className='CadastroPaciente-container'>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo CadastroPaciente-campo-obrigatorio" for="gastoEnergeticoDiario">Gasto Energético Diário</label>
                                <input 
                                className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                type="tel" 
                                id="gastoEnergeticoDiario"
                                name="gastoEnergeticoDiario"
                                onChange={e => preencheAtributoPaciente(e)}
                                required/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo CadastroPaciente-campo-obrigatorio" for="metabolismoBasal">Metabolismo Basal</label>
                                <input 
                                className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                type="tel" 
                                id="metabolismoBasal"
                                name="metabolismoBasal"
                                onChange={e => preencheAtributoPaciente(e)}
                                required/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo CadastroPaciente-campo-obrigatorio" for="valorCaloricoPlano">Valor Calórico do Plano Alimentar</label>
                                <input 
                                className="CadastroPaciente-input CadastroPaciente-input-curto " 
                                type="tel" 
                                id="valorCaloricoPlano"
                                name="valorCaloricoPlano"
                                onChange={e => preencheAtributoPaciente(e)}
                                required/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="conclusoes">Conclusões</label>
                                <textarea 
                                rows="5" 
                                className="CadastroPaciente-area-texto CadastroPaciente-input" 
                                id="conclusoes"
                                name="conclusoes"
                                onChange={e => preencheAtributoPaciente(e)} 
                                maxLength={1500}  
                                />
                            </div>
                        </div>
                    </fieldset>
                    <Button title="Cadastrar" classeAdicional="CadastroPaciente-enviar" icon={salvar} onClick={e => cadastrarPaciente(e)}/>
                </form>
            </div>
            <Footer className="CadastroPaciente-rodape"/>
        </div>
    )    
};

export default CadastroPaciente
