import { useState, useEffect } from "react";
import { getProducts, deleteProducts } from "../Services/productos";

const MostrarProductos = () => {
  const [productos, setProductos] = useState([]);

  const traerProductos = async () => {
    const dataProductos = await getProducts();
    setProductos(dataProductos);
  };

  useEffect(() => {
    traerProductos();
  }, []);

  const eliminar = async (id) => {
    await deleteProducts(id);
    window.location.reload();
  };

  return (
    <div id="container">
      {productos.map((producto, index) => {
        return (
          <div id="productos" key={index}>
            <div id="cardContainer">
              <div id="imagen">
                <img src={producto.imagen} alt="" sizes="" />
              </div>
              <div id="nombre">{producto.nombre}</div>
              <div id="precio">₡{producto.precio}</div>
            </div>
            <button onClick={() => eliminar(producto.id)}>Eliminar</button>
          </div>
        );
      })}
    </div>
  );
};

export default MostrarProductos;
