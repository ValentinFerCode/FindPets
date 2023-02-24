import React, {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext.js";
import {useNavigate, Navigate} from "react-router-dom";

export const Navbar = () => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        actions.getOneUser(store.userSession.id);
    }, []);

    function handleLogout() {
        actions.logout(); // cerrar la sesion
        navigate("/"); // usamos navigate para redireccionar
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-blue">
                <div className="container-fluid">
                    <Link to="/"
                        style={
                            {textDecoration: "none"}
                    }>

                        <img src="https://i.imgur.com/tkKWUot.png" className="logo-pagina"/>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-block d-lg-flex d-xl-flex justify-content-between align-items-center w-100">
                            <div className="nav-items-left">
                                <li className="nav-item">
                                    <Link to="/listas"
                                        style={
                                            {textDecoration: "none"}
                                    }>
                                        <span type="text"
                                            style={
                                                {
                                                    transition: "transform 0.2s ease-in-out",

                                                    display: "flex",
                                                    alignItems: "center",
                                                    textDecoration: "none",
                                                    color: "white",
                                                    fontSize: "18px"
                                                }
                                            }
                                            onMouseEnter={
                                                (e) => {
                                                    e.target.style.transform = "translateY(-5px)";
                                                }
                                            }
                                            onMouseLeave={
                                                (e) => {
                                                    e.target.style.transform = "translateY(0)";
                                                }
                                        }>
                                            <i className="fas fa-paw"></i>
                                            {" "}
                                            Lista de Mascotas
                                        </span>
                                    </Link>
                                </li>
                            </div>
                            {
                            store.auth === false ? <div className="nav-items-right d-lg-flex d-xl-flex">


                                <li className="nav-item d-none d-lg-block d-xl-block">
                                    <Link to="/login" className="btn btn-outline-light mx-3 rounded-pill btn-lg">
                                        <i className="fa fa-sign-in-alt mx-2"></i>
                                        Iniciar sesión
                                    </Link>
                                </li>

                                <li className="nav-item d-none d-lg-block d-xl-block">
                                    <Link to="/register" className="btn btn-light rounded-pill btn-lg">
                                        <i className="fa fa-user-plus mx-2"></i>
                                        Crear cuenta
                                    </Link>
                                </li>

                                <li className="nav-item d-lg-none d-xl-none">
                                    <Link className="nav-link" to="/login">Iniciar sesión</Link>
                                </li>
                                <li className="nav-item d-lg-none d-xl-none">
                                    <Link className="nav-link" to="/register">Crear cuenta</Link>
                                </li>

                            </div> : <div className="nav-items-right d-lg-flex d-xl-flex">
                                <li className="nav-item d-none d-lg-block d-xl-block">
                                    <div className="dropdown d-flex float-end">
                                        <button className="btn btn-light rounded-pill btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa fa-plus-circle mx-2"></i>
                                            Publicar
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <Link to={"/formencontrado"}>
                                                <button className="dropdown-item float-start">
                                                    Mascota perdida
                                                </button>
                                            </Link>
                                            <Link to={"/formadoptar"}>
                                                <button className="dropdown-item float-start">
                                                    Mascota para adoptar
                                                </button>
                                            </Link>
                                        </ul>
                                    </div>
                                </li>

                                <li className="nav-item d-none d-lg-block d-xl-block">
                                    <div className="dropdown d-flex float-end mx-3">
                                        <button className="btn btn-outline-light btn-lg rounded-pill dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa fa-user mx-2"></i>
                                            {
                                            store.userSession.nombre
                                        } </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <Link to={"/perfil"}>
                                                <button className="dropdown-item float-start">
                                                    Mi perfil
                                                </button>
                                            </Link>
                                            <button className="dropdown-item float-start text-danger"
                                                onClick={handleLogout}>
                                                Cerrar sesión
                                            </button>
                                        </ul>
                                    </div>

                                </li>

                                <li className="nav-item dropdown d-lg-none d-xl-none">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Publicar
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <Link to={"/formencontrado"}>
                                            <button className="dropdown-item float-start">
                                                Mascota perdida
                                            </button>
                                        </Link>
                                        <Link to={"/formadoptar"}>
                                            <button className="dropdown-item float-start">
                                                Mascota para adoptar
                                            </button>
                                        </Link>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown d-lg-none d-xl-none">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {
                                        store.userSession.nombre
                                    } </a>

                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <Link to={"/perfil"}>
                                            <button className="dropdown-item float-start">
                                                Mi perfil
                                            </button>
                                        </Link>
                                        <button className="dropdown-item float-start text-danger"
                                            onClick={handleLogout}>
                                            Cerrar sesión
                                        </button>
                                    </ul>
                                </li>
                            </div>
                        } </ul>
                    </div>
                </div>
            </nav>


            {/* <nav className="w-100 p-3 navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand-xs navbar-expand ">
                            <div className="container-fluid">
                                <Link to="/"
                                    style={
                                        {textDecoration: "none"}
                                }>
            
                                    <img src="https://i.imgur.com/tkKWUot.png" className="logo-pagina"/>
                                </Link>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item fs-6">
                                            <Link to="/listas"
                                                style={
                                                    {textDecoration: "none"}
                                            }>
                                                <span type="text"
                                                    style={
                                                        {
                                                            transition: "transform 0.2s ease-in-out",
                                                            padding: "5px 15px",
                                                            marginLeft: "-12px",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            textDecoration: "none",
                                                            color: "white",
                                                            fontSize: "18px"
                                                        }
                                                    }
                                                    onMouseEnter={
                                                        (e) => {
                                                            e.target.style.transform = "translateY(-5px)";
                                                        }
                                                    }
                                                    onMouseLeave={
                                                        (e) => {
                                                            e.target.style.transform = "translateY(0)";
                                                        }
                                                }>
                                                    <i className="fas fa-paw"
                                                        style={
                                                            {marginRight: "5px"}
                                                    }></i>
                                                    {" "}
                                                    Lista de Mascotas
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                    <form className="d-flex">
                                        {
                                        store.auth === false ? (
                                            <Link to="/login">
                                                <button type="button" className="btn btn-outline-light mx-3 rounded-pill btn-lg">
                                                    <i className="fa fa-sign-in-alt mx-2"></i>
                                                    Iniciar sesión
                                                </button>
                                            </Link>
                                        ) : null
                                    }
                                        {
                                        store.auth === false ? (
                                            <Link to="/register">
                                                <button type="button" className="btn btn-light rounded-pill btn-lg">
                                                    <i className="fa fa-user-plus mx-2"></i>
                                                    Crear cuenta
                                                </button>
                                            </Link>
                                        ) : null
                                    }
                                        {
                                        store.auth === true ? (
                                            <div className="dropdown d-flex float-end">
                                                <button className="btn btn-light rounded-pill btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="fa fa-plus-circle mx-2"></i>
                                                    Publicar
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <Link to={"/formencontrado"}>
                                                        <button className="dropdown-item float-start">
                                                            Mascota perdida
                                                        </button>
                                                    </Link>
                                                    <Link to={"/formadoptar"}>
                                                        <button className="dropdown-item float-start">
                                                            Mascota para adoptar
                                                        </button>
                                                    </Link>
                                                </ul>
                                            </div>
                                        ) : null
                                    }
            
                                        {
                                        store.auth === true ? (
                                            <div className="dropdown d-flex float-end mx-3">
                                                <button className="btn btn-outline-light btn-lg rounded-pill dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="fa fa-user mx-2"></i>
                                                    {
                                                    store.userSession.nombre
                                                } </button>
                                                <ul className="dropdown-menu">
                                                    <Link to={"/perfil"}>
                                                        <button className="dropdown-item float-start">
                                                            Mi perfil
                                                        </button>
                                                    </Link>
                                                    <button className="dropdown-item float-start text-danger"
                                                        onClick={handleLogout}>
                                                        Cerrar sesión
                                                    </button>
                                                </ul>
                                            </div>
                                        ) : null
                                    } </form>
                                 MODO-DARK 
                                     <label className="switch m-2">
                        <input type="checkbox" ></input>
                        <span className="check"></span> 
                      </label>  </div>
                            </div>
                                </nav> */} </>
    );;
};
