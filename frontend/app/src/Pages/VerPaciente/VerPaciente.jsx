import React, { useEffect, useState } from "react"
import "./style.css"
import CardInfoPaciente from "../../Components/CardInfoPaciente";

const VerPaciente = () => {

    const [nomePaciente, setNomePaciente] = useState("Maria Alice");
    const [alturaPaciente, setAlturaPaciente] = useState(0);
    const [pesoPaciente, setPesoPaciente] = useState(0);

    //Esses dados não estão no protótipo
    const [emailPaciente, setEmailPaciente] = useState("");
    const [telefonePaciente, setTelefonePaciente] = useState(0);
    const [enderecoPaciente, setEnderecoPaciente] = useState("");

    //Falta o back desses dados
    const [idadePaciente, setIdadePaciente] = useState(0);
    const [metaPesoPaciente, setMetaPesoPaciente] = useState(0);
    const [caloriasDietaPaciente, setCaloriasDietaPaciente] = useState(0);
    const [imcPaciente, setImcPaciente] = useState(0);
    const [statusPaciente, setStatusPaciente] = useState("Ativo");

    function alterarStatus(){
        if(statusPaciente === "Ativo") setStatusPaciente("Inativo")
        else setStatusPaciente("Ativo")
    }

    return(
        <div className="VerPaciente">
            <div className="VerPaciente-barraLateral">
                <div className="VerPaciente-cardPaciente">
                    <div className="VerPaciente-imagem"></div>
                    <p className="VerPaciente-nomePaciente">{nomePaciente}</p>
                    <p className="VerPaciente-statusPaciente">Status do Paciente: {statusPaciente}</p>

                    <div className="VerPaciente-btnArea">
                        <div className="VerPaciente-btnMenor"><p>Editar Perfil</p></div>
                        <div onClick={alterarStatus} className="VerPaciente-btnMenor"><p>Alterar Status</p></div>
                    </div>


                </div>
            </div>
            <div>
                <div className="VerPaciente-topArea">
                    <CardInfoPaciente topText={idadePaciente + " anos"} bottomText={pesoPaciente + "Kg - " + alturaPaciente + "m"} />
                    <CardInfoPaciente topText={"Meta: " + metaPesoPaciente + " Kg"} bottomText={"Perda de Peso"}/>
                    <CardInfoPaciente topText={caloriasDietaPaciente + " Kcal"} bottomText={"Dieta Atual"}/>
                    <CardInfoPaciente topText={imcPaciente} bottomText={"Peso Normal"}/>
                </div>
            </div>
        </div>
    )
}

export default VerPaciente;