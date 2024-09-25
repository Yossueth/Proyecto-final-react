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

const CardAdmin = () => {
  const [productos, setProductos] = useState([]); // Estado para almacenar productos.

  // Funcion para obtener productos desde el servidor.
  const traerProductosAdmin = useCallback(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts(); // Llama a la función que obtiene los productos.
        setProductos(response); // Actualiza el estado con los productos obtenidos.
      } catch (error) {
        console.error("Error fetching Products", error); // Manejo de errores.
      }
    };
    fetchProducts();
  });

  // Hook que se ejecuta al montar el componente y cuando cambia traerProductosAdmin.
  useEffect(() => traerProductosAdmin(), [traerProductosAdmin]);

  // Funcion para eliminar un producto.
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
        await deleteProducts(id); // Llama a la funcion para eliminar el producto.
        await Swal.fire({
          title: "¡Eliminado!",
          text: "Tu archivo ha sido eliminado.",
          icon: "success",
        });
        traerProductosAdmin(); // Refresca la lista de productos.
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

  // Funcion para actualizar un producto.
  const actualizarProducto = async (editProduct) => {
    try {
      await putProducts(editProduct, editProduct.id); // Llama a la función para actualizar el producto.
      traerProductosAdmin(); // Refresca la lista de productos.
    } catch (error) {
      console.error("Error al actualizar el producto:", error); // Manejo de errores.
    }
  };

  // Función para destacar un producto.
  const destacar = async (data) => {
    Swal.fire("Se destaco correctamente!"); // Mensaje de confirmacion.
    return await postDestacados(data); // Llama a la funcion para destacar el producto.
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
              <button id="btnEliminar" onClick={() => eliminar(showAdmin.id)}>
                Eliminar
              </button>
              <Editar
                producto={showAdmin}
                actualizarProducto={actualizarProducto}
              />
              <button id="btnDestacar"onClick={() => {destacar(showAdmin);}}>
                Destacar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardAdmin;
