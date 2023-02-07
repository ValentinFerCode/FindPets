import React from "react";

export const Recuperacion_clave = () => {
  return (
    <div
      className="mx-auto justify-content-center d-flex"
      style={{ backgroundColor: "sandybrown" }}
    >
      <form>
        <div className="col col-8 mx-auto mb-3">
          <h5 className="text-center">
            Nombre de usuario o Correo electrónico
          </h5>

          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            style={{ width: "200px", heigth: "30px", fontSize: "16px" }}
          />
          {/* <div id="emailHelp" className="form-text"> */}
          {/* We'll never share your email with anyone else. */}
          {/* </div> */}
        </div>
        <div className="col col-8 mx-auto mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            <h5 className="text-center">Nueva contraseña</h5>
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            style={{ width: "200px", heigth: "30px", fontSize: "16px" }}
          />
        </div>
        <div className="mx-auto justify-content-center d-flex">
          <button
            type="submit"
            className="btn btn-outline-dark"
            style={{ width: "70px", heigth: "15px", fontSize: "10px" }}
          >
            <b>Ingresar</b>
          </button>
        </div>
      </form>
    </div>
  );
};
