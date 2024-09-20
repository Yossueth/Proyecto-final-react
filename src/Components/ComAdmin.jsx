import "../styles/Administracion.css";
import { useState } from "react";
import { postProducts } from "../Services/productos";

const ComAdmin = () => {
  const [imagen, setImagen] = useState(null);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");

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
        descripcion: descripcion,
        precio: precio,
        categoria: categoria,
      };
      await postProducts(productos);

      setImagen("");
      setNombre("");
      setDescripcion("");
      setPrecio("");
      setCategoria("");
    } catch (error) {
      console.error("Error al agregar tarea:", error);
    }
  }

  return (
    <div id="containerAdmin">
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
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <input
          type="text"
          placeholder="Ingrese el precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <select
          id="inputSelect"
          onChange={(e) => setCategoria(e.target.value)}
          value={categoria}
        >
          <option>Categoria</option>
          <option>camisas</option>
          <option>pantalones</option>
          <option>shorts</option>
          <option>camisas de vestir larga</option>
          <option>camisas de vestir corta</option>
        </select>
        <input type="submit" value="Agregar" id="btnAgregar" />
      </form>
    </div>
  );
};

export default ComAdmin;
