import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Context } from "../store/appContext";
import { Navigate, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "../../styles/home.css";

export const EditMascota = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  //
  const [genero, setGenero] = useState(store.onePet.genero);
  const [tamaño, setTamaño] = useState(store.onePet.tamaño);
  const [color, setColor] = useState(store.onePet.color);
  const [descripcion, setDescripcion] = useState(store.onePet.descripcion);
  const [edad, setEdad] = useState(store.onePet.edad);
  const [raza, setRaza] = useState(store.onePet.raza);
  const [especie, setEspecie] = useState(store.onePet.especie);
  const [estado, setEstado] = useState(store.onePet.estado);
  const [lat, setLat] = useState(store.onePet.latitud);
  const [lng, setLng] = useState(store.onePet.longitud);
  const [dlat, seDtLat] = useState(store.onePet.latitud);
  const [dlng, setDLng] = useState(store.onePet.longitud);
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

  function updatePet(e) {
    e.preventDefault();
    if (tamaño == "" || color == "" || edad == "") {
      console.log(store.imagePet == "");
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "¡Faltan datos por completar!",
      });
    } else if (lat == "" || lng == "") {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "¡Debe seleccionar una ubicación en el mapa!",
      });
    } else if (store.imagePet == "" || store.imagePet == undefined) {
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
          actions.updatePet(
            genero,
            tamaño,
            color,
            descripcion,
            edad,
            raza,
            especie,
            lat,
            lng,
            store.onePet.url,
            estado,
            store.onePet.id
          ); // actualizamos la mascota
          navigate("/mascota/" + store.onePet.id); //usamos navigate para redireccionar
          //
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
      });
    } else {
      actions.updatePet(
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
        estado,
        store.onePet.id
      );
      navigate("/mascota/" + store.onePet.id); //usamos navigate para redireccionar
      //
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
        <div className="rounded border border-primary">
          <div className="row g-0">
            <div className="col-md-6">
              <div className="container w-75 mx-auto my-3">
                <h1 className="text-center h1 border-bottom border-primary">
                  Mascota perdida
                </h1>

                {store.auth === false ? (
                  <Navigate to="/" />
                ) : (
                  <form onSubmit={updatePet}>
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
                          Género
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={genero}
                          onChange={(e) => setGenero(e.target.value)}
                        >
                          <option value="" disabled>
                            Selecciona un género
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
                          pattern="^[a-zA-Z ]*$"
                          title="Solo se permiten letras"
                          required
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
                          Especie
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
                          Subir foto
                        </button>
                      </div>
                    </div>

                    <div className="d-grid gap-2 col-6 mx-auto mb-2">
                      <button type="submit" className="btn btn-lg btn-danger">
                        Actualizar datos
                      </button>
                    </div>
                    <div className="d-grid gap-2 col-6  mx-auto">
                      <Link
                        to={"/mascota/" + store.onePet.id}
                        type="button"
                        className="btn btn-lg btn-secondary"
                      >
                        Cancelar
                      </Link>
                    </div>
                  </form>
                )}
              </div>
            </div>
            {store.onePet.estado == "lost" ? (
              <div className="col-md-6 border-start border-primary">
                {isLoaded ? (
                  <GoogleMap
                    zoom={17}
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
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

EditMascota.propTypes = {
  match: PropTypes.object,
};
