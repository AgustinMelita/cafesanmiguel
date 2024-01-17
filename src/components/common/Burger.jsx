import React from "react";
import "../../styles/burger.css";

export const Burger = () => {

    return(

        <div className="burger-menu">
            <input type="checkbox" id="burger"/>
            <label className="burger" htmlFor="burger">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <div className="burger-button">
            </div>

            <div className="menu-content">
                <ul>
                    <li><a href=""> Inicio</a></li>
                    <li><a href=""> Menú</a></li>
                    <li><a href=""> Nosotros</a></li>
                    <li><a href=""> Contacto</a></li>
                </ul>
            </div>    
        </div>
    )

}