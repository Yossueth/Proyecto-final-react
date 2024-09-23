import { useState } from "react";
import "../styles/Editar.css";

export const Editar = ({ producto, actualizarProducto }) => {
  const [imagen, setImagen] = useState(producto.imagen || "");
  const [nombre, setNombre] = useState(producto.nombre || "");
  const [precio, setPrecio] = useState(producto.precio || "");
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState("");

  const abrirModal = () => setModalVisible(true);
  const cerrarModal = () => setModalVisible(false);

  const editar = async () => {
    if (!producto.id) {
      setError("ID no válido");
      return;
    }

    if (!imagen.trim() || !nombre || !precio) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      const editProduct = {
        ...producto,
        imagen,
        nombre,
        precio,
      };

      await actualizarProducto(editProduct);

      cerrarModal();
    } catch (error) {
      setError("Error al actualizar el producto");
      console.error(error);
    }
  };

  const Base64 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagen(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <button id="btnAbrirModal" onClick={abrirModal}>
        Editar
      </button>

      {modalVisible && (
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
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <label htmlFor="precio">Precio:</label>
          <input
            type="text"
            id="precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
          <button id="btnConfirmarEdit" onClick={editar}>
            Editar
          </button>
          {error && <p className="error">{error}</p>}
        </dialog>
      )}
    </div>
  );
};
