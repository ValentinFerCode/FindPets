import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Navigate, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import Swal from "sweetalert2";

export const RefugioPaypal = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  //
  const [paypalid, setPaypalID] = useState();
  //
  useEffect(() => {
    window.scrollTo(0, 0);
    if (store.userSession.paypal_url != null) {
      setPaypalID(store.userSession.paypal_url);
    }
  }, []);
  //
  //
  function paypalRefugio(e) {
    e.preventDefault();
    Swal.fire({
      title: "¿Estás seguro/a?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, agregar Paypal!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        if (paypalid == null) {
          Swal.fire({
            icon: "error",
            title: "Ups...",
            text: "¡Paypal ID esta vacio!",
          });
        } else {
          actions.paypalRefugio(store.oneUser.id, paypalid); // actualizamos la contraseña del usuario
          navigate("/perfil"); //usamos navigate para redireccionar
        }
      }
    });
    //
  }

  return (
    <div className="container-fluid w-75">
      {store.auth === false || store.userSession.tipo == "persona" ? (
        <Navigate to="/" />
      ) : (
        <div className="jumbotron m-3">
          <div className="rounded border border-primary">
            <h1 className="mx-auto text-center text-primary border-bottom border-primary">
              Agregar Donaciones
            </h1>
            {/* TITULO */}
            <div className="container w-75 mx-auto my-3 ">
              <form onSubmit={paypalRefugio}>
                <div className="form-group row">
                  <div className="col-md-8 mb-3 mx-auto fw-light lh-base">
                    Para agregar las donaciones para tu refugio, necesitas
                    generar un ID de Paypal,para realizar esto necesitas seguir
                    unas instrucciónes para mas información haz{" "}
                    <a href="https://www.appinvoice.com/es/s/documentacion/como-obtener-el-id-de-cliente-y-la-clave-secreta-de-paypal-22">
                      click aquí
                    </a>
                    .
                  </div>
                  <div className="col-md-8 mb-3 mx-auto">
                    <label htmlFor="paypalid" className="form-label">
                      Paypal ID:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={paypalid}
                      onChange={(e) => setPaypalID(e.target.value)}
                      id="paypalid"
                    />
                  </div>
                </div>
                <div className="col-md-8 mb-3 mx-auto fw-light lh-base fs-6 text-muted">
                  *Nota: Si ingresas un ID erróneo no te lo tomara como
                  incorrecto, pero las donaciónes no van aparecer en tu perfil.
                </div>

                <div className="d-grid gap-2 col-6 mx-auto mb-4">
                  <button type="submit" className="btn btn-lg btn-primary">
                    ENVIAR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

RefugioPaypal.propTypes = {
  match: PropTypes.object,
};
