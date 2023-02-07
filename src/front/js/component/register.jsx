import React from "react";

export const Register = () => {

    return (
        <div className="mx-auto w-50 card text-center m-4">

            <form>
                <div className="col col-3 d-flex mx-auto">
                    <div className>
                        <h7>
                            <b>Nombre</b>
                        </h7>
                        {/* <label for="exampleInputEmail1" className="form-label">Email</label> */}
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                </div>
                <div className>
                    <h7>
                        <b>Apellido</b>
                    </h7>
                    <div className="col col-3 d-flex mx-auto">
                        {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
                        <input type="text" className="form-control" id="exampleInputPassword1"/></div>
                </div>

                <div className="col col-3 d-flex mx-auto">
                    <div className>
                        <h7>
                            <b>Correo Electrónico</b>
                        </h7>
                        {/* <label for="exampleInputEmail1" className="form-label">Email</label> */}
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                </div>
                <div className>
                    <h7>
                        <b>Nombre de Usuario</b>
                    </h7>
                    <div className="col col-3 d-flex mx-auto">
                        {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
                        <input type="Text" className="form-control" id="exampleInputPassword1"/></div>
                    <h7>
                        <strong>Contraseña</strong>
                    </h7>
                    <div className="col col-3 d-flex mx-auto">
                        {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
                        <input type="password" className="form-control" id="exampleInputPassword1"/></div>
                    <button type="submit" className="  d-flex mx-auto btn btn-warning ">Registrarse</button>
                </div>
            </form>


        </div>
    );
};
