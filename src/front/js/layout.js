import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home.jsx";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Login } from "./pages/login.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
// import { Recuperacion_clave } from "./pages/recuperacion_clave.jsx";
import { PetForm } from "./pages/formencontrado.jsx";
// import {FormAdoptar} from "./pages/formadoptar.jsx";
import { Register } from "./pages/register.jsx";
import { FormAdoptar } from "./pages/formadoptar.jsx";
import Lista_encontrados from "./component/animal_encontrado.jsx";
import { OnePet } from "./pages/mascota.jsx";

// create your first component
const Layout = () => {
  // the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Login />} path="/login" />
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />{" "}
            {/* <Route element={<Recuperacion_clave />} path="/recuperacion_clave"/> */}
            <Route element={<PetForm />} path="/formencontrado" />{" "}
            {/* <Route element={<FormAdoptar/>} path="/formadoptar"/> */}
            <Route element={<FormAdoptar />} path="/formadoptar" />
            <Route element={<OnePet />} path="/mascota/:id" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<Register />} path="/register" />
            <Route element={<Lista_encontrados />} path="/lista_encontrados" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
