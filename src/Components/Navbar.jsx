import "../styles/Navbar.css";

import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src="" alt="" />
      <div className="search">
        <input type="text" placeholder="Buscar..." />
      </div>
      <div className="nav">
        <a href="/cart">
          <FaShoppingCart size={24} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
