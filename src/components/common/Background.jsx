import React, { useEffect, useState } from "react";
import "../../styles/background.css";

function Background() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="background-container">
      <div
        className="background" id="background" loading="lazy"
        style={{
          backgroundPositionY: `${scrollPosition / 2}px`, // Ajusta la velocidad del efecto parallax cambiando el divisor
        }}
      ></div>
      <div className="title-container">
        <h1 className="title">San Miguel</h1>
        <h2 className="subtitle">Café</h2>
        <h3 className="description">Cafetería, Pastelería y Sandwichería</h3>
      </div>
      <span className="material-symbols-outlined" id="down-arrow">
          expand_more
        </span>
    </div>
  );
}

export default Background;