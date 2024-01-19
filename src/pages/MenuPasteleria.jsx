import React from "react";
import "../styles/menu.css"
import menuPasteleriaData from "../locales/menuPasteleriaData.json";

export const MenuPasteleria = () => {
    return (
    <div className="div-cont"> 
        <div className="letter-main-container">
            <div className="letter-container">
            <h1>Café San Miguel</h1>
            <h2>Pastelería</h2>
            <div className="letter-content">
                {menuPasteleriaData.map((item, index) => (
                <div className="letter-row" key={index}>
                    <h3>{item.dish}</h3>
                    <p>{`$${item.price.toFixed(2)}`}</p>
                </div>
                ))}
            </div>
            </div>
        </div>
    </div>
    );
  };