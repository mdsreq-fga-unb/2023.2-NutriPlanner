import React, { useContext, useState } from 'react'
import './style.css'

const CardInfoPaciente = (props) => {

    console.log(props)

    return(
        <div className="CardInfoPaciente-cardArea">
            <div className="CardInfoPaciente-leftArea">
                <div></div>
            </div>
            <div className="CardInfoPaciente-rightArea">
                <p className="CardInfoPaciente-topText">{props.topText}</p> 
                <p className="CardInfoPaciente-bottomText">{props.bottomText}</p> 
            </div>

        </div>
    )

}

export default CardInfoPaciente