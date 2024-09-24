import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getUsers } from "../Services/users";
import "../styles/login.css";
import Swal from "sweetalert2";

const FormLogin = () => {
  // Estado para almacenar el correo y la contraseña del usuario.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Inicializa el almacenamiento local para la autenticación.
  localStorage.setItem("Admin", false);
  localStorage.setItem("Autenticado", false);

  const navigate = useNavigate(); // Inicializa el hook para la navegación.

  // Funcion que maneja el envio del formulario.
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario.

    const userList = await getUsers(); // Obtiene la lista de usuarios.

    // Busca un usuario que coincida con el correo y la contraseña ingresados.
    const validUsers = userList.find(
      (user) => user.email === email && user.password === password
    );

    // Si no se encuentra un usuario válido, muestra un mensaje de error.
    if (!validUsers) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El correo o contraseña son incorrectos!",
      });
      return; // Sale de la función.
    }

    // Si el usuario es un administrador, lo redirige a la pagina de administracion.
    if (email.includes("@admin")) {
      Swal.fire("Bienvenid@ Admin!");
      localStorage.setItem("Admin", true); // Marca al usuario como administrador en el almacenamiento local.
      navigate("/administracion"); // Redirige a la pagina de administracion.
    } else {
      // Si es un usuario normal, lo redirige a la pagina de inicio.
      Swal.fire("Inicio de sesión exitoso!");
      localStorage.setItem("Autenticado", true); // Marca al usuario como autenticado en el almacenamiento local.
      navigate("/home"); // Redirige a la pagina de inicio.
      return;
    }
  };

  return (
    <section>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} id="signupForm">
          <label>Email</label>
          <input
            id="email"
            type="email"
            placeholder="Ingrese un email" // Placeholder del input.
            value={email} // Valor del input de correo.
            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado con el correo ingresado.
            required // Campo requerido.
          />
          <label>Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Ingrese una contraseña" // Placeholder del input.
            value={password} // Valor del input de contraseña.
            onChange={(e) => setPassword(e.target.value)} // Actualiza el estado con la contraseña ingresada.
            required // Campo requerido.
          />
          <input type="submit" value="Iniciar sesión" />
          <p>
            ¿Ya tienes una cuenta? <Link to="/sigup">Registro</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default FormLogin;
