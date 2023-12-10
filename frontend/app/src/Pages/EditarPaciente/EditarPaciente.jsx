import { useNavigate, useLocation } from 'react-router-dom';

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

const EditarPaciente = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const state = location.state;
    const dadosPaciente = state.dados;

    // const dadosPaciente = {
    //     paciente: {
    //         nome: 'Maria Alice Bernardo da Costa Silva',
    //         dtNascimento: '30/09/20/03',
    //         sexo: 'Feminino',
    //         email: 'marialice3003@gmail.com',
    //         telefone: '(61)984662347',
    //         endereco: 'Qd. 4, Lt. 24, Vila São Luiz 1 - Santo Antônio do Descoberto - GO',
    //         questionario: {
    //             objetivosPaciente: 'ficar com um bundão',
    //             problemasSaudeIndividual: 'Não possui',
    //             problemasSaudeFamiliares: 'Não possui',
    //             medicamentosIngeridos: [], 
    //             alergiasAlimentares: 'Não possui',
    //             alteracoes: 'Nunca sentiu',
    //             cirurgias: 'Nunca fez',
    //             lesoes: 'toda quebrada',
    //             restricoesMedicas: 'Não possui',
    //             habitosGeraisAlimentares: 'Come doce demais'
    //         },
    //         gastoEnergeticoDiario: '2000',
    //         metabolismoBasal: '1500',
    //         valorCaloricoPlano: '2500',
    //         conclusoes: 'Linda linda'
    //     },
    //     medida: {
    //         altura: '1,58',
    //         pesoJejum: '48',
    //         pesoObjetivo: '55',
    //         imc: '20',
    //         circunferencia: [
    //             {
    //                 bracoEsquerdo: '20',
    //                 bracoDireito: '20',
    //                 antebracoEsquerdo: '10',
    //                 antebracoDireito: '10',
    //                 abdomen: '60',
    //                 cintura: '48',
    //                 peitoral: '75',
    //                 ombros: '90',
    //                 coxaEsquerda: '80',
    //                 coxaDireita: '80',
    //                 panturrilhaEsquerda: '65',
    //                 panturrilhaDireita: '65',
    //                 quadril: '80',
    //                 pescoco: '45',
    //             },
    //             {
    //                 bracoEsquerdo: '20',
    //                 bracoDireito: '20',
    //                 antebracoEsquerdo: '10',
    //                 antebracoDireito: '10',
    //                 abdomen: '60',
    //                 cintura: '48',
    //                 peitoral: '75',
    //                 ombros: '90',
    //                 coxaEsquerda: '80',
    //                 coxaDireita: '80',
    //                 panturrilhaEsquerda: '65',
    //                 panturrilhaDireita: '65',
    //                 quadril: '80',
    //                 pescoco: '45',
    //             },
    //             {
    //                 bracoEsquerdo: '20',
    //                 bracoDireito: '20',
    //                 antebracoEsquerdo: '10',
    //                 antebracoDireito: '10',
    //                 abdomen: '60',
    //                 cintura: '48',
    //                 peitoral: '75',
    //                 ombros: '90',
    //                 coxaEsquerda: '80',
    //                 coxaDireita: '80',
    //                 panturrilhaEsquerda: '65',
    //                 panturrilhaDireita: '65',
    //                 quadril: '80',
    //                 pescoco: '45',
    //             },
    //             {
    //                 bracoEsquerdo: '20',
    //                 bracoDireito: '20',
    //                 antebracoEsquerdo: '10',
    //                 antebracoDireito: '10',
    //                 abdomen: '60',
    //                 cintura: '48',
    //                 peitoral: '75',
    //                 ombros: '90',
    //                 coxaEsquerda: '80',
    //                 coxaDireita: '80',
    //                 panturrilhaEsquerda: '65',
    //                 panturrilhaDireita: '65',
    //                 quadril: '80',
    //                 pescoco: '45',
    //             },
    //             {
    //                 bracoEsquerdo: '20',
    //                 bracoDireito: '20',
    //                 antebracoEsquerdo: '10',
    //                 antebracoDireito: '10',
    //                 abdomen: '60',
    //                 cintura: '48',
    //                 peitoral: '75',
    //                 ombros: '90',
    //                 coxaEsquerda: '80',
    //                 coxaDireita: '80',
    //                 panturrilhaEsquerda: '65',
    //                 panturrilhaDireita: '65',
    //                 quadril: '80',
    //                 pescoco: '45',
    //             }
    //         ],
    //         dobrasCutaneas: {
    //             subscapular: 'Sei lá 1',
    //             axilarMedia: 'Sei lá 2',
    //             coxa: 'Sei lá 3',
    //             tricipetal: 'Sei lá 4',
    //             suprailiaca: 'Sei lá 5',
    //             peitoral: 'Sei lá 6',
    //             abdominal: 'Sei lá 7'
    //         },
    //     }
    // }

    console.log({dadosPaciente})

    function handleVoltar(){
        navigate('/verPaciente')
    }

    //ver como vou fazer com os medicamentos
    //Ver como vou fazer com as cincunferencias

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
                        <Header title="Editar Paciente" caminhoImagem={adicaoPaciente} />
                        <div className='CadastroPaciente-botoes-cabecalho'>
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
                                    value={dadosPaciente.paciente.nome}
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
                                    value={dadosPaciente.paciente.endereco}
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
                                    value={dadosPaciente.paciente.email}
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
                                    value={dadosPaciente.paciente.dtNascimento}
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
                                    value={dadosPaciente.paciente.telefone}
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
                                    value={dadosPaciente.paciente.sexo}
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
                                value={dadosPaciente.paciente.questionario.objetivosPaciente}
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
                                value={dadosPaciente.paciente.questionario.problemasSaudeIndividual}
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
                                value={dadosPaciente.paciente.questionario.problemasSaudeFamiliares}
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
                                value={dadosPaciente.paciente.questionario.alergiasAlimentares}
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
                                value={dadosPaciente.paciente.questionario.alteracoes}
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
                                value={dadosPaciente.paciente.questionario.cirurgias}
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
                                value={dadosPaciente.paciente.questionario.lesoes}
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
                                value={dadosPaciente.paciente.questionario.restricoesMedicas}
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
                                value={dadosPaciente.paciente.questionario.habitosGeraisAlimentares}
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
                                    value={dadosPaciente.medida.pesoObjetivo}
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
                                    value={dadosPaciente.medida.altura}
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
                                    value={dadosPaciente.medida.pesoJejum}
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
                                    value={dadosPaciente.medida.imc}
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
                                        value={dadosPaciente.medida.dobrasCutaneas.subscapular}
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
                                        value={dadosPaciente.medida.dobrasCutaneas.coxa}
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
                                        value={dadosPaciente.medida.dobrasCutaneas.tricipetal}
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
                                        value={dadosPaciente.medida.dobrasCutaneas.peitoral}
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
                                        value={dadosPaciente.medida.dobrasCutaneas.axilarMedia}
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
                                        value={dadosPaciente.medida.dobrasCutaneas.suprailiaca}
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
                                        value={dadosPaciente.medida.dobrasCutaneas.abdominal}
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
                                value={dadosPaciente.paciente.gastoEnergeticoDiario}
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
                                value={dadosPaciente.paciente.metabolismoBasal}
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
                                value={dadosPaciente.paciente.valorCaloricoPlano}
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
                                value={dadosPaciente.paciente.conclusoes}
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
}

export default EditarPaciente