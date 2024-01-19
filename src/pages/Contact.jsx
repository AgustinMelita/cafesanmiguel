import React from "react";
import "../styles/contact.css";
import Mapa from "../assets/mapa.png"

export const Contact = () => {

  const googleMapsUrl = "https://www.google.com/maps/place/Jos%C3%A9+Mar%C3%ADa+Paz+1234,+B1663FSC+San+Miguel,+Provincia+de+Buenos+Aires/@-34.5490629,-58.7126097,18z/data=!4m5!3m4!1s0x95bcbd0b108a6963:0xcf0fad57fec4c7d4!8m2!3d-34.5490311!4d-58.7122431?entry=ttu";

  return (
    <div className="contact-container">
        <div className="reserv-container">
            <h1>Café San Miguel</h1>
            <h2>Abierto todos los días</h2>
            <h3>Lunes a Jueves 08:00 - 00:00 | Viernes a Domingos 08:00 - 02:00</h3>
            <div className="res-container">
                <h2>Para reservaciones escribir a:</h2>
                <h3>info@cafesanmiguel.com | 11-1234-5678</h3>
            </div>
            <div className="map-container">   
            <h2>Nos encontramos en José María Paz 1234, San Miguel</h2>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <img src={Mapa} alt="Mapa" />
            </a>
            </div>
        </div>
    </div>
  );
}