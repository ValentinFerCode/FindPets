const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
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

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({
            message: data.message,
          });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
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

      login: (userEmail, userPassword) => {
        fetch(process.env.BACKEND_URL + "/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            email: userEmail,
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
          })
          .catch((err) => console.log(err));
      },
    },
  };
};

export default getState;
