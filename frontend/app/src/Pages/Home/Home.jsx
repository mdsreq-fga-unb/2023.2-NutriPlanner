import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  
  function handleCadastrarPaciente(){
    navigate('/cadastrarPaciente')
  }
  
  function handleVerPaciente(){
    navigate('/verPaciente')
  }

  return (
    <div className='home-'>
      <h2>Página Inicial</h2>
      {/* Conteúdo da Página Inicial */}
      <button onClick={(e) => handleCadastrarPaciente(e)}>Cadastrar Paciente</button>
      <button onClick={(e) => handleVerPaciente(e)}>Ver Paciente</button>

    </div>
  );
};


export default Home;
