import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Enlaces</h3>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Dirección: 123 Calle Ficticia, Ciudad, País</p>
          <p>Teléfono: 8305-0615</p>
          <p>Email: damriver@hotmail.es</p>
        </div>
        <div className="footer-section">
          <h3>Síguenos</h3>
          <ul className="social-links">
            <li>
              <a
                href="https://www.facebook.com/uniformayproyecta?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://x.com/?lang=es"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/damriver_uniformes/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Dam-River Uniformes. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
