import ComHome from "../Components/ComHome";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { getProducts } from "../Services/productos";
import { useEffect, useState } from "react";
import CardDestacados from "../Components/CardDestacados";

const Home = () => {
  const [search, setSearch] = useState("");
  const [productos, setProductos] = useState([]);
  const [searchActivo, setSearchActivo] = useState(false);

  const traerProductos = async () => {
    const dataProductos = await getProducts();
    setProductos(dataProductos);
  };

  useEffect(() => {
    traerProductos();
  }, []);

  useEffect(() => {
    setSearchActivo(search !== "");
  }, [search]);

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const results = () => {
    return !search
      ? productos
      : productos.filter((dato) =>
          dato.nombre.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div>
      <Navbar Filtro={searcher} />
      {searchActivo ? (
        <ComHome filtrar={results} />
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
