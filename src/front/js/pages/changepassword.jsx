import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Navigate, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import Swal from "sweetalert2";

export const ChangePassword = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  //
  const [passUser, setPassUser] = useState(store.oneUser.password);
  const [passOld, setPassOld] = useState("");
  const [passNew, setPassNew] = useState("");
  const [passNewCheck, setPassNewCheck] = useState("");
  //
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //
  function updatePass(e) {
    e.preventDefault();
    Swal.fire({
      title: "¿Estás seguro/a?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, actualízalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (passOld != passUser) {
          Swal.fire({
            icon: "error",
            title: "Ups...",
            text: "¡La contraseña anterior no es correcta!",
          });
        } else if (passNew != passNewCheck) {
          Swal.fire({
            icon: "error",
            title: "Ups...",
            text: "¡Las contraseñas nuevas no coinciden!",
          });
        } else {
          actions.updatePassowrd(store.oneUser.id); // actualizamos la contraseña del usuario
          navigate("/perfil"); //usamos navigate para redireccionar
        }
      }
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
            <h1 className="mx-auto text-danger border-bottom border-danger">
              Cambiar contraseña
            </h1>
            {/* TITULO */}
            <div className="container w-75 mx-auto my-3 ">
              <form onSubmit={updatePass}>
                <div className="form-group row">
                  <div className="col-md-8 mb-3 mx-auto">
                    <label htmlFor="passold" className="form-label">
                      Contraseña anterior
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={passOld}
                      onChange={(e) => setPassOld(e.target.value)}
                      id="passold"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-8 mb-3 mx-auto">
                    <label htmlFor="passnew" className="form-label">
                      Contraseña nueva
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={passNew}
                      onChange={(e) => setPassNew(e.target.value)}
                      id="passnew"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-8 mb-3 mx-auto">
                    <label htmlFor="passnewcheck" className="form-label">
                      Repetir contraseña
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={passNewCheck}
                      onChange={(e) => setPassNewCheck(e.target.value)}
                      id="passnewcheck"
                    />
                  </div>
                </div>

                <div className="d-grid gap-2 col-6 mx-auto mb-4">
                  <button type="submit" className="btn btn-lg btn-danger">
                    Cambiar contraseña
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ChangePassword.propTypes = {
  match: PropTypes.object,
};
