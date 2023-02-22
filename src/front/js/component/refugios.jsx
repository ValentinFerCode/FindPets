import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const RefugiosList = (props) => {
  const { store, actions } = useContext(Context);
  //
  return (
    <>
      {store.refugios.map((item, id) => (
        <div key={id} className="container">
          <Link
            to={"/refugio/" + item.id}
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
                            <strong>Nombre del refugio: </strong> {item.empresa}
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
