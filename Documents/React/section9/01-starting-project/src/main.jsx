import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  //StrictMode is a tool for highlighting potential problems in an application. It causes a component to render twice in development mode.
  //Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
