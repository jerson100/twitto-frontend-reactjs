import { createContext, useCallback, useState } from "react";

const AppThemeContext = createContext();

const AppThemeProvider = ({ children }) => {
  //   const [theme, settheme] = useState("DEFAULT");
  const [theme, settheme] = useState("LIGHT_NIGHT");
  //   const [theme, settheme] = useState("DARK_NIGHT");
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
