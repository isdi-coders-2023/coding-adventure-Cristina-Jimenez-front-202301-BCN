import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/saira-stencil-one";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./styles/mainTheme/mainTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
