import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";

import Notebook from "./components/Notebook/Notebook";

const rootElement = document.getElementById("root");
// Esta funcion permite a la aplicación renderizar componentes de forma asíncrona,
// en lugar de esperar a que se complete todo el árbol de elementos antes de que se muestre algo en la pantalla.
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Notebook />
  </React.StrictMode>
);
