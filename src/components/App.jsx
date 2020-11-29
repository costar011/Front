import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
