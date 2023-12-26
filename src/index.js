import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import GlobalStyles from "./utils/GlobalStyled";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter basename="">
        <App />
      </HashRouter>
      <GlobalStyles />
    </ThemeProvider>
  </Provider>
);
