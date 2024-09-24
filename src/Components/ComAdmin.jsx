import "../styles/Administracion.css";
import { useState } from "react";
import { postProducts } from "../Services/productos";
import { IoReorderThree } from "react-icons/io5";
import CerrarSesionAdmin from "./CerrarSesionAdmin";
import { Destacados } from "./Destacados";
import Swal from "sweetalert2";

const ComAdmin = () => {
  // Estado para manejar los datos del formulario.
  const [imagen, setImagen] = useState(null);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");

  // Función para convertir la imagen a base64.
  const CambioBase64 = (e) => {
    const file = e.target.files[0]; // Obtiene el archivo seleccionado.
    if (file) {
      const reader = new FileReader(); // Crea un objeto FileReader.
      reader.onloadend = () => {
        setImagen(reader.result); // Actualiza el estado con el resultado en base64.
      };
      reader.readAsDataURL(file); // Lee el archivo como URL de datos.
    }
  };

  // Funcion para manejar el envio de datos del formulario.
  async function meterdatos(e) {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario.

    // Verifica que todos los campos esten llenos.
    if (!imagen ||!nombre.trim() ||!descripcion.trim() ||!precio.trim() ||!categoria) {
      Swal.fire("Todos los campos tienen que estar llenos!"); // Muestra una alerta si faltan campos.
      return; // Sale de la funcion si hay campos vacíos.
    }

    try {
      const productos = {
        imagen: imagen,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        categoria: categoria,
      }; // Crea un objeto con los datos del producto.

      await postProducts(productos); // Envia el producto al servidor.

      // Reinicia los campos del formulario despues de agregar el producto.
      setImagen("");
      setNombre("");
      setDescripcion("");
      setPrecio("");
      setCategoria("");
    } catch (error) {
      console.error("Error al agregar producto:", error);
    }
  }

  return (
    <div id="containerAdmin">
      <div className="dropdown">
        {" "}
        {/* Menú desplegable para opciones administrativas. */}
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
            <Destacados /> {/* Componente para mostrar productos destacados. */}
          </li>
          <li role="separator" className="divider"></li>
          <li className="cerrarAdmin">
            <CerrarSesionAdmin /> {/* Componente para cerrar sesion. */}
          </li>
        </ul>
      </div>
      <h1 id="tituloAdmin">Administración</h1>
      <form id="formAdmin">
        <input type="file" id="inputImagenes" onChange={CambioBase64} />{" "}
        {/* Input para seleccionar una imagen. */}
        <input
          type="text"
          placeholder="Ingrese el nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)} // Actualiza el estado con el nombre del producto.
        />
        <input
          type="text"
          placeholder="Ingrese la descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)} // Actualiza el estado con la descripcion.
        />
        <input
          type="text"
          placeholder="Ingrese el precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)} // Actualiza el estado con el precio.
        />
        <select
          id="inputSelect"
          onChange={(e) => setCategoria(e.target.value)} // Actualiza el estado con la categoria.
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
          onClick={meterdatos} // Maneja el envío del formulario.
        >
          enviar
        </button>
      </form>
    </div>
  );
};

export default ComAdmin;
