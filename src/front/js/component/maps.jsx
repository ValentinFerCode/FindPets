import React, { useState, useEffect, useContext } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "../../styles/home.css";

export const Map = () => {
  const [selectedMarker, setSelectedMarket] = useState("");

  //Api GoogleMaps
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  return isLoaded ? (
    <GoogleMap
      zoom={11}
      center={{ lat: -34.839054258608684, lng: -56.16434951021918 }}
      mapContainerClassName="map-container"
    ></GoogleMap>
  ) : (
    <></>
  );
};
