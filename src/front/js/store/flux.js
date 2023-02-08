const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            message: null,
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white",
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white",
                },
            ],
            auth: false,
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo,
                });
            },

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
                console.log(userName, userPassword);
                fetch(process.env.BACKEND_URL + "/api/login", {
                        method: "POST",
                        // mode: "no-cors",
                        // credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                            // 'Content-Type': 'application/x-www-form-urlencoded',
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
                        if (data.msg === "Bad email or password") {
                            alert(data.msg);
                        }
                        localStorage.setItem("token", data.access_token);
                        localStorage.setItem("userid", data.user.id);
                    })
                    .catch((err) => console.log(err));
            },
            crearMascota: (
                genero,
                tamaño,
                color,
                // nombre,
                edad,
                raza,
                estado,
                especie
                // latitud,
                // longitud
            ) => {
                let userid = localStorage.getItem("userid");
                fetch(process.env.BACKEND_URL + "/api/pets", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            genero: genero,
                            tamaño: tamaño,
                            color: color,
                            edad: edad,
                            raza: raza,
                            estado: "lost",
                            especie: especie,
                            // url: "url",
                            usuario_id: userid,
                        }),
                    })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log("Pet guardada:", data);
                    })
                    .catch((error) => {
                        console.error("Error al guardar la pet:", error);
                    });
                console.log(
                    genero,
                    tamaño,
                    color,
                    // nombre,
                    edad,
                    raza,
                    estado,
                    especie
                    // latitud,
                    // longitud,
                    // url,
                    // usuario_id
                );
            },

            logout: () => {
                localStorage.removeItem("token");
                setStore({
                    auth: false,
                    //   view: "",
                    //   hidden: "visually-hidden",
                });
            },
        },
    };
};

export default getState;