import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
