import React from "react";
import ReactDOM from "react-dom/client";
import SimpleCalculator from "./SimpleCalculator";
import "./index.css"; // optional, OK if it exists empty

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SimpleCalculator />
  </React.StrictMode>
);