import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import "../../styles/home.css";
import Swal from "sweetalert2";

export const Perfil = () => {
  const { store, actions } = useContext(Context);
  //
  const [username, setUsername] = useState(store.userSession.username);
  const [firstname, setFirstname] = useState(store.userSession.nombre);
  const [lastname, setLastname] = useState(store.userSession.apellido);
  const [email, setEmail] = useState(store.userSession.email);
  const [contact, setContact] = useState(store.userSession.contacto);
  //
  useEffect(() => {
    window.scrollTo(0, 0);
    actions.getPetsUser(store.userSession.id);
  }, []);

  //
  function updateUser(e) {
    e.preventDefault();
    Swal.fire({
      title: "<strong>HTML <u>example</u></strong>",
      icon: "info",
      html:
        '<label htmlFor="password" className="form-label">Password</label> ' +
        '<input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="password" />' +
        "and other HTML tags",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: "Thumbs down",
    });
    //
  }
  return (
    <div className="container-fluid w-75">
      {store.auth === false ? (
        <Navigate to="/" />
      ) : (
        <div className="jumbotron m-3">
          <div className="rounded border border-danger">
            <div className="m-2">
              {/* Boton Eliminar */}
              <button className="float-end btn btn-outline-dark border-0 mx-1">
                <i className="fa fa-trash-alt"></i>
              </button>
            </div>

            <h1 className="text-center text-danger border-bottom border-danger">
              PERFIL DEL USUARIO
            </h1>
            {/* TITULO */}
            <div className="container w-75 mx-auto my-3 ">
              <div className="row g-0 border-bottom border-danger">
                <form onSubmit={updateUser}>
                  <div className="form-group row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="firstname" className="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        id="firstname"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="lastname" className="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        id="lastname"
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        aria-describedby="emailHelp"
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="contact" className="form-label">
                        Contact
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        id="contact"
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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        id="username"
                      />
                    </div>
                  </div>

                  <div className="d-grid gap-2 col-6 mx-auto mb-4">
                    <button
                      type="submit"
                      className="btn btn-lg btn-danger"
                      disabled={
                        !(
                          username != store.userSession.username ||
                          firstname != store.userSession.nombre ||
                          lastname != store.userSession.apellido ||
                          email != store.userSession.email ||
                          contact != store.userSession.contacto
                        )
                      }
                    >
                      Actualizar Datos
                    </button>
                  </div>
                </form>
              </div>
              {/* Segunda Columna */}

              {store.petsUser != null ? (
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
              ) : null}

              {/*  */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Perfil.propTypes = {
  match: PropTypes.object,
};
