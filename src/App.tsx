import React, { useState } from "react";
import "./App.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import MyRoutes from "./routes";
import { NewsProvider } from "./hooks/news";
import { darkTheme, lightTheme } from "./styles/theme";
import { IColors } from "./interfaces/interfaces";
import { ThemeProvider as AppThemeProvider, useTheme } from "./hooks/theme";

interface IProps {
  theme: IColors;
}

const GlobalStyle = createGlobalStyle<IProps>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <AppThemeProvider>
          <GlobalStyle />
          <div className="App">
            <NewsProvider>
              <MyRoutes toggleTheme={toggleTheme} />
            </NewsProvider>
          </div>
        </AppThemeProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
