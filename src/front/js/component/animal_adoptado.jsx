import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Animal_adoptados = (props) => {
  console.log(props);
  const { store, actions } = useContext(Context);
  console.log(store.adopt);
  return (
    <>
      {store.adopt.map((item, id) => (
        <div key={id} className="container">
          <Link
            to={"/mascota/" + item.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="jumbotron listPet m-4 shadow-lg bg-body-tertiary rounded">
              <div className="rounded border border-primary">
                <div className="row ">
                  <div className="col-md-2 border-end border-primary">
                    <img src={item.url} />
                  </div>
                  <div className="col-md-6 m-auto mx-3">
                    {/*  */}
                    <div className="container text-start mx-auto">
                      <div className="row g-2 justify-content-end me-2">
                        <div className="col-6">
                          <div className="p-3">
                            <strong>Género:</strong> {item.genero}
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-3">
                            <strong>Tamaño:</strong> {item.tamaño}
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-3">
                            <strong>Color:</strong> {item.color}
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-3">
                            <strong>Edad:</strong> {item.edad}
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-3">
                            <strong>Raza:</strong> {item.raza}
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-3">
                            <strong>Especie:</strong> {item.especie}
                          </div>
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
