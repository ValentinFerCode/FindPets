import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Register = () => {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [contacto, setContacto] = useState("");

  function userRegister(e) {
    e.preventDefault();
    actions.signup(username, email, password, nombre, apellido, contacto);
    setUsername("");
    setEmail("");
    setPassword("");
    setName("");
    setApellido("");
    setContacto("");
  }

  return (
    <>
      {store.auth === true ? (
        <Navigate to="/" />
      ) : (
        <div className="mx-auto w-50 card text-center m-4">
          <form onSubmit={userRegister}>
            <div className="col col-3 d-flex mx-auto">
              <div className>
                <h5>
                  <b>Nombre</b>
                </h5>
                {/* <label for="exampleInputEmail1" className="form-label">Email</label> */}
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  aria-describedby="emailHelp"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
            </div>
            <div className>
              <h5>
                <b>Apellido</b>
              </h5>
              <div className="col col-3 d-flex mx-auto">
                {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
                <input
                  type="text"
                  className="form-control"
                  id="apellido"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                />
              </div>
            </div>

            <div className="col col-3 d-flex mx-auto">
              <div className>
                <h5>
                  <b>Correo Electrónico</b>
                </h5>
                {/* <label for="exampleInputEmail1" className="form-label">Email</label> */}
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className>
              <h5>
                <b>Nombre de Usuario</b>
              </h5>
              <div className="col col-3 d-flex mx-auto">
                {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <h5>
                <strong>Contraseña</strong>
              </h5>
              <div className="col col-3 d-flex mx-auto">
                {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
                <input
                  type="password"
                  className="form-control"
                  id="contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="  d-flex mx-auto btn btn-warning "
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
