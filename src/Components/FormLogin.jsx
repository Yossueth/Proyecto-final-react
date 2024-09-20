import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getUsers } from "../Services/users";
import "../styles/login.css";
import Swal from "sweetalert2";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  localStorage.setItem("Admin", false);
  localStorage.setItem("Autenticado", false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userList = await getUsers();
    const validUsers = userList.find(
      (user) => user.email === email && user.password === password
    );

    if (!validUsers) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El correo o contraseña son incorrectos!",
      });
      return;
    }
    if (email.includes("@admin")) {
      Swal.fire("Bienvenid@ Admin!");
      localStorage.setItem("Admin", true);
      navigate("/administracion");
    } else {
      Swal.fire("Inicio de sesión exitoso!");
      localStorage.setItem("Autenticado", true);
      navigate("/home");
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
            placeholder="Ingrese un email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Contraseña</label>
          <input
          id="password"
            type="password"
            placeholder="Ingrese una contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
