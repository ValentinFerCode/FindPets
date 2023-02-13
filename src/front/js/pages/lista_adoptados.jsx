import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Lista_adoptados } from "../component/animal_adoptado.jsx";

export const List_adopt = () => {
  // const { store, actions } = useContext(Context);

  return (
    <>
      <div className="nav justify-content-center m-2">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <Link to="/lista_encontrados">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="encontrados-tab"
                data-toggle="tab"
                href="#encontrados"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              > 
                <i className="fa fa-paw"></i> <strong>Pets Lost</strong>
              </a>
            </li>
          </Link>
          <Link to="/lista_adoptados">
            <li className="nav-item ">
              <a
                className="nav-link active"
                id="adoptados-tab"
                data-toggle="tab"
                href="#adoptados"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                <i className="fa fa-paw"></i> <strong>Pets For Adoption</strong>
              </a>
            </li>
          </Link>
        </ul>
      </div>
      <div className="my-4 scrollable">
        <Lista_adoptados />
      </div>
    </>
  );
};
