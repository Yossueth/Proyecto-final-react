import { useState } from "react";
import "../styles/Editar.css";
import Swal from "sweetalert2";
export const Editar = ({ producto, actualizarProducto }) => {
  // Estado para manejar los datos del producto.
  const [imagen, setImagen] = useState(producto.imagen || ""); // Inicializa con la imagen del producto.
  const [nombre, setNombre] = useState(producto.nombre || ""); // Inicializa con el nombre del producto.
  const [precio, setPrecio] = useState(producto.precio || ""); // Inicializa con el precio del producto.
  const [modalVisible, setModalVisible] = useState(false); // Estado para manejar la visibilidad del modal.

  // Funcion para abrir el modal de edicion.
  const abrirModal = () => setModalVisible(true);

  // Funcion para cerrar el modal de edicion.
  const cerrarModal = () => setModalVisible(false);

  // Funcion para manejar la edicion del producto.
  const editar = async () => {
    // Verifica que el producto tenga un ID.
    if (!producto.id) {
      return;
    }

    // Verifica que todos los campos esten llenos.
    if (!imagen.trim() || !nombre || !precio) {
      Swal.fire("¡Todos los campos tienen que estar llenos!"); // Muestra un alerta si faltan campos.
      return; // Sale de la funcion si hay campos vacios.
    }

    try {
      // Crea un objeto con los datos actualizados del producto.
      const editProduct = {
        ...producto,
        imagen,
        nombre,
        precio,
      };

      await actualizarProducto(editProduct); // Llama a la función para actualizar el producto.
      Swal.fire(
        "¡Actualizado!",
        "El producto se actualizó correctamente.",
        "success"
      );

      cerrarModal(); // Cierra el modal.
    } catch (error) {
      Swal.fire("¡Error!", "Hubo un problema al actualizar.", "error"); // Muestra mensaje de error.
      console.error(error); // Imprime el error en la consola.
    }
  };

  // Funcion para convertir la imagen seleccionada a formato base64.
  const Base64 = (e) => {
    const file = e.target.files[0]; // Obtiene el archivo seleccionado.
    if (file) {
      const reader = new FileReader(); // Crea un objeto FileReader.
      reader.onloadend = () => {
        setImagen(reader.result); // Actualiza el estado con el resultado en base64.
      };
      reader.readAsDataURL(file); // Lee el archivo como URL de datos.
    }
  };

  return (
    <div>
      <button id="btnAbrirModal" onClick={abrirModal}>
        Editar
      </button>

      {modalVisible && ( // Condicion para mostrar el modal si está visible.
        <dialog id="modal" open>
          <p id="cerrarModal" onClick={cerrarModal}>
            𝐗
          </p>
          <label htmlFor="imagen">Imagen:</label>
          <input type="file" id="imagen" onChange={Base64} />
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre} // Valor del input para el nombre.
            onChange={(e) => setNombre(e.target.value)} // Actualiza el estado con el nombre.
          />
          <label htmlFor="precio">Precio:</label>
          <input
            type="text"
            id="precio"
            value={precio} // Valor del input para el precio.
            onChange={(e) => setPrecio(e.target.value)} // Actualiza el estado con el precio.
          />
          <button id="btnConfirmarEdit" onClick={editar}>
            Editar
          </button>
        </dialog>
      )}
    </div>
  );
};
