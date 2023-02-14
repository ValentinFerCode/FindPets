import Swal from "sweetalert2";
const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            userSession: {},
            auth: false,
            petslost: [],
            imagePet: "",
            onePet: {},
            adopt: [],
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
                                Swal.fire({
                                    icon: "success",
                                    title: "Oops...",
                                    text: "Usuario creado con exito!",
                                });
                            }
                            return response.json();
                        })
                        .then((data) => {
                            if (data.msg === "User exist in the system") {
                                Swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: "Ya existe una cuenta con ese usuario o email!",
                                });
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
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Usuario o contraseña incorrecto!",
                            });
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
                                Swal.fire({
                                    icon: "success",
                                    title: "Oops...",
                                    text: "Mascota publicada con exito!",
                                });
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
                let store = getStore();
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
                    console.log(store.petslost);
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
                        .then((response) => {
                            if (response.status === 200) {
                                Swal.fire({
                                    icon: "success",
                                    title: "Oops...",
                                    text: "La foto fue subida de forma exitosa!",
                                });
                            } else {
                                Swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: "Hubo algun error al momento de subir la foto!",
                                });
                            }
                            return response.json();
                        })
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
            getOnePet: (id) => {
                try {
                    fetch(process.env.BACKEND_URL + "/api/pets/" + id, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data);
                            setStore({
                                onePet: data,
                            });
                        });
                    //
                } catch (e) {
                    console.log(e);
                }
            },
            getAdoption: () => {
                try {
                    fetch(process.env.BACKEND_URL + "/api/pets/orphan", {
                            method: "GET",
                        })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data);
                            setStore({
                                adopt: data,
                            });
                        });
                } catch (e) {
                    console.log(e);
                }
            },

            // DELETE
            getDeletePets: (id) => {
                let store = getStore();
                try {
                    fetch(process.env.BACKEND_URL + "/formadoptar", {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data);
                            setStore({
                                petsorphan: data,
                            });
                        });
                    console.log(store.petsorphan);
                } catch (e) {
                    console.log(e);
                }
            },
















        },
    };
};

export default getState;