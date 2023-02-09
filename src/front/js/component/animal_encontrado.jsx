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
          <div className="jumbotron listPet m-4 shadow-lg bg-body-tertiary rounded">
            <div className="rounded border border-danger">
              <div className="row ">
                <div className="col-md-2 border-end border-danger">
                  <img src={item.url} />
                </div>
                <div className="col-md-10">
                  <div className="mx-3 d-flex">
                    {/*  */}
                    <div>
                      <p className="">Género: {item.genero}</p>
                      <p className="">Tamaño: {item.tamaño}</p>
                      <p className="">Color: {item.color}</p>
                    </div>
                    <div>
                      <p className="">Edad: {item.edad}</p>
                      <p className="">Raza: {item.raza}</p>
                      <p className="">Especie: {item.especie}</p>
                    </div>

                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Lista_encontrados;
