import React from "react";
import './Button.css';

const Button = (props) => {
     const { classeAdicional, title, icon, onClick} = props

     const buttonClasses = `button ${classeAdicional} || ''}`;

     return (
          <button className={buttonClasses} onClick={onClick}>
               <img src={icon}  className="buttonIcon" />
               <span className="buttonTitle">{title}</span>
          </button>       
     );
}

export default Button;

