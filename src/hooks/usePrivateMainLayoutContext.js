import { useContext } from "react";
import PrivateMainLayoutContext from "../components/layouts/PrivateMainLayout/context/PrivateMainLayoutContext";

const usePrivateMainLayoutContext = () => {
  const context = useContext(PrivateMainLayoutContext);
  if (context) {
    throw new Error("No se puede acceder al contexto de PrivateMainLayout");
  }
  const { title, subtitle, changeTitle, changeSubtitle } = context;
  return { title, subtitle, changeTitle, changeSubtitle };
};

export { usePrivateMainLayoutContext };
