import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "../../styles/home.css";

export const PetForm = () => {
  const { store, actions } = useContext(Context);
  const [genero, setGenero] = useState("");
  const [tamaño, setTamaño] = useState("");
  const [color, setColor] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [edad, setEdad] = useState("");
  const [raza, setRaza] = useState("");
  const [especie, setEspecie] = useState("");
  const [estado, setEstado] = useState("lost");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [dlat, seDtLat] = useState(-34.839054258608684);
  const [dlng, setDLng] = useState(-56.16434951021918);
  const [urlimage, setUrlImage] = useState("");
  //

  //Api GoogleMaps
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  //
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function postPetLost(e) {
    e.preventDefault();
    if (tamaño == "" || color == "" || edad == "") {
      console.log(store.imagePet == "");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Faltan datos por completar!",
      });
    } else if (store.imagePet == "" || store.imagePet == undefined) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "La imagen no quedo subida correctamente!",
      });
    } else if (lat == "" || lng == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe seleccionar una ubicación en el mapa!",
      });
    } else {
      actions.petsPost(
        genero,
        tamaño,
        color,
        descripcion,
        edad,
        raza,
        especie,
        lat,
        lng,
        store.imagePet,
        store.userSession.id,
        estado
      );
      setGenero("");
      setTamaño("");
      setColor("");
      setEdad("");
      setRaza("");
      setEspecie("");
      setLat("");
      setLng("");
      setDescripcion("");
    }
  }

  return (
    <div className="container-fluid">
      <div className="jumbotron m-3">
        <div className="rounded border border-danger">
          <div className="row g-0">
            <div className="col-md-6">
              <div className="container w-75 mx-auto my-3">
                <h1 className="text-center text-danger border-bottom border-danger">
                  PET LOST
                </h1>

                {store.auth === false ? (
                  <Navigate to="/" />
                ) : (
                  <form onSubmit={postPetLost}>
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
                          value={descripcion}
                          onChange={(e) => setDescripcion(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="genero" className="form-label">
                          Genero
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={genero}
                          onChange={(e) => setGenero(e.target.value)}
                        >
                          <option value="" disabled>
                            Selecciona un genero
                          </option>
                          <option value="macho">Macho</option>
                          <option value="hembra">Hembra</option>
                        </select>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="tamaño" className="form-label">
                          Tamaño <b>*</b>
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={tamaño}
                          onChange={(e) => setTamaño(e.target.value)}
                        >
                          <option value="" disabled>
                            Selecciona un tamaño
                          </option>
                          <option value="chico">Chico</option>
                          <option value="mediano">Mediano</option>
                          <option value="grande">Grande</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="color" className="form-label">
                          Color
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={color}
                          onChange={(e) => setColor(e.target.value)}
                          id="color"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="edad" className="form-label">
                          Edad
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={edad}
                          onChange={(e) => setEdad(e.target.value)}
                        >
                          <option value="" disabled>
                            Selecciona una edad
                          </option>
                          <option value="cachorro">Cachorro</option>
                          <option value="joven">Joven</option>
                          <option value="anciano">Anciano</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="url" className="form-label">
                          Especie:
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={especie}
                          onChange={(e) => setEspecie(e.target.value)}
                        >
                          <option value="" disabled>
                            Selecciona una especie
                          </option>
                          <option value="perro">Perro</option>
                          <option value="gato">Gato</option>
                        </select>
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="raza" className="form-label">
                          Raza
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={raza}
                          onChange={(e) => setRaza(e.target.value)}
                          id="raza"
                          disabled={
                            especie == "gato" || especie == "" ? true : false
                          }
                        />
                      </div>
                    </div>

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

                    <div className="d-grid gap-2 col-6 mx-auto">
                      <button type="submit" className="btn btn-lg btn-danger">
                        Submit
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
            <div className="col-md-6 border-start border-danger">
              {isLoaded ? (
                <GoogleMap
                  zoom={11}
                  center={{ lat: parseFloat(dlat), lng: parseFloat(dlng) }}
                  mapContainerClassName="map-mascota"
                  onClick={(e) => {
                    setLat(e.latLng.lat);
                    setLng(e.latLng.lng);
                    seDtLat(e.latLng.lat);
                    setDLng(e.latLng.lng);
                  }}
                >
                  <Marker
                    position={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
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

PetForm.propTypes = {
  match: PropTypes.object,
};
