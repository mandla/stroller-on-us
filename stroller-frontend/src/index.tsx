import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRoutes from "./routes";
import { ThemeProvider } from "@mui/styles";
import theme from "./theme";
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
