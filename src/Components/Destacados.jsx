import { useState, useEffect, useCallback } from "react";
import { getDestacados, deleteDestacados } from "../Services/destacados";
import Swal from "sweetalert2";

export const Destacados = () => {
  const [destacados, setDestacados] = useState([]); // Estado para almacenar los productos destacados.
  const [modalVisible, setModalVisible] = useState(false); // Estado para manejar la visibilidad del modal.

  // Funcion para abrir el modal.
  const abrirModal = () => setModalVisible(true);

  // Funcion para cerrar el modal.
  const cerrarModal = () => setModalVisible(false);

  // Funcion para obtener productos destacados.
  const productosDestacados = useCallback(() => {
    const fetchProducts = async () => {
      try {
        const response = await getDestacados(); // Llama a la función que obtiene los productos destacados.
        setDestacados(response); // Actualiza el estado con los productos obtenidos.
      } catch (error) {
        console.error("Error fetching Products", error); // Manejo de errores.
      }
    };
    fetchProducts(); // Llama a la función para obtener los productos.
  }, []); // Dependencia vacia para ejecutar solo al montar.

  // Hook que se ejecuta al montar el componente para obtener los productos destacados.
  useEffect(() => productosDestacados(), [productosDestacados]);

  // Funcion para eliminar un producto destacado.
  const eliminar = async (id) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?", // Mensaje de confirmación.
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true, // Muestra boton para cancelar.
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, ¡elimínalo!", // Texto del boton de confirmacion.
    });

    // Si el usuario confirma la eliminación.
    if (result.isConfirmed) {
      try {
        await deleteDestacados(id); // Llama a la funci0n para eliminar el producto.
        await Swal.fire({
          title: "¡Eliminado!", // Mensaje de exito.
          text: "Tu archivo ha sido eliminado.",
          icon: "success",
        });
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

  return (
    <div>
      <p id="btnAbrirModalDestacados" onClick={abrirModal}>
        Destacados
      </p>

      {modalVisible && ( // Condición para mostrar el modal si está visible.
        <dialog id="modalDestacados" open>
          <p id="cerrarModalDestacados" onClick={cerrarModal}>
            𝐗
          </p>
          <div id="container">
            {destacados.map((showDestacados) => (
              <div id="productos" key={showDestacados.id}>
                <div id="cardContainer">
                  <div id="imagen">
                    <img
                      src={showDestacados.imagen}
                      alt={showDestacados.nombre}
                    />
                  </div>
                  <div id="nombre">{showDestacados.nombre}</div>
                  <div id="precio">₡{showDestacados.precio}</div>
                </div>
                <button onClick={() => eliminar(showDestacados.id)}>
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </dialog>
      )}
    </div>
  );
};
