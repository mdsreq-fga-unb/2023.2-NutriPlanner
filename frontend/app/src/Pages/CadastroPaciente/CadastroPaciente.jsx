import './CadastroPaciente.css'
import React, {useState} from 'react'

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

const CadastroPaciente = () =>{
    const dadosPaciente = {
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
    }

    function imprimirObjeto(e){
        // e.preventDefault();
        console.log((dadosPaciente))
    };

    const preencheAtributo = (event) => {
        const { name, value } = event.target;
        dadosPaciente[name] = value;
    };

    const preencheAtributoQuestionario = (event) => {
        const { name, value } = event.target;
        dadosPaciente.questionario[name] = value;
    };
    
    const preencheAtributoMedicamento = (event) => {
        const { name, value } = event.target;

        const indiceMedicamento = dadosPaciente.questionario.medicamentosIngeridos.length;

        dadosPaciente.questionario.medicamentosIngeridos[indiceMedicamento][name] = value;
    };

    function adicionarMedicamento(e) {
        dadosPaciente.questionario.medicamentosIngeridos.push({
            nome:'',
            horario:'',
            tipo:''
        })

        const formMedicamento = document.getElementById('formMedicamento');    

        const novoMedicamento = document.createElement('div');
        novoMedicamento.className = 'CadastroPaciente-campos-medicamento';

        novoMedicamento.innerHTML = `
            <div class="CadastroPaciente-item-formulario-medicamento">
                <label class="CadastroPaciente-label-campo CadastroPaciente-label-medicamento" for="nomeMedicamento">Nome do Medicamento</label>
                <input class="CadastroPaciente-input CadastroPaciente-input-medicamento" type="text" id="nomeMedicamento" name="nome" onChange="preencheAtributoMedicamento(event) required" />
            </div>
            <div class="CadastroPaciente-item-formulario-medicamento">
                <label class="CadastroPaciente-label-campo CadastroPaciente-label-medicamento" for="horario">Horário</label>
                <input class="CadastroPaciente-input CadastroPaciente-input-horario" type="time" id="horario" name="horario" onChange="preencheAtributoMedicamento(event) required" />
            </div>
            <div class="CadastroPaciente-item-formulario-medicamento">
                <label class="CadastroPaciente-label-campo CadastroPaciente-label-medicamento" for="tipo">Tipo de Uso</label>
                <select class="CadastroPaciente-input CadastroPaciente-input-select" id="tipo" name="sexo" onChange="preencheAtributoMedicamento(event)">
                    <option value="" disabled selected>Selecione</option>
                    <option value="Eventual">Eventual</option>
                    <option value="Contínuo">Contínuo</option>
                </select> 
            </div>
        `;

        formMedicamento.appendChild(novoMedicamento);
    }

    function removerMedicamento() {
        dadosPaciente.questionario.medicamentosIngeridos.pop()
        const formMedicamento = document.getElementById('formMedicamento');
        const medicamentos = formMedicamento.querySelectorAll('.CadastroPaciente-campos-medicamento');

        if (medicamentos.length > 0) {
            formMedicamento.removeChild(medicamentos[medicamentos.length - 1]);
        }
    }

    return(     
        <div className="CadastroPaciente">
            <div className="CadastroPaciente-menu-lateral">
                <Logo />
                <span className="CadastroPaciente-menu-titulo">MENU</span>
                <hr className="CadastroPaciente-menu-divisao" />
                <nav className="CadastroPaciente-navegacao">
                    <a href="/" className='CadastroPaciente-item-menu'>
                        <MenuButton title="Pacientes" />
                    </a>
                    <a href="/" className='CadastroPaciente-item-menu'>
                        <MenuButton title="Cadastrar Paciente" selecionado="true" />
                    </a>
                    <a href="/" className='CadastroPaciente-item-menu'>
                        <MenuButton title="Criar Dieta" />
                    </a>
                    <a href="/" className='CadastroPaciente-item-menu'>
                        <MenuButton title="Criar Plano de Treino" />
                    </a>
                    <a href="/" className='CadastroPaciente-item-menu'>
                        <MenuButton title="Agendar Consulta" />
                    </a>
                </nav>
            </div>
    
            <div className="CadastroPaciente-conteudo">
                <div className="CadastroPaciente-cabecalho">
                    <div className='CadastroPaciente-items-cabecalho'>
                        <Header title="Cadastrar Paciente" caminhoImagem={adicaoPaciente} />
                        <div className='CadastroPaciente-botoes-cabecalho'>
                            <Button title="Ajuda" />
                            <Button title="Sair" />
                        </div>
                    </div>
                    <hr className="CadastroPaciente-divisao-conteudo"></hr>
                    <Button title="Voltar" />
                </div>
    
                <div className="CadastroPaciente-formulario">
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
                                    onChange={e => preencheAtributo(e)}
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
                                    onChange={e => preencheAtributo(e)} 
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
                                    onChange={e => preencheAtributo(e)}
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
                                    onChange={e => preencheAtributo(e)} 
                                    required/>
                                </div>
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo" for="telefone">Telefone Celular</label>
                                    <input 
                                    className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                    type="tel" 
                                    id="telefone"
                                    name="telefone"
                                    onChange={e => preencheAtributo(e)} 
                                    placeholder="(xx) xxxxx-xxxx" 
                                    pattern="[0-9]+"/>
                                </div>  
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo" for="sexo">Sexo</label>
                                    <select 
                                    className="CadastroPaciente-input CadastroPaciente-input-select" 
                                    id="sexo" 
                                    name="sexo" 
                                    onChange={e => preencheAtributo(e)} required>
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
                                ows="5" 
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
                            <div className="CadastroPaciente-formulario-medicamento">
                                <label className="CadastroPaciente-label-campo">Medicamentos Ingeridos</label>
                                <div id="formMedicamento">
                                </div>
                                <div className='CadastroPaciente-botoes-medicamento'>
                                    <Button title="Adicionar Medicamento" classeAdicional="CadastroPaciente-botao-opcao" onClick={e => adicionarMedicamento(e)}/>
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
                                    <input className="CadastroPaciente-input CadastroPaciente-input-curto" type="tel" id="pesoObjetivo" required/>
                                </div>
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo" for="altura">Altura</label>
                                    <input className="CadastroPaciente-input CadastroPaciente-input-curto" type="tel" id="altura" required/>
                                </div>
                                <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="bracoEsquerdo">Braço Esquerdo</label>
                                        <input className="CadastroPaciente-input CadastroPaciente-input-curto" type="tel" id="bracoEsquerdo" required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="abdomen">Abdômen</label>
                                        <input className="CadastroPaciente-input CadastroPaciente-input-curto" type="tel" id="abdomen" required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="peitoral">Peitoral</label>
                                        <input className="CadastroPaciente-input CadastroPaciente-input-curto" type="tel" id="peitoral" required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="quadril">Quadril</label>
                                        <input className="CadastroPaciente-input CadastroPaciente-input-curto" type="tel" id="quadril" required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="coxaEsquerda">Coxa Esquerda</label>
                                        <input className="CadastroPaciente-input CadastroPaciente-input-curto" type="tel" id="coxaEsquerda" required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="panturrilhaEsquerda">Panturrilha Esquerda</label>
                                        <input className="CadastroPaciente-input CadastroPaciente-input-curto" type="tel" id="panturrilhaEsquerda" required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="pescoco">Pescoço</label>
                                        <input className="CadastroPaciente-input CadastroPaciente-input-curto" type="tel" id="pescoco" required/>
                                    </div>
                            </div>
    
                            {/* Segunda Coluna de Campos */}
                            <div>
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo" for="pesoJejum">Peso Atual em Jejum</label>
                                    <input className="CadastroPaciente-input CadastroPaciente-input-curto" type="tel" id="pesoJejum" required/>
                                </div>
                    
                                <div className="CadastroPaciente-item-formulario">
                                    <label className="CadastroPaciente-label-campo" for="imc">IMC</label>
                                    <input className="CadastroPaciente-input CadastroPaciente-input-curto" type="tel" id="imc" required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="bracoDireito">Braço Direito</label>
                                        <input className="CadastroPaciente-input CadastroPaciente-input-curto" type="tel" id="bracoDireito" required/>
                                    </div>       
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="antebracos">Antebraços</label>
                                        <input className="CadastroPaciente-input CadastroPaciente-input-curto" type="tel" id="antebracos" required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="cintura">Cintura</label>
                                        <input className="CadastroPaciente-input CadastroPaciente-input-curto" type="tel" id="cintura" required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="ombros">Ombros</label>
                                        <input className="CadastroPaciente-input CadastroPaciente-input-curto" type="tel" id="ombros" required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="coxaDireita">Coxa Direita</label>
                                        <input className="CadastroPaciente-input CadastroPaciente-input-curto" type="tel" id="coxaDireita" required/>
                                    </div>
                                    <div className="CadastroPaciente-item-formulario">
                                        <label className="CadastroPaciente-label-campo" for="panturrilhaDireita">Panturrilha Direita</label>
                                        <input className="CadastroPaciente-input CadastroPaciente-input-curto" type="tel" id="panturrilhaDireita" required/>
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
                                onChange={e => preencheAtributo(e)} 
                                required/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="metabolismoBasal">Metabolismo Basal</label>
                                <input 
                                className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                type="tel" 
                                id="metabolismoBasal"
                                name="metabolismoBasal"
                                onChange={e => preencheAtributo(e)} 
                                required/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="valorCaloricoPlano">Valor Calórico do Plano Alimentar</label>
                                <input 
                                className="CadastroPaciente-input CadastroPaciente-input-curto" 
                                type="tel" 
                                id="valorCaloricoPlano"
                                name="valorCaloricoPlano"
                                onChange={e => preencheAtributo(e)}  
                                required/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="conclusoes">Conclusões</label>
                                <textarea 
                                rows="5" 
                                className="CadastroPaciente-area-texto CadastroPaciente-input" 
                                id="conclusoes"
                                name="conclusoes"
                                onChange={e => preencheAtributo(e)}   
                                />
                            </div>
                        </div>
                    </fieldset>
                    {/* <Button /> */}
                    <input className="CadastroPaciente-enviar" type="submit" value="Cadastrar" onClick={e => imprimirObjeto(e)}/>
                </div>
            </div>
        </div>
    )    
};

export default CadastroPaciente