import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700-italic.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/jetbrains-mono/400.css";

import "./styles.css";
import App from "./App";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);