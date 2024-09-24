import React, { useEffect, useState } from "react";
import { getDestacados } from "../Services/destacados"; 
import "../styles/destacados.css"; 

const CardDestacados = () => {
  const [destacados, setDestacados] = useState([]); // Estado para almacenar productos destacados.

  // Función para obtener productos destacados del servidor.
  const destacaerProductos = async () => {
    const data = await getDestacados(); // Llama a la función que obtiene los destacados.
    setDestacados(data); // Actualiza el estado con los productos destacados obtenidos.
  };

  // Hook que se ejecuta al montar el componente para obtener los productos destacados.
  useEffect(() => {
    destacaerProductos(); // Llama a la funcion para obtener los destacados.
  }, []); // El array vacío asegura que se ejecute solo una vez al montar.

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

export default CardDestacados;
