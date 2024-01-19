import React, { useState } from "react";
import "../../styles/burger.css";
import { Link, useNavigate } from "react-router-dom";

export const Burger = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigationWithScroll = (path, sectionId) => (event) => {
    event.preventDefault();

    // Hacer scroll al ID correspondiente
    scrollToSection(sectionId);

    // Desactivar el checkbox después de hacer clic
    setIsChecked(false);

    // Navegar a la ruta especificada
    navigate(path);
  };

  return (
    <div className="burger-menu">
      <input type="checkbox" id="burger" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
      <label className="burger" htmlFor="burger">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className="burger-button"></div>

      <div className="menu-content">
        <ul>
          <li>
            <Link to="/cafesanmiguel/" onClick={handleNavigationWithScroll("/cafesanmiguel/", "background")}>
              Inicio
            </Link>
          </li>
          <li>
          <Link to="/cafesanmiguel/menu/" onClick={handleNavigationWithScroll("/cafesanmiguel/menu")}>
              Menú
            </Link>
          </li>
          <li>
            <Link to="/cafesanmiguel/" onClick={handleNavigationWithScroll("/cafesanmiguel/", "about-us")}>
              Nosotros
            </Link>
          </li>
          <li>
          <Link to="/cafesanmiguel/contacto" onClick={handleNavigationWithScroll("/cafesanmiguel/contacto")}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
