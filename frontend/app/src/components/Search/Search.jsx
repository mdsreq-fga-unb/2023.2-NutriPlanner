import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchStyle.css';

const Search = () => {
  const [termoBusca, setTermoBusca] = useState('');
  const [pacientes, setPacientes] = useState([]);
  const [pacienteSelecionado, setPacienteSelecionado] = useState(null);

  let resultado, pacientez = ''

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
    pacientez = pacientes.find((paciente) => paciente._id === pacienteId);
  };

  function retornaPaciente() {
    console.log(pacientez)
  }

  return (
    <div className="search-container">
      <select
        className="input-search"
        id="pacientes"
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
      <button onClick={retornaPaciente}>aaaa</button>
    </div>
  );
};

export default Search;