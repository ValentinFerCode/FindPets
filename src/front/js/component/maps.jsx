import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Navigate } from "react-router-dom";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "../../styles/home.css";

export const Map = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  //Api GoogleMaps
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  //
  function goPetInfo(id) {
    navigate("/mascota/" + id); //usamos navigate para redireccionar
  }

  //
  const insertAt = (str, sub, pos) =>
    `${str.slice(0, pos)}${sub}${str.slice(pos)}`;

  return isLoaded ? (
    <GoogleMap
      zoom={11}
      center={{ lat: -34.839054258608684, lng: -56.16434951021918 }}
      mapContainerClassName="map-container"
    >
      {store.petslost.map((item, id) => (
        <Marker
          key={id}
          position={{
            lat: parseFloat(item.latitud),
            lng: parseFloat(item.longitud),
          }}
          icon={insertAt(item.url, "w_90,h_90,c_fill/", 49) + "#custom_marker"}
          onClick={() => goPetInfo(item.id)}
        ></Marker>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};
