import "../styles/Navbar.css";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo2 from "../img/logo2.png";
import CerrarSession from "../Components/CerrarSession";
import { Link } from "react-router-dom";

const Navbar = ({ Filtro }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo2} alt="Logo" />
      </div>
      <div className="search">
        <input onChange={Filtro} type="text" placeholder="Buscar..." />
      </div>
      <div className="nav">
        <div className="icono1">
          <a className="nav-icon">
            <FaShoppingCart size={24} />
          </a>
        </div>
        <div className="dropdown">
          <a
            className="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            href="/profile"
          >
            <FaUser size={24} />
            <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="">Sobre Nosotros</Link>
            </li>
            <li role="separator" className="divider"></li>
            <li className="cerrarSesion">
              <CerrarSession />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
