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
  body{
    background-color: ${({ theme: { BACKGROUND: BG } }) => BG};
    color: ${({ theme: { PRIMARY: COLOR } }) => COLOR};
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
  }
`;

function App() {
  const [theme, settheme] = useState("LIGHT_NIGHT");

  return (
    <>
      <ThemeProvider theme={{ ...THEME, COLORS: THEME.COLORS[theme] }}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
