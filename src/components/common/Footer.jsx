import React from "react";
import "../../styles/footer.css"

export const Footer = () =>{

    return(

        <footer className="footer-container">
            <div className="footer-column">
                <h4>Contacto</h4>
                <h5>Correo: info@cafesanmiguel.com</h5>
                <h5>Teléfono: +54 9 11 1234 5678</h5>
                <h5>José María Paz 1234, San Miguel, Bs As</h5>
            </div>
            <div className="footer-column">
                <h4>Horario de Atención</h4>
                <h5>Lunes a Jueves: 8 am - 00 am</h5>
                <h5>Viernes a Domingos:  am - 02 am</h5>
            </div>
            <div className="footer-column">
                <h4>Redes Sociales</h4>
                <h5>Facebook</h5>
                <h5>Instagram</h5>
                <h5>TikTok</h5>
            </div>
        </footer>
    )
}