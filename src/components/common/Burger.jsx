import React, { useState, useEffect } from "react";
import "../../styles/burger.css";
import { Link, useNavigate } from "react-router-dom";

export const Burger = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
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
    const burgerMenu = document.querySelector(".burger-menu");
    if (burgerMenu && !burgerMenu.contains(event.target)) {
      setIsChecked(false);
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsChecked(!isChecked);
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigationWithScroll = (path, sectionId) => (event) => {
    event.preventDefault();

    scrollToSection(sectionId);

    const handleScrollEnd = () => {
      setIsChecked(false);
      setIsMenuOpen(false);
      window.removeEventListener('scroll', handleScrollEnd);
    };

    window.addEventListener('scroll', handleScrollEnd);

    // Condición para recargar la página solo cuando sea necesario
    if (path === "/cafesanmiguel/") {
      navigate(path);
    } else {
      navigate(path);

      // Recargar la página después de navegar
      window.location.reload();
    }
  };

  return (
    <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`}>
      <input type="checkbox" id="burger" checked={isChecked} onChange={toggleMenu} />
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
