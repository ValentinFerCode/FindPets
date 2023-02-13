import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Animal_encontrado } from "../component/animal_encontrado.jsx";
import "../../styles/home.css";

export const Lista_encontrados = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="my-4 scrollable">
      <Animal_encontrado />
    </div>
  );
};
