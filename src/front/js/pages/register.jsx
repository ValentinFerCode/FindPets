import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Register = () => {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  //

  function signup(e) {
    e.preventDefault();
    if (
      firstname != "" &&
      lastname != "" &&
      email != "" &&
      username != "" &&
      password != "" &&
      contact != ""
    ) {
      actions.signup(username, email, password, firstname, lastname, contact);
      setFirstname("");
      setLastname("");
      setEmail("");
      setUsername("");
      setPassword("");
      setContact("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Faltan datos por completar!",
      });
    }
  }

  return (
    <div className="container w-50 mb-5">
      <h1 className="text-center text-danger border-bottom border-danger">
        SIGN UP
      </h1>

      {store.auth === true ? (
        <Navigate to="/" />
      ) : (
        <form onSubmit={signup}>
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

            <div className="col-md-6 mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
              />
            </div>
          </div>

          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-lg btn-danger">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
