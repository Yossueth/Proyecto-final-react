import { Navigate } from "react-router-dom";

const ProtectedAdmin = ({ children }) => {
  const AutenticadoAdmin = localStorage.getItem("Admin") === "true";

  if (!AutenticadoAdmin) {
    return <Navigate to="/Home" />;
  }

  return <div>{children}</div>;
};
export default ProtectedAdmin;
