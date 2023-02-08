import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";

export const PetForm = () => {
  const { store, actions } = useContext(Context);
  const [genero, setGenero] = useState("");
  const [tamaño, setTamaño] = useState("");
  const [color, setColor] = useState("");
  const [edad, setEdad] = useState("");
  const [raza, setRaza] = useState("");
  const [estado, setEstado] = useState("");
  const [especie, setEspecie] = useState("");
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  // const [pet, setPet] = useState({
  //   nombre: "",
  //   raza: "",
  //   localidad: "",
  //   fecha: "",
  // });
  function crearMascota(e) {
    e.preventDefault();
    actions.crearMascota(
      genero,
      tamaño,
      color,
      edad,
      raza,
      estado,
      especie
      // latitud,
      // longitud
    );
    setGenero("");
    setTamaño("");
    setColor("");
    setEdad("");
    setRaza("");
    setEstado("");
    setEspecie("");
    // setLatitud("");
    // setLongitud("");
  }
  console.log(latitud, longitud);
  return (
    <>
      {store.auth === true ? (
        <Navigate to="/" />
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Formulario: Mascota encontrada
          </h1>
          <form onSubmit={crearMascota}>
            <div
              //style={{ margin: "10px 0", display: "flex", justifyContent: "center" }}
              style={{
                margin: "10px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                placeholder="Genero:"
                value={genero}
                onChange={(event) => setGenero(event.target.value)}
                style={{ width: "30%", padding: "10px", borderRadius: "5px" }}
              />
            </div>
            {/* <br /> */}
            <div
              style={{
                margin: "10px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                placeholder="Tamaño:"
                value={tamaño}
                onChange={(event) => setTamaño(event.target.value)}
                style={{ width: "30%", padding: "10px", borderRadius: "5px" }}
              />
            </div>
            {/* <br /> */}
            <div
              style={{
                margin: "10px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                placeholder="Color:"
                value={color}
                onChange={(event) => setColor(event.target.value)}
                style={{ width: "30%", padding: "10px", borderRadius: "5px" }}
              />
            </div>
            {/* <br /> */}
            <div
              style={{
                margin: "10px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                placeholder="Edad:"
                value={edad}
                onChange={(event) => setEdad(event.target.value)}
                style={{ width: "30%", padding: "10px", borderRadius: "5px" }}
              ></input>
            </div>
            <div
              style={{
                margin: "10px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                placeholder="Raza:"
                value={raza}
                onChange={(event) => setRaza(event.target.value)}
                style={{ width: "30%", padding: "10px", borderRadius: "5px" }}
              ></input>
            </div>
            <div
              style={{
                margin: "10px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                placeholder="Estado:"
                value={estado}
                onChange={(event) => setEstado(event.target.value)}
                style={{ width: "30%", padding: "10px", borderRadius: "5px" }}
              ></input>
            </div>
            <div
              style={{
                margin: "10px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                placeholder="Especie:"
                value={especie}
                onChange={(event) => setEspecie(event.target.value)}
                style={{ width: "30%", padding: "10px", borderRadius: "5px" }}
              ></input>
            </div>

            <div
              style={{
                margin: "10px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={(event) =>
                  setPet({ ...pet, localidad: event.target.value })
                }
              />
            </div>

            <div
              style={{
                margin: "10px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                type="submit"
                style={{ padding: "10px 20px", borderRadius: "5px" }}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
