import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "../../styles/home.css";
import ReactWhatsapp from "react-whatsapp";

export const OnePetLost = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  //
  //Obtengo la mascota
  useEffect(() => {
    actions.getOnePet(params.id);
    window.scrollTo(0, 0);
  }, []);

  //Api GoogleMaps
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  //
  const insertAt = (str, sub, pos) =>
    `${str.slice(0, pos)}${sub}${str.slice(pos)}`;

  return (
    <div className="container-fluid">
      <div className="jumbotron  m-3">
        <div className="rounded border border-danger">
          <div className="row g-0">
            <div className="col-md-6">
              <div className="container w-75 mx-auto my-3">
                <h1 className="text-center text-danger border-bottom border-danger">
                  PET INFORMATION
                </h1>

                <form>
                  <div className="form-group row">
                    <div className="col-md-12 mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        Descripción
                      </label>
                      <textarea
                        class="form-control"
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
                        type=""
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
                      <a className="text-center" href={store.onePet.url}>
                        <img className="onePet" src={store.onePet.url} />
                      </a>
                    </div>
                  </div>
                  <div className=" col-4 mx-auto my-2">
                    <ReactWhatsapp
                      className="btn btn-lg btn-success"
                      number={"+598" + store.oneUser.contacto}
                      message="Buenas! me contacto contigo para mas información acerca de una mascota que publicaste en FindPets!"
                    >
                      Contactar <i className="fab fa-whatsapp mx-1"></i>
                    </ReactWhatsapp>
                  </div>
                  {/*  */}
                </form>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

OnePetLost.propTypes = {
  match: PropTypes.object,
};
