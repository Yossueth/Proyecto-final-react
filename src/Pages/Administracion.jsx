import ComAdmin from "../Components/ComAdmin";
import MostrarProdutsAdmin from "../Components/MostrarProdutsAdmin";
import CerrarSesionAdmin from "../Components/cerrarSesionAdmin";

const Administracion = () => {
    return (
      <div>
        <ComAdmin />
        <CerrarSesionAdmin />
        <MostrarProdutsAdmin />
      </div>
    );
  };

export default Administracion;
