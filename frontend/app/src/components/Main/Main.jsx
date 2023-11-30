import React from 'react'
import './Main.css'
import Header from '../Header/Header'

function setNome(e){
    console.log('aaa');
}

// function setNome(e){
//     console.log('aaa');
// }

// function setNome(e){
//     console.log('aaa');
// }


export default props =>
    <React.Fragment>
        <Header {...props}/>
        <main className="content">
            <div className="form">
                <div className="col-12 col-md6-6">
                    <div className="form-group">
                        <label>Nome Completo</label>
                        <input type="text" className="form-control" name="name" onChange={e => setNome(e)}/>
                    </div>
                </div>

                <div className="col-12 col-md6-6">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email" onChange={e => setNome(e)}/>
                    </div>
                </div>

                <div className="col-12 col-md6-6">
                    <div className="form-group">
                        <label>Data de Nascimento</label>
                        <input type="date" className="form-control" name="dataNascimento" onChange={e => setNome(e)}/>
                    </div>
                </div>

                <div className="col-12 col-md6-6">
                    <div className="form-group">
                        <label>Telefone Celular</label>
                        <input type="text" className="form-control" name="telefone" onChange={e => setNome(e)}/>
                    </div>
                </div>

                <div className="col-12 col-md6-6">
                    <div className="form-group">
                        <label>Endereço</label>
                        <input type="text" className="form-control" name="endereco" onChange={e => setNome(e)}/>
                    </div>
                </div>
            </div>

        </main>
    </React.Fragment>


{/* <div>
<h1>{tipo} {nome}</h1>
<hr />
<input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
<input type="text" placeholder="Nome..." value={nome} onChange={this.setNome}/>
</div> */}