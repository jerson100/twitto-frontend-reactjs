import AppRouter from "./components/routers/AppRouter/AppRouter";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useState } from "react";
import { THEME } from "./configs/style";

const GlobalStyle = createGlobalStyle`
  *::before, *::after, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  const [theme, settheme] = useState("DEFAULT");

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={THEME[theme]}>
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
