import { createContext, useCallback, useEffect, useState } from "react";
import { THEMES } from "../configs/style";

const AppThemeContext = createContext();

const AppThemeProvider = ({ children }) => {
  //   const [theme, settheme] = useState("DEFAULT");
  const [theme, settheme] = useState("LIGHT_NIGHT");
  //   const [theme, settheme] = useState("DARK_NIGHT");
  useEffect(() => {
    const theme_storage = localStorage.getItem("THEME");
    settheme(THEMES[theme_storage] || "LIGHT_NIGHT");
  }, []);

  useEffect(() => {
    localStorage.setItem("THEME", theme);
  }, [theme]);

  const changeTheme = useCallback(
    (newTheme) => {
      settheme(newTheme);
    },
    [settheme]
  );
  return (
    <AppThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
};

export { AppThemeContext, AppThemeProvider };
