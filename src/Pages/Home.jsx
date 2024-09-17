import ComHome from "../Components/ComHome";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { getProducts } from "../Services/productos";
import { useEffect, useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [productos, setProductos] = useState([]);

  // Fetch products from API
  const traerProductos = async () => {
    const dataProductos = await getProducts();
    setProductos(dataProductos);
  };

  useEffect(() => {
    traerProductos();
  }, []);

  // Handle search input changes
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  // Filter products based on search input
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
      <ComHome filtrar={results} />
      <Footer />
    </div>
  );
};

export default Home;
