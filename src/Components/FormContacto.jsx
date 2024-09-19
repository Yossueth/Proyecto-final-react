import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contacto.css";

export const FormContacto = () => {
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
    <form ref={form} onSubmit={sendEmail} id="form-contacto">
      <h1 id="title">Contacto</h1>
      <label htmlFor="user_name" id="label-name">
        Nombre
      </label>
      <input type="text" name="user_name" id="input-name" required />

      <label htmlFor="user_email" id="label-email">
        Correo electrónico
      </label>
      <input type="email" name="user_email" id="input-email" required />

      <label htmlFor="message" id="label-message">
        Mensaje
      </label>
      <textarea name="message" id="textarea-message" required />

      <input type="submit" value="Enviar Mensaje" id="input-submit" />

      <div className="col" id="contact-info">
        <div className="info" id="info-list">
          <ul>
            <li id="info-location">
              <i className="texto"></i> 📍Costa Rica
            </li>
            <li id="info-phone">
              <i className="texto"></i> 📞 +506 8305-0615
            </li>
            <li id="info-email">
              <i className="texto"></i> 📧 damriver@hotmail.es
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
};
