import "../styles/Administracion.css";
import { useState } from "react";
import { postProducts } from "../Services/productos";
import { IoReorderThree } from "react-icons/io5";
import CerrarSesionAdmin from "./CerrarSesionAdmin";
import { Destacados } from "./Destacados";
import Swal from "sweetalert2";

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

  async function meterdatos(e) {
    e.preventDefault();
    if (
      !imagen ||
      !nombre.trim() ||
      !descripcion.trim() ||
      !precio.trim() ||
      !categoria
    ) {
      Swal.fire("Todos los campos tiene  que estar llenos !");
      return;
    }

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
      <div className="dropdown">
        <a
          className="dropdown-toggle"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <IoReorderThree size={28} id="icono" />
          <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <Destacados />
          </li>

          <li role="separator" className="divider"></li>
          <li className="cerrarAdmin">
            <CerrarSesionAdmin />
          </li>
        </ul>
      </div>
      <h1 id="tituloAdmin">Administracion</h1>
      <form id="formAdmin">
        <input type="file" id="inputImagenes" onChange={CambioBase64} />
        <input
          type="text"
          placeholder="Ingrese el nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingrese la descripcion"
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
          <option>uniformes</option>
          <option>pantalones</option>
          <option>shorts</option>
          <option>camisas de vestir larga</option>
          <option>camisas de vestir corta</option>
        </select>
        <button
          type="submit"
          value="Agregar"
          id="btnAgregar"
          onClick={meterdatos}
        >
          enviar
        </button>
      </form>
    </div>
  );
};

export default ComAdmin;
