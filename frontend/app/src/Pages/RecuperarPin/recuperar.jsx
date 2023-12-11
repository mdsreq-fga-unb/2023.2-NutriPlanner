import React from 'react';
import axios from 'axios';

class RecuperarPin extends React.Component {

  state = {
    question: "Primeiro Carro ?",
    answer: "Corsa",
    error: "Resposta incorreta, tente novamente"
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.state.answer === "Corsa") {
      const pin = await axios.post("http://localhost:3000/recuperar-pin", {
        question: this.state.question,
        answer: this.state.answer
      });

      this.props.history.push("/home");
    } else {
      this.setState({
        error: "Resposta incorreta"
      });
    }
  };

  render() {
    return (
      <div className="recuperar-pin-page">
        <div className="recuperar-pin-form-wrap">
          <h2 className="recuperar-pin-welcome">Recuperar pin</h2>
          <form className="recuperar-pin-form">
            <input type="text" 
              name="question" 
              placeholder="Pergunta de segurança" 
              className="pergunta-recuperar-pin" 
              disabled
            />
            <input type="text" 
              name="resposta" 
              placeholder="Resposta" 
              className="resposta-recuperar-pin"
            />
            <button type="submit" 
              className="btn-recuperar-pin"
              onClick={this.handleSubmit}>Enviar</button>
            <p className="error">{this.state.error}</p>
          </form>
        </div>
      </div>
    );
  }
}

export default RecuperarPin;