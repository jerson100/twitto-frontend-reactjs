import { useContext } from "react";
import modalContext from "../contexts/modalContext";

const useModalContext = () => {
  const context = useContext(modalContext);
  if (!context) {
    throw new Error("No se puede acceder al contexto del modalContext");
  }
  return context;
};

export default useModalContext;
