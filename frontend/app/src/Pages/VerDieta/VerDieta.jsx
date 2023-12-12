import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import moment from "moment";

import "./style.css";
import MenuButton from "../../components/Buttons/Menu/MenuButton";
import Logo from "../../components/Logo/Logo";
import Footer from '../../components/Footer/Footer';

// Icons
import dieta from '../../assets/icons/Adição Dieta.svg';
import agendamento from '../../assets/icons/Agendamento.svg';
import treino from '../../assets/icons/Treino.svg';
import paciente from '../../assets/icons/Paciente.svg';
import adicaoPaciente from '../../assets/icons/Adição Paciente.svg';

const VerDieta = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [dadosPaciente, setDadosPaciente] = useState(null);

    useEffect(() => {
        const getPaciente = async (idPaciente) => {
            try {
                const response = await axios.get(`http://localhost:3000/pacientes/${idPaciente}`);
                const { paciente, medida } = response.data.data;
                setDadosPaciente({ paciente, medida });
            } catch (error) {
                const cardPacientes = document.getElementById('quantidadesPacientes');
                cardPacientes.innerHTML = `<p class="Card-Pacientes-item">Não foi possível obter a quantidade de pacientes.</p>`;
            } finally {
                setLoading(false);
            }
        };

        getPaciente(id);
    }, []);

    function handleEditarPaciente() {
        navigate(`/editarPaciente/${id}`);
    }

    function handleVoltar() {
        navigate('/home');
    }

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="VerPaciente">
            <div className="VerPaciente-barraLateral">
                <Logo />
                <span className="VerPaciente-menu-titulo">MENU</span>
                <hr className="VerPaciente-menu-divisao" />
                <nav className="VerPaciente-navegacao">
                    <a href="/" className='VerPaciente-item-menu'>
                        <MenuButton title="Pacientes" icon={paciente} selecionado="true" />
                    </a>
                    <a href="/" className='VerPaciente-item-menu'>
                        <MenuButton title="Cadastrar Paciente" icon={adicaoPaciente} />
                    </a>
                    <a href="/criarDieta" className='VerPaciente-item-menu'>
                        <MenuButton title="Criar Dieta" icon={dieta}/>
                    </a>
                    <a href="/" className='VerPaciente-item-menu'>
                        <MenuButton title="Criar Plano de Treino" icon={treino} />
                    </a>
                    <a href="/" className='VerPaciente-item-menu'>
                        <MenuButton title="Agendar Consulta" icon={agendamento} />
                    </a>
                </nav>
            </div>

            <div className="VerPaciente-areaLateral">
                <div>
                    <div className="VerPaciente-cabecalho">
                        <h1 className="VerPaciente-nomePaciente">{dadosPaciente.paciente.nome}</h1>
                        <button onClick={handleEditarPaciente} className="VerPaciente-topBtn">Editar dados</button>
                    </div>
                    <hr />
                    {/* Render patient information */}
                    <h2 className="VerPaciente-h2">Dados Pessoais</h2>
                    <div className="VerPaciente-infoBox">
                        <div className="VerPaciente-cardInterno-Infor">
                            <p className="VerPaciente-textoLabel">Data de nascimento</p>
                            <p className="VerPaciente-texto">{moment(dadosPaciente.paciente.dtNascimento).format('DD/MM/YYYY')}</p>
                        </div>

                        <div className="VerPaciente-cardInterno-Infor">
                            <p className="VerPaciente-textoLabel">Sexo</p>
                            <p className="VerPaciente-texto">{dadosPaciente.paciente.sexo}</p>
                        </div>

                        <div className="VerPaciente-cardInterno-Infor">
                            <p className="VerPaciente-textoLabel">Email</p>
                            <p className="VerPaciente-texto">{dadosPaciente.paciente.email}</p>
                        </div>

                        <div className="VerPaciente-cardInterno-Infor">
                            <p className="VerPaciente-textoLabel">Telefone</p>
                            <p className="VerPaciente-texto">{dadosPaciente.paciente.telefone}</p>
                        </div>

                        <div className="VerPaciente-cardInterno-Infor">
                            <p className="VerPaciente-textoLabel">Endereço </p>
                            <p className="VerPaciente-texto">{dadosPaciente.paciente.endereco}</p>
                        </div>
                    </div>

                    <h2 className="VerPaciente-h2">Informações Médicas</h2>
                    <div className="VerPaciente-infoBox">                            
                            <div className="VerPaciente-cardInterno-Infor">
                                <p className="VerPaciente-textoLabel">Objetivos do Paciente</p>
                                <p className="VerPaciente-texto">{dadosPaciente.paciente.questionario.objetivosPaciente}</p>
                            </div>

                            <div className="VerPaciente-cardInterno-Infor">
                                <p className="VerPaciente-textoLabel">Problemas de Saúde Individual</p>
                                <p className="VerPaciente-texto">{dadosPaciente.paciente.questionario.problemasSaudeIndividual}</p>
                            </div>

                            <div className="VerPaciente-cardInterno-Infor">
                                <p className="VerPaciente-textoLabel">Problemas de Saúde Familiares</p>
                                <p className="VerPaciente-texto">{dadosPaciente.paciente.questionario.problemasSaudeFamiliares}</p>
                            </div>
                            {/* Fazer o Map de medicamentosIngeridos */}
                            <div className="VerPaciente-cardInterno-Infor">
                                <p className="VerPaciente-textoLabel">Medicamentos Ingeridos</p>
                                <p className="VerPaciente-texto">{dadosPaciente.paciente.questionario.medicamentosIngeridos.nome}</p>
                            </div>

                            <div className="VerPaciente-cardInterno-Infor">
                                <p className="VerPaciente-textoLabel">Alergias Alimentares</p>
                                <p className="VerPaciente-texto">{dadosPaciente.paciente.questionario.alergiasAlimentares}</p>
                            </div>

                            <div className="VerPaciente-cardInterno-Infor">
                                <p className="VerPaciente-textoLabel">Alterações de Saúde</p>
                                <p className="VerPaciente-texto">{dadosPaciente.paciente.questionario.alteracoes}</p>
                            </div>

                            <div className="VerPaciente-cardInterno-Infor">
                                <p className="VerPaciente-textoLabel">Cirurgias</p>
                                <p className="VerPaciente-texto">{dadosPaciente.paciente.questionario.cirurgias}</p>
                            </div>

                            <div className="VerPaciente-cardInterno-Infor">
                                <p className="VerPaciente-textoLabel">Lesões Físicas</p>
                                <p className="VerPaciente-texto">{dadosPaciente.paciente.questionario.lesoes}</p>
                            </div>

                            <div className="VerPaciente-cardInterno-Infor">
                                <p className="VerPaciente-textoLabel">Restrições Médicas</p>
                                <p className="VerPaciente-texto">{dadosPaciente.paciente.questionario.restricoesMedicas}</p>
                            </div>

                            <div className="VerPaciente-cardInterno-Infor">
                                <p className="VerPaciente-textoLabel">Hábitos Gerais Alimentares</p>
                                <p className="VerPaciente-texto">{dadosPaciente.paciente.questionario.habitosGeraisAlimentares}</p>
                            </div>
                        </div>

                    <h2 className="VerPaciente-h2">Informações Nutricionais</h2>
                        <div className="VerPaciente-infoBox">

                            <div className="VerPaciente-cardInterno-Infor">
                                <p className="VerPaciente-textoLabel">Gasto energético diário</p>
                                <p className="VerPaciente-texto">{dadosPaciente.paciente.gastoEnergeticoDiario} kcal</p>
                            </div>

                            <div className="VerPaciente-cardInterno-Infor">
                                <p className="VerPaciente-textoLabel">Metabolismo basal</p>
                                <p className="VerPaciente-texto">{dadosPaciente.paciente.metabolismoBasal} kcal/dia</p>
                            </div>

                            <div className="VerPaciente-cardInterno-Infor">
                                <p className="VerPaciente-textoLabel">Valor calórico do Plano Alimentar</p>
                                <p className="VerPaciente-texto">{dadosPaciente.paciente.valorCaloricoPlano} kcal</p>
                            </div>

                            <div className="VerPaciente-cardInterno-Infor">
                                <p className="VerPaciente-textoLabel">Conclusões</p>
                                <p className="VerPaciente-texto">{dadosPaciente.paciente.conclusoes}</p>
                            </div>
                        </div>

                        <div className="VerPaciente-avaliacaoAtropometrica">
                        <h2 className="VerPaciente-h2">Avaliação Antropométrica</h2>
                        <div className="VerPaciente-infoBox">

                        <div className="VerPaciente-cardInterno-Infor">
                            <p className="VerPaciente-textoLabel">Peso atual em jejum</p>
                            <p className="VerPaciente-texto"> {dadosPaciente.medida.pesoJejum} kg</p>
                        </div>

                        <div className="VerPaciente-cardInterno-Infor">
                            <p className="VerPaciente-textoLabel">Peso Objetivo</p>
                            <p className="VerPaciente-texto">{dadosPaciente.medida.pesoObjetivo} kg</p>
                        </div>

                        <div className="VerPaciente-cardInterno-Infor">
                            <p className="VerPaciente-textoLabel">Altura</p>
                            <p className="VerPaciente-texto"> {dadosPaciente.medida.altura} m</p>
                        </div>

                        <div className="VerPaciente-cardInterno-Infor">
                            <p className="VerPaciente-textoLabel">IMC</p>
                            <p className="VerPaciente-texto">{"Não informado" || dadosPaciente.medida.imc}</p>
                        </div>

                        <h3 className="VerPaciente-h3">Dobras Cutâneas</h3>
                        <div className="VerPaciente-cardInterno-Infor">
                            <p className="VerPaciente-textoLabel">Subcapsular</p>
                            <p className="VerPaciente-texto">{"Não informado" || dadosPaciente.medida.dobrasCutaneas.subscapular + 'mm'}</p>
                        </div>

                        <div className="VerPaciente-cardInterno-Infor">
                            <p className="VerPaciente-textoLabel">Axilar-média</p>
                            <p className="VerPaciente-texto">{"Não informado" || dadosPaciente.medida.dobrasCutaneas.axilarMedia + 'mm'}</p>
                        </div>

                        <div className="VerPaciente-cardInterno-Infor">
                            <p className="VerPaciente-textoLabel">Coxa</p>
                            <p className="VerPaciente-texto">{"Não informado" || dadosPaciente.medida.dobrasCutaneas.coxa + 'mm'}</p>
                        </div>

                        <div className="VerPaciente-cardInterno-Infor">
                            <p className="VerPaciente-textoLabel">Tricipetal</p>
                            <p className="VerPaciente-texto">{"Não informado" || dadosPaciente.medida.dobrasCutaneas.tricipetal + 'mm'}</p>
                        </div>

                        <div className="VerPaciente-cardInterno-Infor">
                            <p className="VerPaciente-textoLabel">Supra-ilíaca</p>
                            <p className="VerPaciente-texto">{"Não informado" || dadosPaciente.medida.dobrasCutaneas.suprailiaca + 'mm'}</p>
                        </div>

                        <div className="VerPaciente-cardInterno-Infor">
                            <p className="VerPaciente-textoLabel">Peitoral</p>
                            <p className="VerPaciente-texto">{"Não informado" || dadosPaciente.medida.dobrasCutaneas.peitoral + 'mm'}</p>
                        </div>

                        <div className="VerPaciente-cardInterno-Infor">
                            <p className="VerPaciente-textoLabel">Abdominal</p>
                            <p className="VerPaciente-texto">{"Não informado" || dadosPaciente.medida.dobrasCutaneas.abdominal + 'mm'}</p>
                        </div>

                        <h3 className="VerPaciente-h3">Circunferências (Da mais recente à mais antiga)</h3>
                        <div className="VerPaciente-carrosselArea">
                        
                            {dadosPaciente.medida.circunferencia.reverse().map((medida, index)=>(
                            <div key={index} className="VerPaciente-circunferenciasCard">

                                <div className="VerPaciente-cardInterno-Infor">
                                    <p className="VerPaciente-textoLabelCircunferencia">Braço esquerdo</p>
                                    <p className="VerPaciente-textoCircunferencia">{"Não informado" ||medida.bracoEsquerdo + 'cm'}</p>
                                </div>

                                <div className="VerPaciente-cardInterno-Infor">
                                    <p className="VerPaciente-textoLabelCircunferencia">Braço direito</p>
                                    <p className="VerPaciente-textoCircunferencia">{"Não informado" || medida.bracoDireito+ 'cm'}</p>
                                </div>

                                <div className="VerPaciente-cardInterno-Infor">
                                    <p className="VerPaciente-textoLabelCircunferencia">Antebraço esquerdo</p>
                                    <p className="VerPaciente-textoCircunferencia">: {medida.antebracoEsquerdo} cm </p>
                                </div>

                                <div className="VerPaciente-cardInterno-Infor">
                                    <p className="VerPaciente-textoLabelCircunferencia">Antebraço direito</p>
                                    <p className="VerPaciente-textoCircunferencia">: {medida.antebracoDireito} cm </p>
                                </div>

                                <div className="VerPaciente-cardInterno-Infor">
                                    <p className="VerPaciente-textoLabelCircunferencia">Abdômen</p>
                                    <p className="VerPaciente-textoCircunferencia">: {medida.abdomen} cm </p>
                                </div>

                                <div className="VerPaciente-cardInterno-Infor">
                                    <p className="VerPaciente-textoLabelCircunferencia">Cintura</p>
                                    <p className="VerPaciente-textoCircunferencia">: {medida.cintura} cm </p>
                                </div>

                                <div className="VerPaciente-cardInterno-Infor">
                                    <p className="VerPaciente-textoLabelCircunferencia">Peitoral</p>
                                    <p className="VerPaciente-textoCircunferencia">: {medida.peitoral} cm </p>
                                </div>

                                <div className="VerPaciente-cardInterno-Infor">
                                    <p className="VerPaciente-textoLabelCircunferencia">Ombros</p>
                                    <p className="VerPaciente-textoCircunferencia">: {medida.ombros} cm </p>
                                </div>

                                <div className="VerPaciente-cardInterno-Infor">
                                    <p className="VerPaciente-textoLabelCircunferencia">Coxa esquerda</p>
                                    <p className="VerPaciente-textoCircunferencia">: {medida.coxaEsquerda} cm </p>
                                </div>

                                <div className="VerPaciente-cardInterno-Infor">
                                    <p className="VerPaciente-textoLabelCircunferencia">Coxa direita</p>
                                    <p className="VerPaciente-textoCircunferencia">: {medida.coxaDireita} cm </p>
                                </div>

                                <div className="VerPaciente-cardInterno-Infor">
                                    <p className="VerPaciente-textoLabelCircunferencia">Panturrilha esquerda</p>
                                    <p className="VerPaciente-textoCircunferencia">: {medida.panturrilhaEsquerda} cm </p>
                                </div>

                                <div className="VerPaciente-cardInterno-Infor">
                                    <p className="VerPaciente-textoLabelCircunferencia">Panturrilha direita</p>
                                    <p className="VerPaciente-textoCircunferencia">: {medida.panturrilhaDireita} cm </p>
                                </div>

                                <div className="VerPaciente-cardInterno-Infor">
                                    <p className="VerPaciente-textoLabelCircunferencia">Quadril</p>
                                    <p className="VerPaciente-textoCircunferencia">: {medida.quadril} cm </p>
                                </div>

                                <div className="VerPaciente-cardInterno-Infor">
                                    <p className="VerPaciente-textoLabelCircunferencia">Pescoço</p>
                                    <p className="VerPaciente-textoCircunferencia">: {medida.pescoco} cm </p>
                                </div>
                            </div>
                            ))}
                        </div> 
                        </div>
                    </div>

                </div>
            </div>
            <Footer className="VerPaciente-rodape" />
        </div>
    );
};

export default VerDieta
