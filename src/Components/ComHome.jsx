import "../styles/Administracion.css";
import MostrarProductos from "./MostrarProductos";

const ComHome = ({ filtrar }) => {
  return (
    <div>
      <h1>Lista de Productos </h1>
    <div id="container">
      {filtrar().map((producto) => (
        <MostrarProductos producto={producto} key={producto.id} />
      ))}
    </div>
    </div>
  );
};

export default ComHome;
