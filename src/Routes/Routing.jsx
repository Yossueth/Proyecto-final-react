import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import SigUp from "../pages/SigUp";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedAdmin from "./ProtectedAdmin";
import Home from "../Pages/Home";
import Administracion from "../Pages/Administracion";
import Contacto from "../Pages/Contacto";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
        <Route path="/SigUp" element={<SigUp />} />
        <Route path="/Administracion" element={<ProtectedAdmin><Administracion /></ProtectedAdmin>}/>
        <Route path="/contacto" element= {<Contacto/>}></Route>
      </Routes>
    </Router>
  );
};

export default Rutas;
