import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import theme from "./lib/theme/theme";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
