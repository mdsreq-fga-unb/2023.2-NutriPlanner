import './VerTreinosStyle.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment';
import { Link } from 'react-router-dom';

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

const VerTreinos = () => {
    const [treinos, setTreinos] = useState([]);

    useEffect(() => {
        const fetchTreinos = async () => {
          try {
            const response = await axios.get('http://localhost:3000/treinos/656fe262751bb37143d35513'); 
            setTreinos(response.data.data);
          } catch (error) {
            console.error('Erro ao buscar treinos', error);
          }
        };
        fetchTreinos();
    }, []); 

  return (
    <div className="VerTreinos">
        <div className="VerTreinos-menu-lateral">
            <Logo />
            <span className="VerTreinos-menu-titulo">MENU</span>
            <hr className="VerTreinos-menu-divisao" />
            <nav className="VerTreinos-navegacao">
                <a href="/" className='VerTreinos-item-menu'>
                    <MenuButton title="Pacientes" icon={paciente} selecionado="true"/>
                </a>
                <a href="/" className='VerTreinos-item-menu'>
                    <MenuButton title="Cadastrar Paciente" icon={adicaoPaciente} />
                </a>
                <a href="/" className='VerTreinos-item-menu'>
                    <MenuButton title="Criar Dieta" icon={dieta}/>
                </a>
                <a href="/cadastroTreino" className='VerTreinos-item-menu'>
                    <MenuButton title="Criar Plano de Treino" icon={treino} />
                </a>
                <a href="/" className='VerTreinos-item-menu'>
                    <MenuButton title="Agendar Consulta" icon={agendamento} />
                </a>
            </nav>
        </div>
        <div className="VerTreinos-conteudo">
                <div className="VerTreinos-cabecalho">
                    <div className='VerTreinos-items-cabecalho'>
                        <Header title="Treinos Cadastrados" caminhoImagem={treino} />
                        <div className='VerTreinos-botoes-cabecalho'>
                            <Button title="Ajuda" classeAdicional="VerTreinos-botoes-cabecalho" icon={ajuda} />
                            <Button title="Sair" classeAdicional="VerTreinos-botoes-cabecalho" icon={sair}/>
                        </div>
                    </div>
                    <hr className="VerTreinos-divisao-conteudo"></hr>
                    <Button title="Voltar" classeAdicional="VerTreinos-botao-voltar" icon={voltar}/>
                </div>
                <div className='form-gera-treino'>
                    {/* Mapeia os treinos e cria as divs card-treinos */}
                    {treinos.map((treino, index) => (
                        <div key={treino._id} className='card-treinos'>
                            <p className='card-treinos-text'>{`Treino ${index + 1} | ${moment(treino.dtEmissao).format('DD/MM/YYYY')}`}</p>
                            <Link to={`/editarTreinos/${treino._id}`} className='card-treinos-link'>Ver treino</Link>
                        </div>
                    ))}
                </div>
                </div>
            <Footer className="VerTreinos-rodape"/>
    </div>
  );
};


export default VerTreinos;
