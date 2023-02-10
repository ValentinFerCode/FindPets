import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Lista_encontrados = (props) => {
  console.log(props);
  const { store, actions } = useContext(Context);
  console.log(store.petslost);
  return (
    <>
      {store.petslost.map((item, id) => (
        <div key={id} className="container">
          <Link
            to={"/mascota/" + item.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="jumbotron listPet m-4 shadow-lg bg-body-tertiary rounded">
              <div className="rounded border border-danger">
                <div className="row ">
                  <div className="col-md-2 border-end border-danger">
                    <img src={item.url} />
                  </div>
                  <div className="col-md-6 m-auto mx-3">
                    {/*  */}
                    <div className="container text-start mx-auto">
                      <div className="row g-2 justify-content-end me-2">
                        <div className="col-6">
                          <div className="p-3">Género: {item.genero}</div>
                        </div>
                        <div className="col-6">
                          <div className="p-3">Tamaño: {item.tamaño}</div>
                        </div>
                        <div className="col-6">
                          <div className="p-3">Color: {item.color}</div>
                        </div>
                        <div className="col-6">
                          <div className="p-3">Edad: {item.edad}</div>
                        </div>
                        <div className="col-6">
                          <div className="p-3">Raza: {item.raza}</div>
                        </div>
                        <div className="col-6">
                          <div className="p-3">Especie: {item.especie}</div>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Lista_encontrados;
