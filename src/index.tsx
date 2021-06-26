import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/global.scss";
import "./services/firebase";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorkerRegistration.register();
