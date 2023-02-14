import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.css";

export const Perfil = () => {
  const { store, actions } = useContext(Context);

  //
  useEffect(() => {
    window.scrollTo(0, 0);
    actions.getPetsUser(store.userSession.id);
  }, []);

  return (
    <div className="container-fluid w-75">
      <div className="jumbotron m-3">
        <div className="rounded border border-danger">
          <h1 className="text-center text-danger border-bottom border-danger">
            PERFIL DEL USUARIO
          </h1>
          {/* TITULO */}
          <div className="container w-75 mx-auto my-3 ">
            <div className="row g-0 border-bottom border-danger">
              <div className="col-md-12">
                <div className="form-group row">
                  {/* Columna de Datos */}
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstname" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={store.userSession.nombre}
                      id="firstname"
                      readOnly
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastname" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={store.userSession.apellido}
                      id="lastname"
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      value={store.userSession.email}
                      id="email"
                      aria-describedby="emailHelp"
                      readOnly
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="contact" className="form-label">
                      Contact
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={store.userSession.contacto}
                      id="contact"
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={store.userSession.username}
                      id="username"
                      readOnly
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      value={store.userSession.password}
                      id="password"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Segunda Columna */}

            <div className="row g-0 scrollablePerfil ">
              <div className="col-md-12 ">
                <div className="d-flex">
                  {store.petsUser.map((item, id) => (
                    <div className="btn m-3 ms-0 rounded " key={id}>
                      <div
                        className="card listPerfil border-danger "
                        style={{ width: "10rem", height: "10rem" }}
                      >
                        <Link
                          style={{ textDecoration: "none" }}
                          to={"/mascota/" + item.id}
                        >
                          <div className="border-bottom border-danger">
                            <img
                              src={item.url}
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

Perfil.propTypes = {
  match: PropTypes.object,
};
