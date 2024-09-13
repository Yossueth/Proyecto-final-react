import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function CerrarSession() {
  const navigate = useNavigate();

  function cerrarSesion() {
    localStorage.removeItem("Autenticado");
    navigate("/");
  }

  return (
    <div>
      <p id="CerrarSession" onClick={cerrarSesion}>
        Cerrar Sesión
      </p>
    </div>
  );
}

export default CerrarSession;
