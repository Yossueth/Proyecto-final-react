import "../styles/Administracion.css";

const CardHome = ({ producto }) => {
  return (
    <div>
    <div id="container" key={producto.id}>
      <div id="productos">
        <div id="cardContainer">
          <div id="imagen">
            <img src={producto.imagen} alt={producto.nombre} />
          </div>
          <div id="nombre">{producto.nombre}</div>
          <div id="precio">₡{producto.precio}</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardHome;
