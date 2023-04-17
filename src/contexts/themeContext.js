import { createContext, useCallback, useEffect, useReducer } from "react";
import { COLORS, THEMES, THIRD_COLORS } from "../configs/style";
import {
  INITIAL_THEME_STATE,
  themeReducer,
  THEME_ACTIONS,
} from "../reducers/themeReducer";

const AppThemeContext = createContext();

const AppThemeProvider = ({ children }) => {
  //   const [theme, settheme] = useState("DEFAULT");
  //   const [theme, settheme] = useState("LIGHT_NIGHT");
  const [data, dispatch] = useReducer(themeReducer, INITIAL_THEME_STATE);
  //   const [theme, settheme] = useState("DARK_NIGHT");
  useEffect(() => {
    const theme_storage = localStorage.getItem("THEME");
    const thrid_color_storage = localStorage.getItem("THRID_COLOR");
    // settheme(THEMES[theme_storage] || "LIGHT_NIGHT");
    dispatch({
      type: THEME_ACTIONS.SET_THRID_COLOR,
      payload:
        THIRD_COLORS.find((c) => c === thrid_color_storage) || COLORS.BLUE,
    });
    dispatch({
      type: THEME_ACTIONS.SET_THEME,
      payload: THEMES[theme_storage] || "LIGHT_NIGHT",
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("THEME", data.theme);
  }, [data.theme]);

  useEffect(() => {
    localStorage.setItem("THRID_COLOR", data.third_color);
  }, [data.third_color]);

  const changeTheme = useCallback((newTheme) => {
    //   settheme(newTheme);
    dispatch({
      type: THEME_ACTIONS.SET_THEME,
      payload: newTheme,
    });
  }, []);

  const changeThirdColor = useCallback((newColor) => {
    //   settheme(newTheme);
    dispatch({
      type: THEME_ACTIONS.SET_THRID_COLOR,
      payload: newColor,
    });
  }, []);
  return (
    <AppThemeContext.Provider
      value={{
        theme: data.theme,
        third_color: data.third_color,
        font: data.font,
        changeTheme,
        changeThirdColor,
      }}
    >
      {children}
    </AppThemeContext.Provider>
  );
};

export { AppThemeContext, AppThemeProvider };
