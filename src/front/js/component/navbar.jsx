import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { useNavigate, Navigate } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    actions.getOneUser(store.userSession.id);
  }, []);

  function handleLogout() {
    actions.logout(); //cerrar la sesion
    navigate("/"); //usamos navigate para redireccionar
  }

  return (
    <nav className="navbar navbar-expand-lg " >
      <div className="container-fluid">
        <Link to="/" style={{ textDecoration: "none" }}>
          {/* <span className="navbar-brand mb-0 h1 text-white fs-2"> */}
            <img src="https://i.imgur.com/tkKWUot.png" className="logo-pagina"/>
            {/* FindPets
            <i className="fa fa-paw mx-1"></i>
          </span> */}
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item fs-6">
              <Link to="/listas" style={{ textDecoration: "none" }}>
                <span className="text-white m-2">Lista de Mascotas</span>
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
                  Iniciar sesión
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
                  Registro
                </button>
              </Link>
            ) : null}
            {store.auth === true ? (
              <div className="dropdown d-flex float-end">
                <button
                  className="btn btn-light rounded-pill btn-lg dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-plus-circle mx-2"></i>
                  Postear
                </button>
                <ul className="dropdown-menu">
                  <Link to={"/formencontrado"}>
                    <button className="dropdown-item float-start">
                      Mascota Perdida
                    </button>
                  </Link>
                  <Link to={"/formadoptar"}>
                    <button className="dropdown-item float-start">
                      Mascota para Adoptar
                    </button>
                  </Link>
                </ul>
              </div>
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
                  <Link to={"/perfil"}>
                    <button className="dropdown-item float-start">
                      Mi cuenta
                    </button>
                  </Link>
                  <button
                    className="dropdown-item float-start text-danger"
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </button>
                </ul>
              </div>
            ) : null}
          </form>
          {/* MODO-DARK */}
          {/* <label className="switch m-2">
            <input type="checkbox" ></input>
            <span className="check"></span> 
          </label> */}
        </div>
      </div>
    </nav>
  );
};
