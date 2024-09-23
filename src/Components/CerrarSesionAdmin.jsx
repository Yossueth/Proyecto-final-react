import { useNavigate } from "react-router-dom";

function CerrarSesionAdmin() {
  const navigate = useNavigate();

  function cerrarSesion() {
    localStorage.removeItem("Admin");
    navigate("/");
  }

  return (
    <div id="">
      <p id="CerrarSessionAd" onClick={cerrarSesion}>
        Cerrar Sesión
      </p>
    </div>
  );
}

export default CerrarSesionAdmin;
