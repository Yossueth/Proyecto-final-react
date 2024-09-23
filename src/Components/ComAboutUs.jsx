import React from "react";
import saco from "../img/saco.jpeg";
import trabajador from "../img/trabajador.jpeg";
import "../styles/aboutUs.css";

export const ComAboutUs = () => {
  return (
    <div>
      <div className="SobreNosotros">
        <h1>About Us </h1>
        <p id="texto1">
          Somos empresa dedicada a la manufactura textil en confección de
          uniformes a la medida, ejecutivos, industriales, hospitalarios e
          instituciones educativas, con 38 años de experiencia en el mercado
          nacional.
        </p>
        <div id="img1">
          <img
            src={trabajador}
            alt=""
            style={{ width: "300px", height: "200px" }}
          />
        </div>
      </div>

      <div className="mision">
        <h1>Mision</h1>
        Nuestra misión es ofrecer soluciones textiles de alta calidad y
        personalización, especializándonos en la confección de uniformes a la
        medida para sectores ejecutivos, industriales, hospitalarios y
        educativos. Con 38 años de experiencia en el mercado costarricense, nos
        comprometemos a brindar productos duraderos y funcionales, que reflejen
        la identidad y profesionalismo de nuestros clientes, garantizando
        siempre un servicio ágil y eficiente.
      </div>
      <div className="vision">
        <h1>Vision</h1>
        <p id="texto2">
          Ser líderes en la industria textil de Costa Rica, reconocidos por la
          excelencia en la confección de uniformes personalizados para diversos
          sectores. Aspiramos a expandir nuestro alcance y consolidarnos como la
          primera opción en el mercado nacional, distinguiéndonos por la
          innovación, sostenibilidad y el compromiso con la satisfacción total
          de nuestros clientes. Buscamos ser una empresa que inspire confianza y
          contribuya al desarrollo del talento costarricense a través de la
          calidad y el diseño de nuestros productos.
        </p>
        <div className="img2">
          <img src={saco} alt="" style={{ width: "300px", height: "200px" }} />
        </div>
      </div>
      <div className="precios">
        <h3>Precios:</h3>
        <ul>
          <li>
            <strong>Trajes ejecutivos</strong> en casimir y lino: desde ₡50.000.
          </li>
          <li>
            <strong>SCRUBs</strong> en tela antifluido: desde ₡15.000.
          </li>
          <li>
            <strong>Uniformes industriales</strong> en mezclilla y tela army:
            desde ₡15.000.
          </li>
          <li>
            <strong>Camisetas polo</strong>: desde ₡5.800.
          </li>
        </ul>
      </div>
    </div>
  );
};
