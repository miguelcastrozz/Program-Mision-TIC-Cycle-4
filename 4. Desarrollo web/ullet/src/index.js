import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

// Contenedor donde se implementara toda la aplicación
const container = document.getElementById("root")
// DOM de react crea raíz
const root = ReactDOM.createRoot(container)

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
