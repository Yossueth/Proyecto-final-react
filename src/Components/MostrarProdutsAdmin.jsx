import {
  deleteProducts,
  getProducts,
  putProducts,
} from "../Services/productos";
import { Editar } from "./Editar";
import "../styles/Administracion.css";
import { useCallback, useEffect, useState } from "react";
import { postDestacados } from "../Services/destacados";
import Swal from "sweetalert2";

const MostrarProductosAdmin = () => {
  const [productos, setProductos] = useState([]);

  const traerProductosAdmin = useCallback(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProductos(response);
      } catch (error) {
        console.error("Error fetching Products", error);
      }
    };
    fetchProducts();
  });

  useEffect(() => traerProductosAdmin(), [traerProductosAdmin]);

  const eliminar = async (id) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, ¡elimínalo!",
    });

    if (result.isConfirmed) {
      try {
        await deleteProducts(id);
        await Swal.fire({
          title: "¡Eliminado!",
          text: "Tu archivo ha sido eliminado.",
          icon: "success",
        });
        traerProductosAdmin();
      } catch (error) {
        console.error("Error al eliminar el producto:", error);
        Swal.fire({
          title: "¡Error!",
          text: "Hubo un problema al eliminar el producto.",
          icon: "error",
        });
      }
    }
  };

  const actualizarProducto = async (editProduct) => {
    try {
      await putProducts(editProduct, editProduct.id);
      traerProductosAdmin();
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  const destacar = async (data) => {
    return await postDestacados(data);
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
              <button
                onClick={() => {
                  destacar(showAdmin);
                }}
              >
                Destacar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostrarProductosAdmin;
