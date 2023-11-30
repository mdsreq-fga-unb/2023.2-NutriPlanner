import React, {Component} from "react";
import Main from '../Main/Main'
import axios from "axios"

const baseUrl = 'http:localhost:3000/pacientes'
const initialState ={
   user: {
      name: '',
      email: '',   
   }
}

export default class UserCrud extends Component {

   state = {...initialState}


   render() {
      const { tipo, nome } = this.state

      return (
          <div>
              <h1>{tipo} {nome}</h1>
              <hr />
              <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
              <input type="text" placeholder="Nome..." value={nome} onChange={this.setNome}/>
          </div>
      )
  }

    clear() {
       this.setState({ user: initialState.user})
    }

    save() {
       const user = this.state.user
       const url = baseUrl
       axios.post(url, user)
          .then(resp => {
             this.setState({ user: initialState.user })
          })
    }

    updateField(event) {
       const user = {...this.state.user}
       user[event.target.name] = event.target.value
       this.setState({ user })
    }

    renderForm() {
       return (
          <div className="form">
             <div className="row">
                <div className="col-12 col-md6-6">
                   <div className="form-group">
                      <label>Nome</label>
                      <input type="text" className="form-control" name="name"
                      value={this.state.user.name}
                      onChange={e => this.updateField(e)}
                      placeholder="Digite o nome completo do paciente"/>
                   </div>
                </div>

                <div className="col-12 col-md6-6">
                   <div className="form-group">
                      <label>E-mail</label>
                      <input type="text" className="form-control" name="email"
                      value={this.state.user.email}
                      onChange={e => this.updateField(e)}
                      placeholder="Digite o e-mail completo do paciente"/>
                   </div>
                </div>
             </div>

             <hr/>

             <div className="row">
                <div className="col-12 d-flex justify-content-end">
                   <button className="btn btn-primary" onClick={e => this.save(e)}>Salvar</button>

                   <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>Cancelar</button>
                </div>
             </div>
          </div>
       )
    }

    render() {
       return (
          renderForm()
       )
    }
}