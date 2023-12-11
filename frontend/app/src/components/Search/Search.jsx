import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchStyle.css';
import userImage from "./../../assets/icons/Person.svg"

const Search = () => {
  const [termoBusca, setTermoBusca] = useState('');
  const [pacientes, setPacientes] = useState([]);
  const [pacienteSelecionado, setPacienteSelecionado] = useState(null);


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

  const calcularIdade = (dataNascimento) => {
    const hoje = new Date();
    const dataNasc = new Date(dataNascimento);
    let idade = hoje.getFullYear() - dataNasc.getFullYear();

    const mesAtual = hoje.getMonth();
    const mesNasc = dataNasc.getMonth();

    if (mesAtual < mesNasc || (mesAtual === mesNasc && hoje.getDate() < dataNasc.getDate())) {
      idade--;
    }

    return idade;
  };

  const handleSelectChange = (e) => {
    const pacienteId = e.target.value;
    const pacienteSelecionado = pacientes.find((paciente) => paciente._id === pacienteId);
    setPacienteSelecionado(pacienteSelecionado);
  };

  

  return (
    <div className="search-container">
      <select
        className="input-search"
        id="pacientes"
        value={pacienteSelecionado ? pacienteSelecionado._id : ''}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          Selecione um paciente
        </option>
        {pacientes.map((paciente) => (
          <option key={paciente._id} value={paciente._id}>
            {paciente.nome}
          </option>
        ))}
      </select>
      {pacienteSelecionado && (
        <div className="paciente-info">
          <img src={userImage} alt="Imagem do Paciente" />
          <div className="paciente-info-text">
            <h3>{pacienteSelecionado.nome}</h3>
            <p>{calcularIdade(pacienteSelecionado.dtNascimento)} anos</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;