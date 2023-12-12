import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchStyle.css';

const Search = () => {
  const [termoBusca, setTermoBusca] = useState('');
  const [pacientes, setPacientes] = useState([]);
  const [pacienteSelecionado, setPacienteSelecionado] = useState(null);

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

  return (
    <div className="search-container">
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
  );
};

export default Search;