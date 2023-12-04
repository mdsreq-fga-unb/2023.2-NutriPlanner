import React from "react";
import './MenuButton.css';

const MenuButton = (props) => {
     const { selecionado = false, title, icon } = props;

     if (selecionado) {
          return (
               <button className="menuButton menuButtonPage">
                    <img src={icon} className="menuIcon" />
                    <span>{title}</span>
               </button>
          )
     } else {
          return (
               <button className="menuButton">
                    <img src={icon}  className="menuIcon" />
                    <span>{title}</span>
               </button>
          )
     }
}

export default MenuButton;
