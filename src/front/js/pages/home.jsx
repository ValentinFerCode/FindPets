import React, {useContext, useEffect} from "react";
import {Context} from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Map} from "../component/maps.jsx";

export const Home = () => {
    const {store, actions} = useContext(Context);

    //
    useEffect(() => {
        actions.getPetsLost();
        actions.getOneUser(store.userSession.id);
    }, []);

    return (
        <>
            <div className="row ">
                <div className="carta mx-auto m-4">
                    <div className="circulo"
                        style={
                            {"--clr": "#f40103"}
                    }>
                        <img src="https://i.imgur.com/tkKWUot.png" className="logo"/>
                    </div>
                    <div className="contenido ">
                        <h2>FindPets</h2>
                        <p>
                            FindPets es una aplicación web uruguaya que promueve la adopción
                                                                                                                        responsable y asiste a la comunidad en la noble tarea de volver a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    reunir a las mascotas perdidas con sus familias.
                        </p>
                    </div>
                    <img src="https://i.ibb.co/nCrFSbM/In-Shot-20230222-111107834.png" className="perro_gato"/>
                </div>
            </div>
            <div className="text-center m-4" id="bienvenida">
                <h3>¡Bienvenido a FindPets!</h3>
            </div>

            <div className="w-100 border border-success">
                <Map/>
            </div>
            <div className="contenedor-carta m-4">
                <div className="box"
                    style={
                        {"--clr": " #2c74b3"}
                }>
                    <div className="contenido_carta">
                        <div className="icono_carta_home">
                            <i className="fa fa-globe"></i>
                        </div>
                        <div className="texto_carta_home">
                            <h3>Nuestra misión</h3>
                            <p>
                                Nuestra misión es promover la adopción responsable y asistir a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                la comunidad en la noble tarea de volver a reunir a las mascotas
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                perdidas con sus familias.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="box"
                    style={
                        {"--clr": " #2c74b3"}
                }>
                    <div className="contenido_carta">
                        <div className="icono_carta_home">
                            <i className="fa fa-paw"></i>
                        </div>
                        <div className="texto_carta_home">
                            <h3>¿Por qué FindPets?</h3>
                            <p>
                                FindPets brinda los medios necesarios para que personas
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                solidarias de todo el país que encuentran mascotas perdidas
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                cuenten con un espacio para publicarlas, con el fin de que
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                vuelvan a reencontrarse con sus familias.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="box"
                    style={
                        {"--clr": " #2c74b3"}
                }>
                    <div className="contenido_carta">
                        <div className="icono_carta_home">
                            <i className="fa fa-money-bill"></i>
                        </div>
                        <div className="texto_carta_home">
                            <h3>¡Es gratis!</h3>
                            <p>
                                FindPets fue pensada y creada sin fines de lucro, sin embargo,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                aceptamos donaciones como forma de agradecimiento para que la
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                página siga funcionando y brindando ayuda a todas las familias
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                del país.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
