const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      userSession: {},
      auth: false,
      petslost: [],
      imagePet: "",
    },
    actions: {
      signup: (username, email, password, nombre, apellido, contacto) => {
        try {
          fetch(process.env.BACKEND_URL + "/api/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              email: email,
              password: password,
              nombre: nombre,
              apellido: apellido,
              contacto: contacto,
              admin: false,
            }),
          })
            .then((response) => {
              if (response.status === 200) {
                alert("Usuario creado con exito!");
              }
              return response.json();
            })
            .then((data) => {
              if (data.msg === "User exist in the system") {
                alert(data.msg);
              }
              console.log(data);
            });
          //
        } catch (e) {
          console.log(e);
        }
      },

      login: (userName, userPassword) => {
        fetch(process.env.BACKEND_URL + "/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: userName,
            password: userPassword,
          }), // body data type must match "Content-Type" header
        })
          .then((response) => {
            console.log(response.status);
            if (response.status === 200) {
              setStore({
                auth: true,
              });
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            if (data.msg === "Bad username or password") {
              alert(data.msg);
            }
            localStorage.setItem("token", data.access_token);
            setStore({
              userSession: data.user,
            });
          })
          .catch((err) => console.log(err));
      },

      logout: () => {
        localStorage.removeItem("token");
        setStore({
          auth: false,
        });
      },
      petsPost: (
        genero,
        tamaño,
        color,
        nombre,
        edad,
        raza,
        especie,
        latitud,
        longitud,
        urlimage,
        usuario_id
      ) => {
        try {
          fetch(process.env.BACKEND_URL + "/api/pets", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              genero: genero,
              tamaño: tamaño,
              color: color,
              nombre: nombre,
              edad: edad,
              raza: raza,
              estado: "lost",
              especie: especie,
              latitud: latitud,
              longitud: longitud,
              url: urlimage,
              usuario_id: usuario_id,
            }),
          })
            .then((response) => {
              if (response.status === 200) {
                alert("Mascota publicada con exito!");
              }
              return response.json();
            })
            .then((data) => {
              if (data.msg === "User exist in the system") {
                alert(data.msg);
              }
              setStore({
                imagePet: "",
              });
              console.log(data);
            });
          //
        } catch (e) {
          console.log(e);
        }
      },
      getPetsLost: () => {
        try {
          fetch(process.env.BACKEND_URL + "/api/pets/lost", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setStore({
                petslost: data,
              });
            });
          //
        } catch (e) {
          console.log(e);
        }
      },
      uploadImage: (image) => {
        try {
          const data = new FormData();
          data.append("file", image);
          data.append("upload_preset", "findspetsImage");

          fetch("https://api.cloudinary.com/v1_1/dfwglvojj/image/upload", {
            method: "POST",
            body: data,
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data.url);
              setStore({
                imagePet: data.url,
              });
            });
        } catch (e) {
          console.log(e);
        }
      },
    },
  };
};

export default getState;
