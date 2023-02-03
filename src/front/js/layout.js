import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

<<<<<<< HEAD
import {Home} from "./pages/home";
import {Demo} from "./pages/demo";
import {Single} from "./pages/single";
import injectContext from "./store/appContext";

import {Navbar} from "./component/navbar";
import {Footer} from "./component/footer";
import {Register} from "./component/register.jsx";
=======
import { Home } from "./pages/home.jsx";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
>>>>>>> e025ffbd913f4be6ac0cd5273bd652c2fa66a046

// create your first component
const Layout = () => {
<<<<<<< HEAD
    // the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar/>
                    <Routes>
                        <Route element={<Home/>}
                            path="/"/>
                        <Route element={<Register/>}
                            path="/register"/>
                        <Route element={<Demo/>}
                            path="/demo"/>
                        <Route element={<Single/>}
                            path="/single/:theid"/>
                        <Route element={
                            <h1>Not found!</h1>
                        }/>
                    </Routes>
                    <Footer/>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
=======
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
>>>>>>> e025ffbd913f4be6ac0cd5273bd652c2fa66a046
};

export default injectContext(Layout);
