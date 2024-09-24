import "../styles/Administracion.css";
import CardHome from "./CardHome";

const ComHome = ({ filtrar }) => {
  return (
    <div>
      <h1 id="listaProductos">Lista de Productos </h1>
    <div id="container">
      {filtrar().map((producto) => (
        <CardHome producto={producto} key={producto.id} />
      ))}
    </div>
    </div>
  );
};

export default ComHome;
