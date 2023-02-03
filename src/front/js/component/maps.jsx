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

  var mascotas = [
    {
      id: 1,
      nombre: "perro 1",
      lat: -34.881404,
      lng: -56.177204,
      url: "https://picsum.photos/id/237/90/90" + "#custom_marker",
    },
    {
      id: 2,
      nombre: "perro 2",
      lat: -34.878815,
      lng: -56.156527,
      url: "https://picsum.photos/id/237/90/90" + "#custom_marker",
    },
    {
      id: 3,
      nombre: "perro 3",
      lat: -34.912097,
      lng: -56.151376,
      url: "https://picsum.photos/id/237/90/90" + "#custom_marker",
    },
  ];

  return isLoaded ? (
    <GoogleMap
      zoom={11}
      center={{ lat: -34.839054258608684, lng: -56.16434951021918 }}
      mapContainerClassName="map-container"
    >
      {mascotas.map((item) => (
        <div key={item.id}>
          <Marker
            position={{ lat: item.lat, lng: item.lng }}
            icon={item.url}
            options={{ size: new google.maps.Size(90, 90) }}
          />
        </div>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};
