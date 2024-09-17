import {
  deleteProducts,
  getProducts,
  putProducts,
} from "../Services/productos";
import { Editar } from "./Editar";
import "../styles/Administracion.css";
import { useEffect, useState } from "react";

const MostrarProductosAdmin = () => {
  const [productos, setProductos] = useState([]);

  const traerProductosAdmin = async () => {
    const dataProductos = await getProducts();
    setProductos(dataProductos);
  };

  useEffect(() => {
    traerProductosAdmin();
  }, []);

  const eliminar = async (id) => {
    try {
      await deleteProducts(id);

      traerProductosAdmin();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const actualizarProducto = async (editProduct) => {
    try {
      await putProducts(editProduct, editProduct.id);

      traerProductosAdmin();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div id="container">
      {productos.map((showAdmin) => (
        <div id="producto" key={showAdmin.id}>
          <div id="productos">
            <div id="cardContainer">
              <div id="imagen">
                <img src={showAdmin.imagen} alt={showAdmin.nombre} />
              </div>
              <div id="nombre">{showAdmin.nombre}</div>
              <div id="precio">₡{showAdmin.precio}</div>
            </div>
            <div id="botones">
              <button onClick={() => eliminar(showAdmin.id)}>Eliminar</button>
              <Editar
                producto={showAdmin}
                actualizarProducto={actualizarProducto}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostrarProductosAdmin;
