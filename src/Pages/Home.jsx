import ComHome from "../Components/ComHome"; 
import Navbar from "../Components/Navbar"; 
import Footer from "../Components/Footer"; 
import { getProducts } from "../Services/productos"; 
import { useEffect, useState } from "react"; 
import CardDestacados from "../Components/CardDestacados"; 

const Home = () => {
  // Hooks de estado para gestionar el estado del componente
  const [search, setSearch] = useState(""); // Estado para la entrada de búsqueda
  const [productos, setProductos] = useState([]); // Estado para almacenar los productos obtenidos
  const [searchActivo, setSearchActivo] = useState(false); // Estado para determinar si la búsqueda está activa

  // Funcion para obtener productos del servicio
  const traerProductos = async () => {
    const dataProductos = await getProducts(); // Esperar la llamada para obtener los productos
    setProductos(dataProductos); // Actualizar el estado con los productos obtenidos
  };

  // useEffect para obtener productos al montar el componente
  useEffect(() => {
    traerProductos(); // Llamar a la función de obtencion
  }, []); // La lista de dependencias vacía significa que esto se ejecuta una vez al montar el componente

  // useEffect para actualizar el estado de búsqueda cuando cambia la entrada
  useEffect(() => {
    setSearchActivo(search !== ""); // Actualizar searchActivo basado en la entrada de búsqueda
  }, [search]); // Dependencia de search, se activa cuando cambia la busqueda

  // Funcion para manejar los cambios en la entrada de busqueda
  const searcher = (e) => {
    setSearch(e.target.value); // Actualizar el estado de busqueda con el valor actual de la entrada
  };

  // Funcion para filtrar productos basados en la entrada de busqueda
  const results = () => {
    return !search
      ? productos // Si no hay entrada de busqueda, devolver todos los productos
      : productos.filter((dato) => // Filtrar productos basados en la entrada de busqueda
          dato.nombre.toLowerCase().includes(search.toLowerCase()) // Coincidencia sin distinción entre mayusculas y minusculas
        );
  };


  return (
    <div>
      <Navbar Filtro={searcher} /> {/* Renderizar la barra de navegación con el manejador de búsqueda */}
      {searchActivo ? ( // Renderizado condicional basado en la actividad de búsqueda
        <ComHome filtrar={results} /> // Renderizar ComHome con los resultados filtrados
      ) : (
        <>
          <CardDestacados /> 
          <ComHome filtrar={results} /> 
        </>
      )}
      <Footer />
    </div>
  );
};

export default Home; 
