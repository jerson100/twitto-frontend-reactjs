import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "No puede acceder al contexto de la autenticación del usurio"
    );
  }
  return context;
};

export { useAuth };
