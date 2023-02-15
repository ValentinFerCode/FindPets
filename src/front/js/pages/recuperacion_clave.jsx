import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import "../../styles/home.css";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Recuperacion_clave = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");

  function forgotPassword(e) {
    e.preventDefault();
    if (email === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Faltan datos por completar!",
      });
    } else {
      actions.forgotPassword(email);
      setEmail("");
    }
  }

  return (
    <>
      <div className="mx-auto m-4 w-25 p-3 card-text-center border border-danger">
        <div className="mt-3 d-flex justify-content-center">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/30/10/40/key-1013662_960_720.jpg"
            alt="..."
            style={{ maxWidth: "200px" }}
          />
        </div>
        <div className="m-auto w-75 h-25 py-4">
          <div className="d-flex align-content-center text-danger fs-6">
            <b>RECUPERACIÓN DE CONTRASEÑA</b>
          </div>
          <div className="h4 pb-2 mb-4 text-danger border-bottom border-danger"></div>
          <form onSubmit={forgotPassword}>
            <div>
              <label
                htmlFor="exampleInputEmail1"
                className="form-label my-3 d-flex justify-content-center"
              >
                {/* <i className="fa fa-envelope m-1"></i> */}
                Dirección de correo electrónico
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div className="mt-5 d-flex justify-content-center">
              <button type="submit" className="btn btn-danger btn-sm">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
