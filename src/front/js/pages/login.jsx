import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import "../../styles/home.css";
import { Link, Navigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function userLogin(e) {
    e.preventDefault();
    if (username == "" && password == "") {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "¡Faltan datos por completar!",
      });
    } else {
      actions.login(username, password);
      setUsername("");
      setPassword("");
    }
  }

  return (
    <>
      {store.auth === true ? (
        <Navigate to="/" />
      ) : (
        <div
          className="mx-auto w-50 card text-center m-4 border border-primary rounded-2 border border-2 "
          style={{ background: "white" }}
        >
          <div className="login m-2">
            <h1 className="text-center ">
              <strong>Iniciar sesión</strong>
            </h1>
            <hr style={{ background: "blue" }}></hr>
          </div>
          <form onSubmit={userLogin}>
            <div className="col col-6 mx-auto">
              <div>
                <h5 className="m-2  text-black ">
                  <b>
                    <i className="fa fa-user"></i> Nombre de usuario
                  </b>
                </h5>
                <input
                  type="text"
                  id="inputusuario"
                  className="form-control border border-secondary rounded-pill"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  pattern="^[a-zA-Z0-9.]*$"
                  required
                />
              </div>
            </div>
            <div className="row g-3 align-items-center">
              <div className="col-auto mx-auto">
                <h5 className="m-2 text-black">
                  <b>
                    <i className="fa fa-lock"></i> Contraseña
                  </b>
                </h5>
                <div className="col-auto">
                  <input
                    type="password"
                    id="inputPassword6"
                    className="form-control border border-secondary rounded-pill"
                    aria-describedby="passwordHelpInline"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="col-auto">
                  <span
                    id="passwordHelpInline"
                    className="form-text text-black"
                  ></span>
                </div>
              </div>
            </div>
            <div className="mx-auto m-4">
              <Link to="/recuperacion_clave">
                <button type="submit" className="buttonClassContraseña m-2">
                  Olvidé mi contraseña
                </button>
              </Link>
              <button type="submit" className="buttonClassIngresar">
                Ingresar
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
