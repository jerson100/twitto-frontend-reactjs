import AppRouter from "./components/routers/AppRouter/AppRouter";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useCallback, useState } from "react";
import { THEME } from "./configs/style";
import { AuthProvider } from "./contexts/authContext";
import { widthThemeContext } from "./hoc/widthThemeContext";
import { useThemeContext } from "./hooks/useThemeContext";

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
    font-size: 16px;
    line-height: 1.5;
  }
`;

function App() {
  const { theme } = useThemeContext();
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

export default widthThemeContext(App);
