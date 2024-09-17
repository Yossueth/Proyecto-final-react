import "../styles/Administracion.css";
import MostrarProductos from "./MostrarProductos";

const ComHome = ({ filtrar }) => {
  return (
    <div id="container">
      {filtrar().map((producto) => (
        <MostrarProductos producto={producto} key={producto.id} />
      ))}
    </div>
  );
};

export default ComHome;
