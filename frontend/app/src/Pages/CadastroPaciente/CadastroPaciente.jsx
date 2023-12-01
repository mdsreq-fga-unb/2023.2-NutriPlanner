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

            <form className="CadastroPaciente-formulario">
                <fieldset className="CadastroPaciente-area-formulario">
                    <legend className="CadastroPaciente-titulo-area">Dados Pessoais</legend>

                    <div className='CadastroPaciente-campos-formulario'>
                        <div className="CadastroPaciente-primeiraColuna-campos">

                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="nome">Nome Completo</label>
                                <input className="CadastroPaciente-input" type="text" id="nome" required/>
                            </div>

                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="endereco">Endereço</label>
                                <input type="text" id="endereco" required/>
                            </div>

                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="telefone">Telefone Celular</label>
                                <input type="tel" id="telefone" placeholder="(xx) xxxxx-xxxx"/>
                            </div>  

                        </div>
                        <div className="CadastroPaciente-segundaColuna-campos">
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="dataNascimento">Data de Nascimento</label>
                                <input type="date" id="dataNascimento" required/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="email">E-mail</label>
                                <input type="e-mail" id="email" placeholder="email@exemplo.com"/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="sexo">Sexo</label>
                                <select id="sexo" required>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                </select>
                            </div>
                        </div>                        
                    </div>
                </fieldset>

                <fieldset className="CadastroPaciente-area-formulario">
                    <legend className='CadastroPaciente-titulo-area'>Informações Médicas</legend>
                    <div className="CadastroPaciente-item-formulario">
                        <label className="CadastroPaciente-label-campo" for="objetivosPaciente">Objetivos do Paciente</label>
                        <textarea id="objetivosPaciente" required/>
                    </div>
                    <div className="CadastroPaciente-item-formulario">
                        <label className="CadastroPaciente-label-campo" for="problemasSaudeIndividual">Problemas de Saúde Individual</label>
                        <textarea id="problemasSaudeIndividual" />
                    </div>
                    <div className="CadastroPaciente-item-formulario">
                        <label className="CadastroPaciente-label-campo" for="problemasSaudeFamiliares">Problemas de Saúde Familiares</label>
                        <textarea id="problemasSaudeFamiliares" />
                    </div>
                    {/* <div className="CadastroPaciente-item-formulario">
                            <label>Endereço</label>
                            <input type="text" naidendereco"/>
                        </div> */}
                    <div className="CadastroPaciente-item-formulario">
                        <label className="CadastroPaciente-label-campo" for="alergiasAlimentares">Alergias Alimentares</label>
                        <textarea id="alergiasAlimentares" />
                    </div>
                    <div className="CadastroPaciente-item-formulario">
                        <label className="CadastroPaciente-label-campo" for="alteracoesSaude">Alterações de Saúde</label>
                        <textarea id="alteracoesSaude" />
                    </div>
                    <div className="CadastroPaciente-item-formulario">
                        <label className="CadastroPaciente-label-campo" for="cirurgias">Cirurgias</label>
                        <textarea id="cirurgias" />
                    </div>
                    <div className="CadastroPaciente-item-formulario">
                        <label className="CadastroPaciente-label-campo" for="lesoes">Lesões Físicas</label>
                        <textarea id="lesoes" />
                    </div>
                    <div className="CadastroPaciente-item-formulario">
                        <label className="CadastroPaciente-label-campo" for="restricoes">Restrições Médicas</label>
                        <textarea id="restricoes" />
                    </div>
                    <div className="CadastroPaciente-item-formulario">
                        <label className="CadastroPaciente-label-campo" class="CadastroPaciente-label-formulario" for="habitos">Hábitos Gerais e Alimentares</label>
                        <textarea id="habitos" />
                    </div>
                </fieldset>

                <fieldset className="CadastroPaciente-area-formulario">
                    <legend className="CadastroPaciente-titulo-area">Avaliação Antropométrica</legend>    
                    <div className='CadastroPaciente-campos-formulario'>
                        <div className="CadastroPaciente-primeiraColuna-campos">
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="pesoObjetivo">Peso Objetivo</label>
                                <input type="tel" id="pesoObjetivo" required/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="altura">Altura</label>
                                <input type="tel" id="altura" required/>
                            </div>
                        </div>
                        <div className="CadastroPaciente-segundaColuna-campos">
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="pesoJejum">Peso Atual em Jejum</label>
                                <input type="tel" id="pesoJejum" required/>
                            </div>
                
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="imc">IMC</label>
                                <input type="tel" id="imc" required/>
                                </div>
                        </div>
                    </div>

                    <h3>Circunferências</h3>

                    <div className='CadastroPaciente-campos-formulario'>
                        <div className="CadastroPaciente-primeiraColuna-campos">
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="bracoEsquerdo">Braço Esquerdo</label>
                                <input type="tel" id="bracoEsquerdo" required/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="abdomen">Abdômen</label>
                                <input type="tel" id="abdomen" required/>
                             </div>
                             <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="peitoral">Peitoral</label>
                                <input type="tel" id="peitoral" required/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="quadril">Quadril</label>
                                <input type="tel" id="quadril" required/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="coxaEsquerda">Coxa Esquerda</label>
                                <input type="tel" id="coxaEsquerda" required/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="panturrilhaEsquerda">Panturrilha Esquerda</label>
                                <input type="tel" id="panturrilhaEsquerda" required/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="pescoco">Pescoço</label>
                                <input type="tel" id="pescoco" required/>
                            </div>
                        </div>
                        <div className="CadastroPaciente-segundaColuna-campos">
                        <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="bracoDireito">Braço Direito</label>
                                <input type="tel" id="bracoDireito" required/>
                            </div>       
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="antebracos">Antebraços</label>
                                <input type="tel" id="antebracos" required/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="cintura">Cintura</label>
                                <input type="tel" id="cintura" required/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="ombros">Ombros</label>
                                <input type="tel" id="ombros" required/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="coxaDireita">Coxa Direita</label>
                                <input type="tel" id="coxaDireita" required/>
                            </div>
                            <div className="CadastroPaciente-item-formulario">
                                <label className="CadastroPaciente-label-campo" for="panturrilhaDireita">Panturrilha Direita</label>
                                <input type="tel" id="panturrilhaDireita" required/>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset className="CadastroPaciente-area-formulario">
                    <legend className="CadastroPaciente-titulo-area">Informações Nutricionais</legend>
                    <div className="CadastroPaciente-item-formulario">
                        <label className="CadastroPaciente-label-campo" for="gastoEnergetico">Gasto Energético Diário</label>
                        <input type="number" id="gastoEnergetico" required/>
                    </div>
                    <div className="CadastroPaciente-item-formulario">
                        <label className="CadastroPaciente-label-campo" for="metabolismoBasal">Metabolismo Basal</label>
                        <input type="number" id="metabolismoBasal" required/>
                    </div>
                    <div className="CadastroPaciente-item-formulario">
                        <label className="CadastroPaciente-label-campo" for="valorCalorico">Valor Calórico do Plano Alimentar</label>
                        <input type="number" id="valorCalorico" required/>
                    </div>
                    <div className="CadastroPaciente-item-formulario">
                        <label className="CadastroPaciente-label-campo" for="conclusoes">Conclusões</label>
                        <textarea id="conclusoes" />
                    </div>
                </fieldset>
                <input type="submit" value="Cadastrar"/>
            </form>
        </div>
    </div>


