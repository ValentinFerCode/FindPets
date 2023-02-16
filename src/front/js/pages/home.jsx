import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Map } from "../component/maps.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  //
  useEffect(() => {
    actions.getPetsLost();
    actions.getOneUser(store.userSession.id);
  }, []);

  return (
    <div className="w-100">
      <Map />
    </div>
  );
};
