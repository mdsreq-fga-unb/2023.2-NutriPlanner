// Button.jsx

import React from "react";
import './Button.css';

const Button = (props) => {
     const buttonClasses = `button ${props.classeAdicional || 'button'}`;

     return (
          <button className={buttonClasses} onClick={props.onClick}>
               {props.title}
          </button>       
     );
}

export default Button;
