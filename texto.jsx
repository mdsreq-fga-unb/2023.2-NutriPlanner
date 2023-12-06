import React, { useState } from 'react';

const CadastroPaciente = () => {
  // State para armazenar os dados do formulário
  const [dadosFormulario, setDadosFormulario] = useState({
    dadosPessoais: {
      nomeCompleto: '',
      dataNascimento: '',
      email: '',
      endereco: '',
      celular: '',
      sexo: 'Masculino',
    },
    informacoesMedicas: {
      objetivosPaciente: '',
      problemasSaudeIndividual: '',
      problemasSaudeFamiliares: '',
      medicamentos: [],
      alergiasAlimentares: '',
      alteracoesSaude: '',
      cirurgias: '',
      lesoesFisicas: '',
      restricoesMedicas: '',
      habitosGeraisAlimentares: '',
      pesoObjetivo: 0,
      pesoAtualJejum: 0,
      imc: 0,
    },
    medidasCorporais: {
      bracoDireito: 0,
      bracoEsquerdo: 0,
      antebracos: 0,
      abdomen: 0,
      cintura: 0,
      peitoral: 0,
      ombros: 0,
      coxaDireita: 0,
      coxaEsquerda: 0,
      panturrilhaDireita: 0,
      panturrilhaEsquerda: 0,
      quadril: 0,
      pescoco: 0,
    },
    informacoesNutricionais: {
      gastoEnergeticoDiario: 0,
      metabolismoBasal: 0,
      valorCaloricoPlanoAlimentar: 0,
      observacoes: '',
    },
  });

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e, section, subSection) => {
    const { name, value } = e.target;
    setDadosFormulario((prevDados) => ({
      ...prevDados,
      [section]: {
        ...prevDados[section],
        [subSection || name]: value,
      },
    }));
  };

  // Função para lidar com a adição de medicamentos
  const handleAddMedicamento = () => {
    setDadosFormulario((prevDados) => ({
      ...prevDados,
      informacoesMedicas: {
        ...prevDados.informacoesMedicas,
        medicamentos: [...prevDados.informacoesMedicas.medicamentos, { nome: '', horario: '', tipo: 'Eventual' }],
      },
    }));
  };

  // Função para lidar com a exclusão de medicamentos
  const handleDeleteMedicamento = (index) => {
    setDadosFormulario((prevDados) => {
      const medicamentos = [...prevDados.informacoesMedicas.medicamentos];
      medicamentos.splice(index, 1);
      return {
        ...prevDados,
        informacoesMedicas: {
          ...prevDados.informacoesMedicas,
          medicamentos,
        },
      };
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode realizar a lógica de envio ou validação do formulário
    console.log('Dados do formulário:', dadosFormulario);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {/* Seção 01 - Dados Pessoais */}
        <h3>Seção 01 - Dados Pessoais</h3>
        <label>
          Nome Completo:
          <input
            type="text"
            name="nomeCompleto"
            value={dadosFormulario.dadosPessoais.nomeCompleto}
            onChange={(e) => handleChange(e, 'dadosPessoais')}
          />
        </label>
        <br />
        <label>
          Data de Nascimento:
          <input
            type="date"
            name="dataNascimento"
            value={dadosFormulario.dadosPessoais.dataNascimento}
            onChange={(e) => handleChange(e, 'dadosPessoais')}
          />
        </label>
        <br />
        {/* ... Outros campos de Dados Pessoais ... */}

        {/* Seção 02 - Informações Médicas */}
        <h3>Seção 02 - Informações Médicas</h3>
        <label>
          Objetivos do Paciente:
          <textarea
            name="objetivosPaciente"
            value={dadosFormulario.informacoesMedicas.objetivosPaciente}
            onChange={(e) => handleChange(e, 'informacoesMedicas')}
          />
        </label>
        <br />
        {/* ... Outros campos de Informações Médicas ... */}

        {/* Seção 03 - Medidas Corporais */}
        <h3>Seção 03 - Medidas Corporais</h3>
        <label>
          Braço Direito:
          <input
            type="number"
            name="bracoDireito"
            value={dadosFormulario.medidasCorporais.bracoDireito}
            onChange={(e) => handleChange(e, 'medidasCorporais')}
          />
        </label>
        <br />
        {/* ... Outros campos de Medidas Corporais ... */}

        {/* Seção 04 - Informações Nutricionais */}
        <h3>Seção 04 - Informações Nutricionais</h3>
        <label>
          Gasto Energético Diário:
          <input
            type="number"
            name="gastoEnergeticoDiario"
            value={dadosFormulario.informacoesNutricionais.gastoEnergeticoDiario}
            onChange={(e) => handleChange(e, 'informacoesNutricionais')}
          />
        </label>
        <br />
        {/* ... Outros campos de Informações Nutricionais ... */}

        {/* Botão de Envio */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CadastroPaciente;
