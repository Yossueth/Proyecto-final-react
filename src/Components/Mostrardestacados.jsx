import React, { useEffect, useState } from "react";
import { getDestacados } from "../Services/destacados";
import "../styles/destacados.css"

const Mostrardestacados = () => {
  const [destacados, setDestacados] = useState([]);

  const destacaerProductos = async () => {
    const data = await getDestacados();
    setDestacados(data);
  };

  useEffect(() => {
    destacaerProductos();
  }, []);

  return (
    <div>
      <h1 id="listaProductos2">Productos Destacados</h1>
      <div id="container">
        {destacados.map((showDestacados) => (
          <div id="productos" key={showDestacados.id}>
            <div id="cardContainer">
              <div id="imagen">
                <img src={showDestacados.imagen} alt={showDestacados.nombre} />
              </div>
              <div id="nombre">{showDestacados.nombre}</div>
              <div id="precio">₡{showDestacados.precio}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mostrardestacados;
