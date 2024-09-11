import "../styles/Navbar.css";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo2 from "../img/logo2.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo2} alt="Logo" />
      </div>
      <div className="search">
        <input type="text" placeholder="Buscar..." />
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
            <FaUser size={24} /><span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Action</a>
            </li>
            <li>
              <a href="#">Another action</a>
            </li>
            <li>
              <a href="#">Something else here</a>
            </li>
            <li role="separator" className="divider"></li>
            <li>
              <a href="#">Separated link</a>
            </li>
            <li role="separator" className="divider"></li>
            <li>
              <a href="#">One more separated link</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
