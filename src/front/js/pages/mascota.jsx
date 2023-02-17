import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Context } from "../store/appContext";
import { Navigate, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "../../styles/home.css";
import ReactWhatsapp from "react-whatsapp";

export const OnePet = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const params = useParams(); //

  //Obtengo la mascota
  useEffect(() => {
    actions.getOnePet(params.id);
    window.scrollTo(0, 0);
  }, []);

  //Api GoogleMaps
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  function deletePet() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        actions.deletePet(store.onePet.id); // borramos la mascota
        navigate("/"); //usamos navigate para redireccionar
      }
    });
  }

  return (
    <div className="container-fluid">
      <div className="jumbotron  m-3">
        <div className="rounded border border-danger">
          <div className="row g-0">
            <div
              className={
                store.onePet.estado == "lost" ? "col-md-6" : "col-md-12"
              }
            >
              <div className="container w-75 mx-auto my-3">
                <div className="border-bottom border-danger">
                  {/* Boton Modificar */}
                  {store.userSession.id === store.onePet.usuario_id &&
                  store.auth == true ? (
                    <Link
                      to={"/mascota/edit"}
                      className="float-end btn btn-outline-secondary "
                    >
                      <i className="fa fa-edit"></i>
                    </Link>
                  ) : null}
                  {/* Boton Eliminar */}
                  {store.userSession.id === store.onePet.usuario_id &&
                  store.auth == true ? (
                    <button
                      className="float-end btn btn-outline-primary fw-semibold mx-1"
                      onClick={deletePet}
                    >
                      {store.onePet.estado == "lost"
                        ? "Encontrado"
                        : "Adoptado"}
                      <i className="fa fa-smile-beam mx-1"></i>
                    </button>
                  ) : null}

                  <h1 className="text-start text-danger">PET INFORMATION</h1>
                </div>
                <form>
                  <div className="form-group row">
                    <div className="col-md-12 mb-3">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Descripción
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="2"
                        value={store.onePet.descripcion}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Genero</label>
                      <input
                        type=""
                        className="form-control"
                        value={store.onePet.genero}
                        id="genero"
                        readOnly
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Tamaño</label>
                      <input
                        type="text"
                        className="form-control"
                        value={store.onePet.tamaño}
                        id="tamaño"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Color</label>
                      <input
                        type=""
                        className="form-control"
                        value={store.onePet.color}
                        id="color"
                        readOnly
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Edad</label>
                      <input
                        type=""
                        className="form-control"
                        value={store.onePet.edad}
                        id="edad"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Raza</label>
                      <input
                        type=""
                        className="form-control"
                        value={store.onePet.raza}
                        id="raza"
                        readOnly
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Especie:</label>
                      <input
                        type=""
                        className="form-control"
                        value={store.onePet.especie}
                        id="especie"
                        readOnly
                      />
                    </div>
                    <h1 className="text-center text-danger border-bottom border-danger"></h1>
                    <div className="row">
                      <a
                        className="d-flex justify-content-center"
                        href={store.onePet.url}
                      >
                        <img className="onePet" src={store.onePet.url} />
                      </a>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center pe-4 my-2">
                    <ReactWhatsapp
                      className="btn btn-lg btn-success"
                      number={"+598" + store.oneUser.contacto}
                      message="Buenas! me contacto contigo para mas información acerca de una mascota que publicaste en FindPets!"
                      onClick={(e) => e.preventDefault()}
                    >
                      Contactar <i className="fab fa-whatsapp mx-1"></i>
                    </ReactWhatsapp>
                  </div>
                  {/*  */}
                </form>
              </div>
            </div>
            {store.onePet.estado == "lost" ? (
              <div className="col-md-6 border-start border-danger">
                {isLoaded ? (
                  <GoogleMap
                    zoom={17}
                    center={{
                      lat: parseFloat(store.onePet.latitud),
                      lng: parseFloat(store.onePet.longitud),
                    }}
                    mapContainerClassName="map-mascota"
                  >
                    <Marker
                      position={{
                        lat: parseFloat(store.onePet.latitud),
                        lng: parseFloat(store.onePet.longitud),
                      }}
                    ></Marker>
                  </GoogleMap>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

OnePet.propTypes = {
  match: PropTypes.object,
};
