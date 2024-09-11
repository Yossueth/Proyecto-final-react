import { Link, useNavigate } from "react-router-dom";
import { getProducts } from "../Services/productos";
import { postProducts } from "../Services/productos";
import { useState } from "react";
import "../styles/sigup.css"


const FormRegistro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [alertError, setAlertError] = useState("");
  const [alerta, setAlerta] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userList = await getProducts();
    const userRegister = userList.find((user) => user.email === email);

    if (userRegister) {
      setAlertError(
        "Un usuario con esa dirección de correo electrónico ya está registrado 😭"
      );
      return;
    }

    const objectUsers = {
      name: name,
      email: email,
      password: password,
    };

    await postProducts(objectUsers);
    setAlerta("Registro exitoso 👌");
    navigate("/");
  };

  return (
    <div>
      <section className="section">
        <h2>Registro</h2>
        <form id="signupForm" onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Ingrese su Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Ingrese un email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese una contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Registro" />
          {alertError && <p id="error">{alertError}</p>}
          {alerta && <p id="alerta">{alerta}</p>}
          <p id="cambio">
            Ya tienes una cuenta? <Link to="/">Login</Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default FormRegistro;
