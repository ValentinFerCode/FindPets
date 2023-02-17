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
    <>
      <div className="carta mx-auto m-4">
        <div className="circulo" style={{ "--clr": "#f40103" }}>
          <img src="https://i.imgur.com/tkKWUot.png" className="logo" />
        </div>
        <div className="contenido">
          <h2>FindPets</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            assumenda labore tenetur, quod ipsam nesciunt voluptatum quasi neque
            beatae sunt voluptas atque enim facilis aliquam. Iusto repellat
            dignissimos aperiam ducimus?
          </p>
        </div>
        <img
          src="https://e7.pngegg.com/pngimages/173/245/png-clipart-s-of-dogs-and-cats-dog-cat.png"
          className="perro_gato"
        />
      </div>
      <div className="text-center m-4" id="bienvenida">
        <h3>¡Bienvenido a FindPets!</h3>
      </div>

      <div className="w-100">
        <Map />
      </div>

      <div className="mx-auto text-center m-4">
        <h1 className="pregunta">Preguntas Frecuentes</h1>

        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item mx-auto ">
            <h2
              className="accordion-header mx-auto text-center"
              id="flush-headingOne"
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <b>¿FindPets es seguro?</b>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <b>¿Cómo puedo publicar una mascota que encontré?</b>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <b>¿Aceptan donaciones?</b>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
