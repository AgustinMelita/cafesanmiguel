import React from "react";
import Background from "../components/common/Background";
import "../styles/home.css";
import cafe1 from "../assets/cafe1.jpg"
import cafe2 from "../assets/cafe2.jpg"
import cafe3 from "../assets/cafe3.jpg"
import { Footer } from "../components/common/Footer"


export const Home = () => {
  return (
    <div className="home-container">
      <Background />
      
      <div className="about-us" id="about-us">
          <h2>Café San Miguel</h2>
          <p>Enclavado en el corazón de la vibrante localidad de San Miguel en Buenos Aires, el Café San Miguel se erige como un símbolo de tradición y pasión por el café. Fundado con la visión de crear un espacio acogedor donde los amantes del café pudieran deleitarse con experiencias únicas, San Miguel ha evolucionado para convertirse en un punto de encuentro querido en la comunidad. Desde sus inicios humildes hasta su posición actual, el café lleva consigo la esencia y la calidez de San Miguel, ofreciendo no solo exquisitas bebidas, sino también un refugio acogedor para todos aquellos que buscan momentos de conexión y disfrute en un entorno único.</p>
        </div>
      <section className="home">
        <div className="column">
          <img src={cafe1} alt="café"/>
          <h3>Especialistas en Café</h3>
          <p>En San Miguel, nos apasiona la excelencia en cada taza. Nuestros granos de café son seleccionados con cuidado de las regiones más exquisitas del mundo. Desde el proceso de tostado artesanal hasta la preparación experta de nuestros baristas, cada sorbo es una experiencia única. Descubre el arte detrás de cada taza en San Miguel.</p>
        </div>
        <div className="column">
          <img src={cafe2} alt="local"/>
          <h3>Ambiente Acogedor</h3>
          <p>Aquí no solo ofrecemos café excepcional, sino también un refugio acogedor. Nuestro espacio está diseñado para ser un escape tranquilo en medio del ajetreo diario. Las luces suaves, la música relajante y el ambiente cálido crean un lugar donde puedes disfrutar de momentos relajados, ya sea solo o en compañía. Bienvenido a tu segunda casa.</p>
        </div>
        <div className="column">
          <img src={cafe3} alt="bolsa de café"/>
          <h3>Compromiso Ambiental</h3>
          <p>También estamos comprometidos con la sostenibilidad y el cuidado del medio ambiente. Desde la elección de granos de café cultivados de manera responsable hasta la utilización de envases ecoamigables, buscamos minimizar nuestro impacto en el planeta. Descubre cómo nuestras prácticas sostenibles van más allá del café, contribuyendo a un mundo más verde. </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

