import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { useNavigate, Navigate } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  function handleLogout() {
    actions.logout(); //cerrar la sesion
    navigate("/"); //usamos navigate para redireccionar
  }

  return (
    <nav className="navbar navbar-expand-lg bg-danger">
      <div className="container-fluid">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="navbar-brand mb-0 h1 text-white fs-2">
            FindPets
            <i className="fa fa-paw mx-1"></i>
          </span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item fs-5">
              <Link to="/lista_encontrados" style={{ textDecoration: "none" }}>
                <span className="text-white">Mascotas</span>
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            {store.auth === false ? (
              <Link to="/login">
                <button
                  type="button"
                  className="btn btn-outline-light mx-3 rounded-pill btn-lg"
                >
                  <i className="fa fa-sign-in-alt mx-2"></i>
                  Log In
                </button>
              </Link>
            ) : null}
            {store.auth === false ? (
              <Link to="/register">
                <button
                  type="button"
                  className="btn btn-light rounded-pill btn-lg"
                >
                  <i className="fa fa-user-plus mx-2"></i>
                  Sign Up
                </button>
              </Link>
            ) : null}

            {store.auth === true ? (
              <Link to="/formencontrado">
                <button className="btn btn-light rounded-pill btn-lg">
                  <i className="fa fa-plus-circle mx-2"></i>
                  Postear
                </button>
              </Link>
            ) : null}

            {store.auth === true ? (
              <div className="dropdown d-flex float-end mx-3">
                <button
                  className="btn btn-outline-light btn-lg rounded-pill dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-user mx-2"></i>
                  {store.userSession.nombre}
                </button>
                <ul className="dropdown-menu">
                  <li className="dropdown-item float-start">Account</li>

                  <button
                    className="dropdown-item float-start text-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </ul>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </nav>
  );
};
