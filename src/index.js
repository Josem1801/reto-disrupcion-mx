import React from "react";
import ReactDOM from "react-dom";
import Home from "./views/Home";
import "./scss/main.css";
import GlobalProvider from "./contexts/GlobalProvider";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
