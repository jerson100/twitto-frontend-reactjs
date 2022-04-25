import AppRouter from "./components/routers/AppRouter/AppRouter";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useState } from "react";
import { THEME } from "./configs/style";
import { AuthProvider } from "./contexts/authContext";

const GlobalStyle = createGlobalStyle`
  *::before, *::after, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: ${({
      theme: {
        COLORS: { BACKGROUND: BG },
      },
    }) => BG};  
    color: ${({
      theme: {
        COLORS: { PRIMARY },
      },
    }) => PRIMARY};
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
  }
`;

function App() {
  const [theme, settheme] = useState("DARK_NIGHT");

  return (
    <>
      <ThemeProvider theme={{ ...THEME, COLORS: THEME.COLORS[theme] }}>
        <GlobalStyle />
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
