import "../styles/contacto.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const FormContacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6sj8mkr", "template_lfqndgh", form.current, {
        publicKey: "kwp3RYtIV1qHMsNOP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contacto" className="contacto">
      <div className="contenido-seccion">
        <h2 id="con">CONTACTO</h2>
        <div className="fila">
          <form ref={form} onSubmit={sendEmail} className="form-col">
            <div className="col">
              <input
                type="text"
                name="user_name"
                placeholder="Nombre"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Dirección de correo"
                required
              />
              <input
                type="text"
                placeholder="Mensaje"
                name="message"
                required
              />
              <button>
                Enviar Mensaje<i className="fa-solid fa-paper-plane"></i>
                <span className="overlay"></span>
              </button>
            </div>
          </form>
          <div className="informacio">
            <div className="info">
              <ul>
                <li>
                  <i className="texto"></i>
                  📍Costa Rica
                </li>
                <li>
                  <i className="texto"></i>
                  📞 +506 8305-0615
                </li>
                <li>
                  <i className="texto"></i>
                  📧 damriver@hotmail.es
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormContacto;
