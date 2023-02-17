import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Navigate, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import Swal from "sweetalert2";

export const EditPerfil = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  //
  const [username, setUsername] = useState(store.oneUser.username);
  const [firstname, setFirstname] = useState(store.oneUser.nombre);
  const [lastname, setLastname] = useState(store.oneUser.apellido);
  const [email, setEmail] = useState(store.oneUser.email);
  const [contact, setContact] = useState(store.oneUser.contacto);
  //
  useEffect(() => {
    window.scrollTo(0, 0);
    actions.getOneUser(store.userSession.id);
  }, []);

  //
  function updateUser(e) {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        actions.updateUser(
          username,
          email,
          firstname,
          lastname,
          contact,
          store.userSession.id
        ); // actualizamos el perfil del usuario
        navigate("/perfil"); //usamos navigate para redireccionar
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
            <h1 className="text-center text-danger border-bottom border-danger">
              MODIFICAR DATOS{" "}
            </h1>
            {/* TITULO */}
            <div className="container w-75 mx-auto my-3 ">
              <form onSubmit={updateUser}>
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
                  <div className="col-md-6 mb-3 mx-auto">
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
                </div>

                <div className="d-grid gap-2 col-6 mx-auto mb-4">
                  <button
                    type="submit"
                    className="btn btn-lg btn-danger"
                    disabled={
                      !(
                        username != store.userSession.username ||
                        firstname != store.userSession.nombre ||
                        lastname != store.userSession.apellido ||
                        email != store.userSession.email ||
                        contact != store.userSession.contacto
                      )
                    }
                  >
                    Actualizar Datos
                  </button>
                  <Link
                    to={"/perfil"}
                    type="button"
                    className="btn btn-lg btn-secondary"
                  >
                    CANCELAR
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

EditPerfil.propTypes = {
  match: PropTypes.object,
};
