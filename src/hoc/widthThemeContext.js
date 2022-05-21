import { AppThemeProvider } from "../contexts/themeContext";

const widthThemeContext =
  (Component) =>
  (...props) =>
    (
      <AppThemeProvider>
        <Component {...props} />
      </AppThemeProvider>
    );

export { widthThemeContext };
