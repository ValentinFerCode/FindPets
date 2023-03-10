import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home.jsx";
import injectContext from "./store/appContext";
import { Login } from "./pages/login.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import { PetForm } from "./pages/formencontrado.jsx";
import { Register } from "./pages/register.jsx";
import { FormAdoptar } from "./pages/formadoptar.jsx";
import { OnePet } from "./pages/mascota.jsx";
import { Perfil } from "./pages/perfil.jsx";
import { AllListas } from "./pages/listas.jsx";
import { Recuperacion_clave } from "./pages/recuperacion_clave.jsx";
import { EditPerfil } from "./pages/editperfil.jsx";
import { EditMascota } from "./pages/editmascota.jsx";
import { OneRefugio } from "./pages/refugiosperfil.jsx";
import { RefugioPaypal } from "./pages/refugiopaypal.jsx";
import { ViewNosotros } from "./pages/viewnosotros.jsx";

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
            <Route
              element={<Recuperacion_clave />}
              path="/recuperacion_clave"
            />
            <Route element={<PetForm />} path="/formencontrado" />{" "}
            {/* <Route element={<FormAdoptar/>} path="/formadoptar"/> */}{" "}
            <Route element={<FormAdoptar />} path="/formadoptar" />
            <Route element={<OnePet />} path="/mascota/:id" />
            <Route element={<Perfil />} path="/perfil" />
            <Route element={<h1> Not found! </h1>} />
            <Route element={<Register />} path="/register" />
            <Route element={<Perfil />} path="/perfil" />
            <Route element={<AllListas />} path="/listas" />
            <Route element={<EditPerfil />} path="/perfil/edit" />
            <Route element={<EditMascota />} path="/mascota/edit" />
            <Route element={<OneRefugio />} path="/refugio/:id" />
            <Route element={<RefugioPaypal />} path="/perfil/paypal" />
            <Route element={<ViewNosotros />} path="/nosotros" />
          </Routes>{" "}
          <Footer />
        </ScrollToTop>{" "}
      </BrowserRouter>{" "}
    </div>
  );
};

export default injectContext(Layout);
