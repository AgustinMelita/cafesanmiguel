import React from "react";
import "../styles/menu.css"
import menuCafeData from "../locales/menuCafeData.json";


export const MenuCafe = () => {
    return (
    <div className="div-cont"> 
        <div className="letter-main-container">
            <div className="letter-container">
            <h1>Café San Miguel</h1>
            <h2>Cafetería</h2>
            <div className="letter-content">
                {menuCafeData.map((item, index) => (
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