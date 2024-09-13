import "../styles/Administracion.css";
import { useState } from "react";
import { postProducts } from "../Services/productos";

const ComAdmin = () => {
  const [imagen, setImagen] = useState(null);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  const CambioBase64 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagen(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  async function meterdatos() {
    try {
      const productos = {
        imagen: imagen,
        nombre: nombre,
        precio: precio,
      };
      await postProducts(productos);

      setImagen(null);
      setNombre("");
      setPrecio("");
    } catch (error) {
      console.error("Error al agregar tarea:", error);
    }
  }

  return (
    <div>
      <form id="formAdmin" onSubmit={meterdatos}>
        <input type="file" id="inputImagenes" onChange={CambioBase64} />
        <input
          type="text"
          placeholder="Ingrese el nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="text"
          placeholder="Ingrese el precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <input type="submit" value="Agregar" id="btnAgregar" />
      </form>
    </div>
  );
};

export default ComAdmin;
