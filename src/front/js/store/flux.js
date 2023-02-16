import Swal from "sweetalert2";
import axios from "axios";

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
            oneUser: {},
            petsUser: [],
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
                        } else {
                            localStorage.setItem("token", data.access_token);
                            console.log(data.access_token);
                            setStore({
                                userSession: data.user,
                            });
                        }
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
                descripcion,
                edad,
                raza,
                especie,
                latitud,
                longitud,
                urlimage,
                usuario_id,
                estado
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
                                descripcion: descripcion,
                                edad: edad,
                                raza: raza,
                                estado: estado,
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
                let actions = getActions();
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
                            actions.getOneUser(data.usuario_id);
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
            getPetsUser: (id) => {
                try {
                    fetch(process.env.BACKEND_URL + "/api/users/" + id + "/pets/", {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data);
                            setStore({
                                petsUser: data.results,
                            });
                        });
                    //
                } catch (e) {
                    console.log(e);
                }
            },
            getOneUser: (id) => {
                try {
                    fetch(process.env.BACKEND_URL + "/api/users/" + id, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data);
                            setStore({
                                oneUser: data,
                            });
                        });
                    //
                } catch (e) {
                    console.log(e);
                }
            },
            // DELETE
            getDeletePets: () => {
                let store = getStore();
                try {
                    fetch(process.env.BACKEND_URL + "/api/pets", {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data);
                        });
                    console.log(store.petsorphan);
                } catch (e) {
                    console.log(e);
                }
            },

            forgotPassword: (userEmail) => {
                fetch(process.env.BACKEND_URL + "/api/forgotpassword", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            // username: userName,
                            email: userEmail,
                        }), // body data type must match "Content-Type" header
                    })
                    .then((response) => {
                        console.log(response.status);
                        // if (response.status === 200) {
                        //     setStore({
                        //         auth: true,
                        //     });
                        // }
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data.msg);
                        if (
                            data.msg === "El correo ingresado no existe en nuestros registros"
                        ) {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Usuario o dirección de correo electrónico incorrecto!",
                            });
                        }
                    })
                    .catch((err) => console.log(err));
            },
            validToken: async () => {
                let accessToken = localStorage.getItem("token");
                try {
                    const response = await axios.get(
                        process.env.BACKEND_URL + "/api/valid-token", {
                            headers: {
                                Authorization: "Bearer " + accessToken,
                            },
                        }
                    );
                    if (response.data.user != null) {
                        setStore({
                            auth: true,
                            userSession: response.data.user,
                        });
                    }

                    return;
                } catch (e) {
                    if (e.response.status === 402 || e.response.status === 404) {
                        setStore({
                            auth: false,
                        });
                    }
                    return false;
                }
            },
            petsPostUpdate: (
                genero,
                tamaño,
                color,
                descripcion,
                edad,
                raza,
                especie,
                latitud,
                longitud,
                urlimage,
                usuario_id,
                estado
            ) => {
                try {
                    fetch(process.env.BACKEND_URL + "/api/pets/" + id, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                genero: genero,
                                tamaño: tamaño,
                                color: color,
                                descripcion: descripcion,
                                edad: edad,
                                raza: raza,
                                estado: estado,
                                especie: especie,
                                latitud: latitud,
                                longitud: longitud,
                                url: urlimage,
                                // usuario_id: usuario_id,
                            }),
                        })
                        .then((response) => {
                            if (response.status === 200) {
                                Swal.fire({
                                    icon: "success",
                                    title: "Oops...",
                                    text: "Mascota actualizada con exito!",
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
        },
    };
};

export default getState;