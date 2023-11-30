import React from "react"
import './MenuButton.css'

const MenuButton = (props) => {
     const { selecionado=false, title } = props;

     if(selecionado){
          return (
               <button className="menuButton menuButtonPage">
                    {props.title}
               </button>       
          )
     }
     else{
          return (
               <button className="menuButton">
                    {props.title}
               </button>       
          ) 
     }
}

export default MenuButton;