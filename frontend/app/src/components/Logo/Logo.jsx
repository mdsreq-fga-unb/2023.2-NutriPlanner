import './Logo.css'
import logo from '../../assets/imgs/logo.svg'
import React from 'react'

export default (props) =>
        <a href='/home'>
            <img src={logo} alt="Logo" className="logo" />
        </a>
