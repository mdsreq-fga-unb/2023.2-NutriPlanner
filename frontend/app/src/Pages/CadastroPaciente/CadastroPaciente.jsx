import './CadastroPaciente.css'
import React from 'react'
import axios from 'axios'

//Componentes
import Logo from '../../components/Logo/Logo'
import MenuButton from '../../components/Buttons/Menu/MenuButton'
import Button from '../../components/Buttons/Button'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

//Ícones
import dieta from '../../assets/icons/Adição Dieta.svg';
import agendamento from '../../assets/icons/Agendamento.svg';
import treino from '../../assets/icons/Treino.svg';
import paciente from '../../assets/icons/Paciente.svg';
import adicaoPaciente from '../../assets/icons/Adição Paciente.svg';

const CadastroPaciente = () =>{
    const dadosPaciente = {
        paciente: {
            nome: '',
            dtNascimento: '',
            sexo: '',
            email: '',
            telefone: '',
            endereco: '',
            questionario: {
                objetivosPaciente: '',
                problemasSaudeIndividual: '',
                problemasSaudeFamiliares: '',
                medicamentosIngeridos: [],
                alergiasAlimentares: '',
                alteracoes: '',
                cirurgias: '',
                lesoes: '',
                restricoesMedicas: '',
                habitosGeraisAlimentares: ''
            },
            gastoEnergeticoDiario: '',
            metabolismoBasal: '',
            valorCaloricoPlano: '',
            conclusoes: ''
        },
        medidas:
        {
            altura: '',
            pesoJejum: '',
            pesoObjetivo: '',
            imc: '',
            circunferencia: [{
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
                pescoco: '',
                quadril: '',
            }]
        },
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

    const preencheAtributoPaciente = (event) => {
        const { name, value } = event.target;
        dadosPaciente.paciente[name] = value;
    };

    const preencheAtributoQuestionario = (event) => {
        const { name, value } = event.target;
        dadosPaciente.paciente.questionario[name] = value;
    };

    const preencheAtributoMedicamento = (event, indice) => {
        const { name, value } = event.target;
        
        const medicamentoAtual = dadosPaciente.paciente.questionario.medicamentosIngeridos[indice]
        medicamentoAtual[name] = value;
    };

    const preencheAtributoMedidasCorporais = (event) => {
        const { name, value } = event.target;

        if(name == 'altura'){
            
        }

        dadosPaciente.medidas[name] = value;
    };

    const preencheAtributoCircunferencias = (event) => {
        const { name, value } = event.target;

        dadosPaciente.medidas.circunferencia[0][name] = value;
    };

    const preencheAtributoDobrasCutaneas = (event) => {
        const { name, value } = event.target;

        dadosPaciente.dobrasCutaneas[name] = value;
    };


    let indiceMedicamento = 0;

    function adicionarMedicamento(event, index) {
        event.preventDefault()

        dadosPaciente.paciente.questionario.medicamentosIngeridos.push({
            nome: '',
            horario: '',
            tipo: ''
        })

        let containerCampos = document.createElement('div');
        containerCampos.classList.add('CadastroPaciente-campos-medicamento');
        containerCampos.dataset.index = indiceMedicamento;

        let campoNome = document.createElement('div');
        campoNome.classList.add('CadastroPaciente-item-formulario-medicamento');

        let labelNome = document.createElement('label');
        labelNome.classList.add('CadastroPaciente-label-campo', 'CadastroPaciente-label-medicamento');
        labelNome.setAttribute('for', 'nomeMedicamento');
        labelNome.textContent = 'Nome do Medicamento';

        let inputNome = document.createElement('input');
        inputNome.classList.add('CadastroPaciente-input', 'CadastroPaciente-input-medicamento');
        inputNome.setAttribute('type', 'text');
        inputNome.setAttribute('id', 'nomeMedicamento');
        inputNome.setAttribute('name', 'nome');
        inputNome.addEventListener('change', function (e) {
            preencheAtributoMedicamento(e, containerCampos.dataset.index);
        });
        inputNome.setAttribute('required', 'required');

        campoNome.appendChild(labelNome);
        campoNome.appendChild(inputNome);
        containerCampos.appendChild(campoNome);

        let campoHorario = document.createElement('div');
        campoHorario.classList.add('CadastroPaciente-item-formulario-medicamento');

        let labelHorario = document.createElement('label');
        labelHorario.classList.add('CadastroPaciente-label-campo', 'CadastroPaciente-label-medicamento');
        labelHorario.setAttribute('for', 'horario');
        labelHorario.textContent = 'Horário';

        let inputHorario = document.createElement('input');
        inputHorario.classList.add('CadastroPaciente-input', 'CadastroPaciente-input-horario');
        inputHorario.setAttribute('type', 'time');
        inputHorario.setAttribute('id', 'horario');
        inputHorario.setAttribute('name', 'horario');
        inputHorario.addEventListener('change', function (e) {
            preencheAtributoMedicamento(e, containerCampos.dataset.index)
        });
        inputHorario.setAttribute('required', 'required');

        campoHorario.appendChild(labelHorario);
        campoHorario.appendChild(inputHorario);
        containerCampos.appendChild(campoHorario);

        let campoTipo = document.createElement('div');
        campoTipo.classList.add('CadastroPaciente-item-formulario-medicamento');

        let labelTipo = document.createElement('label');
        labelTipo.classList.add('CadastroPaciente-label-campo', 'CadastroPaciente-label-medicamento');
        labelTipo.textContent = 'Tipo de Uso';

        let selectTipo = document.createElement('select');
        selectTipo.classList.add('CadastroPaciente-input', 'CadastroPaciente-input-select');
        selectTipo.setAttribute('id', 'tipo');
        selectTipo.setAttribute('name', 'tipo');
        selectTipo.addEventListener('change', function (e) {
            preencheAtributoMedicamento(e, containerCampos.dataset.index)
        });

        let opcaoPlaceholder = document.createElement('option');
        opcaoPlaceholder.setAttribute('value', '');
        opcaoPlaceholder.setAttribute('disabled', 'disabled');
        opcaoPlaceholder.setAttribute('selected', 'selected');
        opcaoPlaceholder.textContent = 'Selecione';

        let opcaoEventual = document.createElement('option');
        opcaoEventual.setAttribute('value', 'Eventual');
        opcaoEventual.textContent = 'Eventual';

        let opcaoContinuo = document.createElement('option');
        opcaoContinuo.setAttribute('value', 'Contínuo');
        opcaoContinuo.textContent = 'Contínuo';

        selectTipo.appendChild(opcaoPlaceholder);
        selectTipo.appendChild(opcaoEventual);
        selectTipo.appendChild(opcaoContinuo);

        campoTipo.appendChild(labelTipo);
        campoTipo.appendChild(selectTipo);
        containerCampos.appendChild(campoTipo);

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


    function imprimirObjeto(event){
        event.preventDefault();
                
        const url = 'http://localhost:3000/pacientes';
        // const dados = JSON.stringify(dadosPaciente);
        
        // axios.post(url, dados, {
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // })
        //   .then((response) => {
        //     console.log(response);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
        
        axios.post(url, {
                "paciente": {
                    "nome": dadosPaciente.paciente.nome,
                    "dtNascimento": dadosPaciente.paciente.dtNascimento,
                    "sexo": dadosPaciente.paciente.sexo,
                    "email": dadosPaciente.paciente.email,
                    "telefone": dadosPaciente.paciente.telefone,
                    "endereco": dadosPaciente.paciente.endereco,
                    "questionario": {
                        "objetivosPaciente": dadosPaciente.paciente.questionario.objetivosPaciente,
                        "problemasSaudeIndividual": dadosPaciente.paciente.questionario.problemasSaudeIndividual,
                        "problemasSaudeFamiliares": dadosPaciente.paciente.questionario.problemasSaudeFamiliares,
                        "medicamentosIngeridos": dadosPaciente.paciente.questionario.medicamentosIngeridos,
                        "alergiasAlimentares": dadosPaciente.paciente.questionario.alergiasAlimentares,
                        "alteracoes": dadosPaciente.paciente.questionario.alteracoes,
                        "cirurgias": dadosPaciente.paciente.questionario.cirurgias,
                        "lesoes": dadosPaciente.paciente.questionario.lesoes,
                        "restricoesMedicas": dadosPaciente.paciente.questionario.restricoesMedicas,
                        "habitosGeraisAlimentares": dadosPaciente.paciente.questionario.habitosGeraisAlimentares
                    },
                    "gastoEnergeticoDiario": dadosPaciente.paciente.gastoEnergeticoDiario,
                    "metabolismoBasal": dadosPaciente.paciente.metabolismoBasal,
                    "valorCaloricoPlano": dadosPaciente.paciente.valorCaloricoPlano,
                    "conclusoes": dadosPaciente.paciente.conclusoes,
                },
                "medida": {
                    "altura": dadosPaciente.medidas.altura,
                    "pesoJejum": dadosPaciente.medidas.pesoJejum,
                    "pesoObjetivo": dadosPaciente.medidas.pesoObjetivo,
                    "circunferencia": [
                        {
                            "bracosEsquerdo": dadosPaciente.medidas.circunferencia[0].bracoEsquerdo,
                            "bracosDireito": dadosPaciente.medidas.circunferencia[0].bracoDireito,
                            "antebracoEsquerdo": dadosPaciente.medidas.circunferencia[0].antebracoEsquerdo,
                            "antebracoDireito": dadosPaciente.medidas.circunferencia[0].antebracoDireito,
                            "abdomen": dadosPaciente.medidas.circunferencia[0].abdomen,
                            "cintura": dadosPaciente.medidas.circunferencia[0].cintura,
                            "peitoral": dadosPaciente.medidas.circunferencia[0].peitoral,
                            "ombros": dadosPaciente.medidas.circunferencia[0].ombros,
                            "coxaEsquerda": dadosPaciente.medidas.circunferencia[0].coxaEsquerda,
                            "coxaDireita": dadosPaciente.medidas.circunferencia[0].coxaDireita,
                            "panturrilhaEsquerda": dadosPaciente.medidas.circunferencia[0].panturrilhaEsquerda,
                            "panturrilhaDireita": dadosPaciente.medidas.circunferencia[0].panturrilhaDireita,
                            "quadril": dadosPaciente.medidas.circunferencia[0].quadril,
                            "pescoco": dadosPaciente.medidas.circunferencia[0].pescoco,
                        }
                    ],
                    "dobrasCutaneas": {
                        "subscapular": dadosPaciente.dobrasCutaneas.subscapular,
                        "axilarMedia": dadosPaciente.dobrasCutaneas.axilarMedia,
                        "coxa": dadosPaciente.dobrasCutaneas.coxa,
                        "tricipetal": dadosPaciente.dobrasCutaneas.tricipetal,
                        "suprailiaca": dadosPaciente.dobrasCutaneas.suprailiaca,
                        "peitoral": dadosPaciente.dobrasCutaneas.peitoral,
                        "abdominal": dadosPaciente.dobrasCutaneas.abdominal
                    } 
                    }
          })
          .then((response) => {
            alert('Usuário Cadastrado com sucesso!')
            console.log(response.status)
          }, (error) => {
            alert('Não foi possível cadastrar o usuário. Verifique os dados informados!')
            console.log(error)
          });
    };

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
                            <Button title="Ajuda"classeAdicional="CadastroPaciente-botoes-cabecalho" />
                            <Button title="Sair" classeAdicional="CadastroPaciente-botoes-cabecalho" />
                        </div>
                    </div>
                    <hr className="CadastroPaciente-divisao-conteudo"></hr>
                    <Button title="Voltar" classeAdicional="CadastroPaciente-botao-voltar"/>
                </div>
    
                <form className="CadastroPaciente-formulario">
                    <fieldset className="CadastroPaciente-area-formulario">
                        <legend className="CadastroPaciente-titulo-area">Dados Pessoais</legend>
    
                        <div className='CadastroPaciente-campos-formulario CadastroPaciente-container'>
    
                            {/* Primeira Coluna de Campos */}
                            <div>
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo" for="nome">Nome Completo</label>
                                    <input 
                                    className="CadastroPaciente-input CadastroPaciente-input-texto" 
                                    type="text" 
                                    id="nome" 
                                    name="nome"
                                    onChange={e => preencheAtributoPaciente(e)}
                                    required
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
                                    required/>
                                </div>
    
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo" for="email">E-mail</label>
                                    <input 
                                    className="CadastroPaciente-input CadastroPaciente-input-texto" 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    placeholder="email@exemplo.com"
                                    onChange={e => preencheAtributoPaciente(e)}
                                    required 
                                    />
                                </div>
    
                            </div>
    
                            {/* Segunda Coluna de Campos */}
                            <div>
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo" for="dataNascimento">Data de Nascimento</label>
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
                                    placeholder="(xx) xxxxx-xxxx"/>
                                </div>  
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo" for="sexo">Sexo</label>
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
                                <label className="CadastroPaciente-label-campo" for="objetivosPaciente">Objetivos do Paciente</label>
                                <textarea 
                                rows="5" 
                                className="CadastroPaciente-area-texto CadastroPaciente-input" 
                                id="objetivosPaciente"
                                name="objetivosPaciente"
                                onChange={e => preencheAtributoQuestionario(e)} 
                                required/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="problemasSaudeIndividual">Problemas de Saúde Individual</label>
                                <textarea 
                                rows="5" 
                                className="CadastroPaciente-area-texto CadastroPaciente-input" 
                                id="problemasSaudeIndividual" 
                                name="problemasSaudeIndividual"
                                onChange={e => preencheAtributoQuestionario(e)} 
                                />
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="problemasSaudeFamiliares">Problemas de Saúde Familiares</label>
                                <textarea 
                                rows="5" 
                                className="CadastroPaciente-area-texto CadastroPaciente-input" id="problemasSaudeFamiliares"
                                name="problemasSaudeFamiliares"
                                onChange={e => preencheAtributoQuestionario(e)} 
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
                                    <label className="CadastroPaciente-label-campo" for="pesoObjetivo">Peso Objetivo</label>
                                    <input 
                                    className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                    type="tel" 
                                    id="pesoObjetivo"
                                    name="pesoObjetivo"
                                    onChange={e => preencheAtributoMedidasCorporais(e)}
                                    required/>
                                </div>
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo" for="altura">Altura</label>
                                    <input 
                                    className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                    type="tel" 
                                    id="altura"
                                    name="altura" 
                                    onChange={e => preencheAtributoMedidasCorporais(e)}
                                    required/>
                                </div>
                            </div>
    
                            {/* Segunda Coluna de Campos */}
                            <div>
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo" for="pesoJejum">Peso Atual em Jejum</label>
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
                                        required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="antebracoEsquerdo">Antebraço Esquerdo</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="antebracoEsquerdo"
                                        name="antebracoEsquerdo"
                                        onChange={e => preencheAtributoCircunferencias(e)}  
                                        required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="coxaEsquerda">Coxa Esquerda</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="coxaEsquerda"
                                        name="coxaEsquerda"
                                        onChange={e => preencheAtributoCircunferencias(e)} 
                                        required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="panturrilhaEsquerda">Panturrilha Esquerda</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="panturrilhaEsquerda" 
                                        name="panturrilhaEsquerda"
                                        onChange={e => preencheAtributoCircunferencias(e)} 
                                        required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="abdomen">Abdômen</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="abdomen"
                                        name="abdomen"
                                        onChange={e => preencheAtributoCircunferencias(e)} 
                                        required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="peitoral">Peitoral</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="peitoral"
                                        name="peitoral"
                                        onChange={e => preencheAtributoCircunferencias(e)} 
                                        required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="quadril">Quadril</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="quadril"
                                        name="quadril"
                                        onChange={e => preencheAtributoCircunferencias(e)} 
                                        required/>
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
                                        required/>
                                    </div>       
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="antebracoDireito">Antebraço Direito</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="antebracoDireito"
                                        name="antebracoDireito"
                                        onChange={e => preencheAtributoCircunferencias(e)}  
                                        required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="coxaDireita">Coxa Direita</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="coxaDireita"
                                        name="coxaDireita"
                                        onChange={e => preencheAtributoCircunferencias(e)}  
                                        required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="panturrilhaDireita">Panturrilha Direita</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="panturrilhaDireita"
                                        name="panturrilhaDireita"
                                        onChange={e => preencheAtributoCircunferencias(e)} 
                                        required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="cintura">Cintura</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="cintura"
                                        name="cintura"
                                        onChange={e => preencheAtributoCircunferencias(e)}  
                                        required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="ombros">Ombros</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="ombros"
                                        name="ombros"
                                        onChange={e => preencheAtributoCircunferencias(e)}  
                                        required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="pescoco">Pescoço</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="pescoco"
                                        name="pescoco"
                                        onChange={e => preencheAtributoCircunferencias(e)} 
                                        required/>
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
                                        required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="coxa">Coxa</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="coxa"
                                        name="coxa"
                                        onChange={e => preencheAtributoDobrasCutaneas(e)}  
                                        required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="tricipetal">Tricipetal</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="tricipetal"
                                        name="tricipetal"
                                        onChange={e => preencheAtributoDobrasCutaneas(e)} 
                                        required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="peitoral">Peitoral</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="peitoral"
                                        name="peitoral"
                                        onChange={e => preencheAtributoDobrasCutaneas(e)} 
                                        required/>
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
                                        required/>
                                    </div>     
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="suprailiaca">Supra-ilíaca </label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                        type="tel" 
                                        id="suprailiaca"
                                        name="suprailiaca"
                                        onChange={e => preencheAtributoDobrasCutaneas(e)} 
                                        required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="abdominal">Abdominal</label>
                                        <input 
                                        className="CadastroPaciente-input CadastroPaciente-input-curto"
                                        type="tel" 
                                        id="abdominal"
                                        name="abdominal"
                                        onChange={e => preencheAtributoDobrasCutaneas(e)} 
                                        required/>
                                    </div>
                            </div>
                        </div>
                    </fieldset>
    
                    <fieldset className="CadastroPaciente-area-formulario">
                        <legend className="CadastroPaciente-titulo-area">Informações Nutricionais</legend>
                        <div className='CadastroPaciente-container'>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="gastoEnergeticoDiario">Gasto Energético Diário</label>
                                <input 
                                className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                type="tel" 
                                id="gastoEnergeticoDiario"
                                name="gastoEnergeticoDiario"
                                onChange={e => preencheAtributoPaciente(e)} 
                                required/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="metabolismoBasal">Metabolismo Basal</label>
                                <input 
                                className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                type="tel" 
                                id="metabolismoBasal"
                                name="metabolismoBasal"
                                onChange={e => preencheAtributoPaciente(e)} 
                                required/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="valorCaloricoPlano">Valor Calórico do Plano Alimentar</label>
                                <input 
                                className="CadastroPaciente-input CadastroPaciente-input-curto" 
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
                                />
                            </div>
                        </div>
                    </fieldset>
                    <input className="CadastroPaciente-enviar" type="submit" value="Cadastrar" onClick={e => imprimirObjeto(e)}/>
                </form>
            </div>
            <Footer className="CadastroPaciente-rodape"/>
        </div>
    )    
};

export default CadastroPaciente