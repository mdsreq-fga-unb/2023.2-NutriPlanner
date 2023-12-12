import './Header.css'
import React from 'react'

export default props =>
    <header className="header">
        <img src={props.caminhoImagem} alt=""/>
        <h1>
            {props.title}
        </h1>
    </header>