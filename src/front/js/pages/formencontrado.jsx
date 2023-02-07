import React, { useState } from "react";

export const PetForm = () => {
  const [pet, setPet] = useState({
    nombre: "",
    raza: "",
    localidad: "",
    fecha: "",
  });

  const handleSubmit = (event) => {
    event.preventdDefault();
    console.log("Pet:", pet);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Formulario: Mascota encontrada</h1>
      <form onSubmit={handleSubmit}>
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
            value={pet.genre}
            onChange={(event) => setPet({ ...pet, genre: event.target.value })}
            style={{ width: "30%", padding: "10px", borderRadius: "5px" }}
          />
        </div>
        <br />
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
            value={pet.raza}
            onChange={(event) => setPet({ ...pet, raza: event.target.value })}
            style={{ width: "30%", padding: "10px", borderRadius: "5px" }}
          />
        </div>
        <br />
        <div
          style={{
            margin: "10px 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            placeholder="Localidad:"
            value={pet.localidad}
            onChange={(event) =>
              setPet({ ...pet, localidad: event.target.value })
            }
            style={{ width: "30%", padding: "10px", borderRadius: "5px" }}
          />
        </div>
        <br />
        <div
          style={{
            margin: "10px 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            placeholder="Fecha:"
            value={pet.raza}
            onChange={(event) => setPet({ ...pet, raza: event.target.value })}
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
      </form>
    </>
  );
};
