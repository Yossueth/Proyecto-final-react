import { Link, useNavigate } from "react-router-dom";
import { getUsers, postUsers } from "../Services/users";
import { useState } from "react";
import "../styles/sigup.css";
import Swal from "sweetalert2";

const FormRegistro = () => {
  // Estados para almacenar el nombre, correo y contraseña del usuario.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate(); // Inicializa el hook para la navegacion.

  // Funcion que maneja el envio del formulario.
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario.

    // Obtiene la lista de usuarios registrados.
    const userList = await getUsers();

    // Verifica si el correo ingresado ya esta registrado.
    const userRegister = userList.find((user) => user.email === email);

    // Si el usuario ya esta registrado, muestra un mensaje de error.
    if (userRegister) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Un usuario con esa dirección de correo electrónico ya está registrado 😭!",
      });
      return; // Sale de la función.
    }

    // Crea un objeto con la información del nuevo usuario.
    const objectUsers = {
      name: name,
      email: email,
      password: password,
    };

    // Envía el objeto del nuevo usuario al servicio para registrarlo.
    await postUsers(objectUsers);
    Swal.fire("Registro exitoso 👌!"); // Muestra un mensaje de éxito.
    navigate("/"); // Redirige al usuario a la página de inicio.
  };

  return (
    <div>
      <section className="section">
        <h2>Registro</h2>
        <form id="signupForm" onSubmit={handleSubmit}>
          {/* Maneja el envío del formulario. */}
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Ingrese su Nombre" // Placeholder del input.
            value={name} // Valor del input del nombre.
            onChange={(e) => setName(e.target.value)} // Actualiza el estado con el nombre ingresado.
            required // Campo requerido.
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Ingrese un email" // Placeholder del input.
            value={email} // Valor del input del correo.
            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado con el correo ingresado.
            required // Campo requerido.
          />
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese una contraseña" // Placeholder del input.
            value={password} // Valor del input de contraseña.
            onChange={(e) => setPassword(e.target.value)} // Actualiza el estado con la contraseña ingresada.
            required // Campo requerido.
          />
          <input type="submit" value="Registro" />
          <p id="cambio">
            Ya tienes una cuenta? <Link to="/">Login</Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default FormRegistro;
