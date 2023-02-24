import React, {useState, useContext} from "react";
import Swal from "sweetalert2";
import {Navigate} from "react-router-dom";
import {Context} from "../store/appContext.js";

export const Register = () => {
    const {store, actions} = useContext(Context);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [tipo, setTipo] = useState("");
    const [urlimage, setUrlImage] = useState("");
    const [empresa, setEmpresa] = useState("");

    //

  function signup(e) {
    e.preventDefault();
    if (
      firstname == "" &&
      lastname == "" &&
      email == "" &&
      username == "" &&
      password == "" &&
      contact == "" &&
      tipo == ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "¡Faltan datos por completar!",
      });
    } else if (tipo == "refugio" && empresa == "") {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "¡Faltan datos por completar!",
      });
    } else if (
      (store.imagePet == "" || store.imagePet == undefined) &&
      tipo == "refugio"
    ) {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "La imagen no quedo subida correctamente",
      });
    } else {
      actions.signup(
        username,
        email,
        password,
        firstname,
        lastname,
        contact,
        tipo,
        store.imagePet,
        empresa
      );
      setFirstname("");
      setLastname("");
      setEmail("");
      setUsername("");
      setPassword("");
      setContact("");
      setEmpresa("");
      setTipo("");
    }

    return (
        <div className="container w-50 mb-5  registro ">
            <h1 className="text-center  border-bottom border-primary">Registrarme</h1>
            {
            store.auth === true ? (
                <Navigate to="/"/>
            ) : (
                <form className="col-align-center  col-md-8  col-sm-4 col-lg-12 col-xs-1"
                    onSubmit={signup}>

                    {/* col-12 col-md-8 col-sm-4 mb-3 */}

                    <div className="form-group row ">
                        <div className="col-md-6 mb-3   ">
                            <label htmlFor="firstname" className="form-label ">
                                Nombre
                            </label>
                            <input type="text" className="form-control "
                                value={firstname}
                                onChange={
                                    (e) => setFirstname(e.target.value)
                                }
                                id="firstname"
                                pattern="^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]*$"
                                title="Solo se permiten letras"
                                required/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastname" className="form-label">
                                Apellido
                            </label>
                            <input type="text" className="form-control "
                                value={lastname}
                                onChange={
                                    (e) => setLastname(e.target.value)
                                }
                                id="lastname"
                                pattern="^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]*$"
                                title="Solo se permiten letras"
                                required/>
                        </div>
                    </div>
                    {/*  */}
                    <div className="form-group row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="tipo" className="form-label">
                                Tipo de Cuenta:
                            </label>
                            <select className="form-select" aria-label="Default select example"
                                value={tipo}
                                onChange={
                                    (e) => setTipo(e.target.value)
                            }>
                                <option value="" disabled>
                                    Selecciona un tipo
                                </option>
                                <option value="refugio">Refugio</option>
                                <option value="persona">Persona</option>
                            </select>
                        </div>
                    </div>


                    {
                    tipo == "refugio" ? (
                        <div className="form-group row">
                            <div className="col-md-12 mb-3 ">
                                <label htmlFor="empresa" className="form-label ">
                                    Refugio:
                                </label>
                                <input type="text" className="form-control "
                                    value={empresa}
                                    onChange={
                                        (e) => setEmpresa(e.target.value)
                                    }
                                    id="firstname"
                                    pattern="^[a-zA-Z ]*$"
                                    title="Solo se permiten letras"
                                    required/>
                            </div>
                        </div>
                    ) : null
                }
                    <div className="form-group row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="email" className="form-label">
                                Correo electrónico
                            </label>
                            <input type="email" className="form-control"
                                value={email}
                                onChange={
                                    (e) => setEmail(e.target.value)
                                }
                                id="email"
                                aria-describedby="emailHelp"
                                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                required/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="contact" className="form-label">
                                Contacto
                            </label>
                            <input type="text" className="form-control"
                                value={contact}
                                onChange={
                                    (e) => setContact(e.target.value)
                                }
                                id="contact"
                                pattern="^[0-9]*$"
                                title="Solo se permiten números"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="username" className="form-label">
                                Nombre de usuario
                            </label>
                            <input type="text" className="form-control"
                                value={username}
                                onChange={
                                    (e) => setUsername(e.target.value)
                                }
                                id="username"
                                pattern="^[a-zA-Z0-9.]*$"
                                required/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="password" className="form-label">
                                Contraseña
                            </label>
                            <input type="password" className="form-control"
                                value={password}
                                onChange={
                                    (e) => setPassword(e.target.value)
                                }
                                id="password"
                                required/>
                        </div>
                    </div>
                    {
                    tipo == "refugio" ? (
                        <div className="form-group row">
                            <div className="col-md-9 mb-3">
                                <input type="file" className="form-control"
                                    onChange={
                                        (e) => setUrlImage(e.target.files[0])
                                    }
                                    id="url"/>
                            </div>
                            <div className="col-md-3 mb-3">
                                <button type="button"
                                    onClick={
                                        () => actions.uploadImage(urlimage)
                                    }
                                    className="btn btn-primary">
                                    Subir Foto
                                </button>
                            </div>
                        </div>
                    ) : null
                }

                    <div className=" btn-sm d-grid gap-2 col-md-6 mb-3  mx-auto px-auto  ">
                        <button type="submit" className="submit mx-auto btn-sm ">
                            Enviar
                        </button>
                    </div>
                </form>
            )
        } </div>
    );
};
