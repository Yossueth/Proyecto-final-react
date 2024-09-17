import { useNavigate } from "react-router-dom";

function CerrarSesionAdmin() {
  const navigate = useNavigate();

  function cerrarSesion() {
    localStorage.removeItem("Admin");
    navigate("/");
  }

  return (
    <div>
      <button id="CerrarSessionAd" onClick={cerrarSesion}>
        Cerrar Sesión
      </button>
    </div>
  );
}

export default CerrarSesionAdmin;
