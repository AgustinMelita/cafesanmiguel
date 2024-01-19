import React from "react";
import { Link } from "react-router-dom";
import "../styles/categorymenu.css";
import MenuCafe from "../assets/menu-cafe.jpg";
import MenuDesayuno from "../assets/menu-desayuno.jpg";
import MenuPasteleria from "../assets/menu-pasteleria.jpg";
import MenuSandwich from "../assets/menu-sandwich.jpg";

export const Menu = () => {
    return (
      <div className="Menu-main-container">
        <div className="menu-background">
          <div className="category-container">
            <Link to="/cafesanmiguel/menu/cafe">
              <h2>Cafés</h2>
              <h3>Ver Más</h3>
              <img src={MenuCafe} alt="Café" />
            </Link>
          </div>
          <div className="category-container">
            <Link to="/cafesanmiguel/menu/desayunos">
              <h2>Desayunos</h2>
              <h3>Ver Más</h3>
              <img src={MenuDesayuno} alt="Desayuno" />
            </Link>
          </div>
          <div className="category-container">
            <Link to="/cafesanmiguel/menu/pasteleria">
              <h2>Pastelería</h2>
              <h3>Ver Más</h3>
              <img src={MenuPasteleria} alt="Pastelería" />
            </Link>
          </div>
          <div className="category-container">
            <Link to="/cafesanmiguel/menu/sandwiches">
              <h2>Sandwiches</h2>
              <h3>Ver Más</h3>
              <img src={MenuSandwich} alt="Sandwich" />
            </Link>
          </div>
        </div>
      </div>
    );
  };