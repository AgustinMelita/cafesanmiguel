import React, { useState, useEffect } from "react";
import "../../styles/burger.css";
import { Link, useNavigate } from "react-router-dom";

export const Burger = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Detectar si es un dispositivo táctil
    const isTouchDevice = ('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0);

    if (isTouchDevice) {
      document.addEventListener('touchstart', handleTouchStart, false);
    }

    return () => {
      if (isTouchDevice) {
        document.removeEventListener('touchstart', handleTouchStart, false);
      }
    };
  }, []);

  const handleTouchStart = (event) => {
    // Cerrar el menú si se toca fuera de él
    const burgerMenu = document.querySelector(".burger-menu");
    if (burgerMenu && !burgerMenu.contains(event.target)) {
      setIsChecked(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigationWithScroll = (path, sectionId) => (event) => {
    event.preventDefault();

    // Desactivar el checkbox después de hacer clic para cerrar el menú
    setIsChecked(false);

    // Hacer scroll al ID correspondiente
    scrollToSection(sectionId);

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
            <Link to="/cafesanmiguel/" onClick={handleNavigationWithScroll("/cafesanmiguel/", "about-us")}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="/cafesanmiguel/menu/" onClick={handleNavigationWithScroll("/cafesanmiguel/menu")}>
              Menú
            </Link>
          </li>
          <li>
            <Link to="/cafesanmiguel/contacto/" onClick={handleNavigationWithScroll("/cafesanmiguel/contacto")}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
