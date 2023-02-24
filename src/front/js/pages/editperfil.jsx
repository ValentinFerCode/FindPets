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
  const [refugio, setRefugio] = useState(store.oneUser.empresa);
  const [urlimage, setUrlImage] = useState("");
  //
  useEffect(() => {
    window.scrollTo(0, 0);
    actions.getOneUser(store.userSession.id);
  }, []);

  //
  function updateUser(e) {
    e.preventDefault();
    if (
      store.imagePet == "" ||
      (store.imagePet == undefined && store.oneUser.tipo == "refugio")
    ) {
      Swal.fire({
        title: "¿Estás seguro/a?",
        text: "No podrás revertir esta acción",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, actualízalo!",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          actions.updateUser(
            username,
            email,
            firstname,
            lastname,
            contact,
            refugio,
            store.oneUser.url,
            store.userSession.id
          ); // actualizamos el perfil del usuario
          navigate("/perfil"); //usamos navigate para redireccionar
        }
      });
      //
    } else {
      actions.updateUser(
        username,
        email,
        firstname,
        lastname,
        contact,
        refugio,
        store.imagePet,
        store.userSession.id
      ); // actualizamos el perfil del usuario
      navigate("/perfil"); //usamos navigate para redireccionar
    }
  }
  return (
    <div className="container-fluid w-75">
      {store.auth === false ? (
        <Navigate to="/" />
      ) : (
        <div className="jumbotron m-3">
          <div className="rounded border border-primary">
            <h1 className="text-center border-bottom border-primary datos-modificar">
              Modificar datos{" "}
            </h1>
            {/* TITULO */}
            <div className="container w-75 mx-auto my-3 ">
              <form onSubmit={updateUser}>
                <div className="form-group row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstname" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      id="firstname"
                      pattern="^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]*$"
                      title="Solo se permiten letras"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastname" className="form-label">
                      Apellido
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      id="lastname"
                      pattern="^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]*$"
                      title="Solo se permiten letras"
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Dirección de correo electrónico
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      aria-describedby="emailHelp"
                      pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="contact" className="form-label">
                      Contacto
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      id="contact"
                      pattern="^[0-9]*$"
                      title="Solo se permiten numeros"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-6 mb-3 mx-auto">
                    <label htmlFor="username" className="form-label">
                      Nombre de usuario
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      id="username"
                      pattern="^[a-zA-Z0-9.]*$"
                      required
                    />
                  </div>

                  {store.oneUser.tipo == "refugio" ? (
                    <div className="col-md-6 mb-3 mx-auto">
                      <label htmlFor="refugio" className="form-label">
                        Refugio
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={refugio}
                        onChange={(e) => setRefugio(e.target.value)}
                        id="refugio"
                        pattern="^[a-zA-Z ]*$"
                        required
                      />
                    </div>
                  ) : null}
                </div>

                {store.oneUser.tipo == "refugio" ? (
                  <div className="form-group row">
                    <div className="col-md-9 mb-3">
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setUrlImage(e.target.files[0])}
                        id="url"
                      />
                    </div>
                    <div className="col-md-3 mb-3">
                      <button
                        type="button"
                        onClick={() => actions.uploadImage(urlimage)}
                        className="btn btn-primary"
                      >
                        Subir Foto
                      </button>
                    </div>
                  </div>
                ) : null}
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
                        contact != store.userSession.contacto ||
                        refugio != store.userSession.empresa ||
                        urlimage != null
                      )
                    }
                  >
                    Actualizar datos
                  </button>
                  <Link
                    to={"/perfil"}
                    type="button"
                    className="btn btn-lg btn-secondary"
                  >
                    Cancelar
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
