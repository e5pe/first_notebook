import React from "react";
import "../InputNotes/InputNotes";
import { InputNotes } from "../InputNotes/InputNotes";
import "./Notebook.scss";

export default function Notebook() {
  return (
    <div className="notebook">
      <h1>My notebook</h1>
      <p>¡Bienvenido a mi libreta! Aquí podrás escribir tus notas.</p>
      {<InputNotes />}
    </div>
  );
}
