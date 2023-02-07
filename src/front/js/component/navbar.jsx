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
    <nav className="navbar navbar-light bg-danger">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          {store.auth === false ? (
            <Link to="/register">
              <button className="btn btn-primary">Registrarse</button>
            </Link>
          ) : null}
          {store.auth === false ? (
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          ) : null}
          {store.auth === true ? (
            <Link to="/logout">
              <button className={"btn btn-info "} onClick={handleLogout}>
                <b>Logout</b>
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </nav>
  );
};
