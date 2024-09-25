import React, { useEffect, useState, useCallback } from "react";
import { getDestacados } from "../Services/destacados";
import "../styles/destacados.css";

const CardDestacados = () => {
  const [destacados, setDestacados] = useState([]); // Estado para almacenar productos destacados.

  // Funcion para obtener productos desde el servidor.
  const destacaerProductos = useCallback(() => {
    const fetchDestacados = async () => {
      try {
        const response = await getDestacados(); // Llama a la función que obtiene los productos.
        setDestacados(response); // Actualiza el estado con los productos obtenidos.
      } catch (error) {
        console.error("Error fetching Products", error); // Manejo de errores.
      }
    };
    fetchDestacados();
  });
  // Hook que se ejecuta al montar el componente y cuando cambia traerProductosAdmin.
  useEffect(() => destacaerProductos(), [destacaerProductos]);

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
