import './../VerTreinos/VerTreinosStyle.css'
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
import Search from '../../components/Search/Search'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

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

const AgendaConsulta = () => {
    const [termoBusca, setTermoBusca] = useState('');
    const [pacientes, setPacientes] = useState([]);
    const [pacienteSelecionado, setPacienteSelecionado] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState('Online'); // Inicia com 'Online' como padrão
  
    let pacienteResultado = ''
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/pacientes/${termoBusca}`);
          setPacientes(response.data.data);
        } catch (error) {
          console.error('Erro ao buscar pacientes:', error.message);
        }
      };
  
      fetchData();
    }, [termoBusca]);
  
    const handleSelectChange = (e) => {
      const pacienteId = e.target.value;
      pacienteResultado = pacientes.find((paciente) => paciente._id === pacienteId);
      return pacienteResultado;
    };

    const [selectedDate, setSelectedDate] = useState(null);
    const [time, setTime] = useState(new Date());
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
      };
  
    const handleTimeChange = (newTime) => {
        setTime(newTime);
      };

      const agendarConsulta = async () => {
        try {
    
          const data = new Date(selectedDate);
    
          const response = await axios.post(`http://localhost:3000/consultas/65727ab7d551d27e780eda5b`, {
            dtConsulta: data,
            local: selectedLocation,
          });
          console.log(response.data);
        } catch (error) {
          console.error('Error agendando consulta:', error.message);
        }
      };

  return (
    <div className="VerTreinos">
        <div className="VerTreinos-menu-lateral">
            <Logo />
            <span className="VerTreinos-menu-titulo">MENU</span>
            <hr className="VerTreinos-menu-divisao" />
            <nav className="VerTreinos-navegacao">
                <a href="/home" className='VerTreinos-item-menu'>
                    <MenuButton title="Pacientes" icon={paciente} selecionado="true"/>
                </a>
                <a href="/cadastrarPaciente" className='VerTreinos-item-menu'>
                    <MenuButton title="Cadastrar Paciente" icon={adicaoPaciente} />
                </a>
                <a href="/" className='VerTreinos-item-menu'>
                    <MenuButton title="Criar Dieta" icon={dieta}/>
                </a>
                <a href="/cadastroTreino" className='VerTreinos-item-menu'>
                    <MenuButton title="Criar Plano de Treino" icon={treino} />
                </a> 
                <a href="/agendaConsulta" className='VerTreinos-item-menu'>
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
                    <div className='form-gera-agendamento'>
                        <select
                            className="input-search"
                            id="pacientes"
                            onChange={handleSelectChange}
                        >
                            <option value="" disabled selected="selected">
                            Selecione um paciente
                            </option>
                            {pacientes.map((paciente) => (
                            <option key={paciente._id} value={paciente._id}>
                                {paciente.nome}
                            </option>
                            ))}
                        </select>
                    </div>
                    <div className='form-date-time'>
                        <div className="date-picker-container">
                            <label>Selecionar data:</label>
                            <DatePicker
                                className="CadastroTreino-input CadastroTreino-input-texto"
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>
                        <div className="time-picker-container">
                            <label>Selecionar horário:</label>
                            <input
                                className="CadastroTreino-input CadastroTreino-input-numero"
                                type='time'
                                step='1'
                                name='tempo'
                                id='tempo'
                                min='00:00:00'
                                max='01:30:00'
                                onChange={handleTimeChange}
                                required
                                pattern="\d{2}:\d{2}"
                            />
                        </div>
                        <div className="location-checkbox-container">
                        <label>Local da Consulta:</label>
                        <div>
                        <input
                            type="checkbox"
                            id="online"
                            value="Online"
                            checked={selectedLocation === 'Online'}
                            onChange={handleLocationChange}
                        />
                        <label htmlFor="online">Online</label>
                        </div>
                        <div>
                        <input
                            type="checkbox"
                            id="consultorio"
                            value="Consultório"
                            checked={selectedLocation === 'Consultório'}
                            onChange={handleLocationChange}
                        />
                        <label htmlFor="consultorio">Consultório</label>
                        </div>
                    </div>
                    </div>
                    <Button title="Agendar" onClick={() => agendarConsulta()} />
                </div>
            <Footer className="VerTreinos-rodape"/>
    </div>
  );
};


export default AgendaConsulta;
