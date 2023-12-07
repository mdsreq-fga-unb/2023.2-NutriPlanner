import { useState } from "react"
import BarraLateral from "../../Components/Barra Lateral"
import "./style.css"

const CriarDieta = () => {

    const [liquidos, setLiquidos] = useState({ agua: "", cha: ""})
    const [refeicao, setRefeicao] = useState([{refeicao: 1},]);

    const [suplementacao, setSuplementacao] = useState([{},]);

    return(
        <div className="CriarDieta">
            <BarraLateral/>
            <div className="CriarDieta-LadoDireito">
                <div className="CriarDieta-VegetaisSugeridos"></div>
                <div className="CriarDieta-ConsumoDeLiquidos">
                    <h2>Consumo de líquidos</h2>
                    <div>
                        <label htmlFor="inputAgua">Quantidade de água sugerida: (em ml) </label>
                        <input type="text" id="inputAgua" className="CriarDieta-input" value={liquidos.agua} onChange={(e) => {setLiquidos({...liquidos, agua: e.target.value})}}/>
                    </div>
                    <div>
                       <label htmlFor="inputCha">Quantidade de chá sugerida: (em ml) </label>
                        <input type="text" id="inputCha" className="CriarDieta-input" value={liquidos.cha} onChange={(e) => {setLiquidos({...liquidos, cha: e.target.value})}}/> 
                    </div>
                    
                </div>
                <div className="CriarDieta-Refeicoes">
                    <h2>Refeições</h2>
                    <button>Adicionar Refeição</button>
                </div>
                <div className="CriarDieta-Suplementacao">
                    <h2>Suplementação</h2>
                        <button>Adicionar Suplemento</button>
                </div>
            </div>
        </div>
    )


}

export default CriarDieta