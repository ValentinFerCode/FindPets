import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Map } from "../component/maps.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="w-100">
      <Map />
    </div>
  );
};
