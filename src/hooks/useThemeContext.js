import { useContext } from "react";
import { AppThemeContext } from "../contexts/themeContext";

const useThemeContext = () => {
  const context = useContext(AppThemeContext);
  if (!context) {
    throw new Error(
      "No puede acceder al contexto para el cambio de theme de la aplicación"
    );
  }
  return { theme: context.theme, changeTheme: context.changeTheme };
};

export { useThemeContext };
