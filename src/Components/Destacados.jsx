import { useState } from "react";
import { getDestacados, deleteDestacados } from "../Services/destacados";
import { useEffect } from "react";

export const Destacados = () => {
  const [destacados, setDestacados] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const abrirModal = () => setModalVisible(true);
  const cerrarModal = () => setModalVisible(false);

  const destacaerProductos = async () => {
    const data = await getDestacados();
    setDestacados(data);
  };
  useEffect(() => {
    destacaerProductos();
  }, []);

  const eliminar = async (id) => {
    await deleteDestacados(id);
    deleteDestacados();
  };
  return (
    <div>
      <p id="btnAbrirModalDestacados" onClick={abrirModal}>
        Destacados
      </p>

      {modalVisible && (
        <dialog id="modalDestacados" open>
          <p id="cerrarModalDestacados" onClick={cerrarModal}>
            𝐗
          </p>
          <div id="container">
            {destacados.map((showDestacados) => (
              <div id="productos" key={showDestacados.id}>
                <div id="cardContainer">
                  <div id="imagen">
                    <img
                      src={showDestacados.imagen}
                      alt={showDestacados.nombre}
                    />
                  </div>
                  <div id="nombre">{showDestacados.nombre}</div>
                  <div id="precio">₡{showDestacados.precio}</div>
                </div>
                <button onClick={() => eliminar(showDestacados.id)}>
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </dialog>
      )}
    </div>
  );
};
