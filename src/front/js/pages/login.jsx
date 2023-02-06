import React from "react";
import "../../styles/home.css";

export const Login = () => {
  return (
    <>
      <div
        className="mx-auto w-50 card text-center m-4 border border-dark rounded-4 border border-4 "
        style={{ background: "#CDF0EA" }}
      >
        <div
          className="m-4 border border-dark rounded-4 border border-4 rounded-pill text-white"
          style={{ background: "#085F63" }}
        >
          <h1 className="text-center "><strong>LOGIN</strong></h1>
        </div>
        <form>
          <div className="col col-6 mx-auto">
            <div>
              <h5
                className="m-2 border border-dark rounded-4 border border-4 rounded-pill text-white "
                style={{ background: "#085F63" }}
              >
                <b>Email</b>
              </h5>
              <input
                type="email"
                className="form-control border border-dark rounded-pill text-white"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div>
                <h5
                  className="m-2 border border-dark rounded-4 border border-4 rounded-pill text-white"
                  style={{ background: "#085F63" }}
                >
                  <b>Nombre de usuario</b>
                </h5>
                <input
                  type="text"
                  className="form-control border border-dark rounded-pill"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
          </div>
          <div className="row g-3 align-items-center">
            <div className="col-auto mx-auto">
              <h5
                className="m-2 border border-dark rounded-4 border border-4 rounded-pill text-white"
                style={{ background: "#085F63" }}
              >
                <b>Password</b>
              </h5>
              <div className="col-auto">
                <input
                  type="password"
                  id="inputPassword6"
                  className="form-control border border-dark rounded-pill"
                  aria-describedby="passwordHelpInline"
                />
              </div>
              <div className="col-auto">
                <span id="passwordHelpInline" className="form-text">
                  <strong>Must be 8-20 characters long.</strong>
                </span>
              </div>
            </div>
          </div>
          <div className="mx-auto m-4">
            <button type="submit" className="btn btn-outline-light" style={{background:"#085F63"}}>
              <b>Olvidé mi contraseña</b>
            </button>
            <button type="submit" className="btn btn-outline-light" style={{background:"#085F63"}}>
              <b>Ingresar</b>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
