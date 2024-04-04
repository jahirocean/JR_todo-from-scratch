import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import "./App.scss";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
