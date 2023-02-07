import React from "react";


export const FormAdoptar = () => {

    return (

        <div className="mx-auto w-50 card text-center m-4  rounded-5   border border-success p-2 mb-2   border border-5"
            style={
                {background: "#B9F3FC"}
        }>
            <form>


                <div className="col col-3 d-flex mx-auto">
                    <div className>
                        <h7>
                            <b>Genero</b>
                        </h7>

                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                </div>
                <div className>
                    <h7>
                        <b>Nombre</b>
                    </h7>
                    <div className="col col-3 d-flex mx-auto">

                        <input type="text" className="form-control" id="exampleInputPassword1"/></div>
                </div>

                <div className="col col-3 d-flex mx-auto">
                    <div className>
                        <h7>
                            <b>Tamaño</b>
                        </h7>

                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                </div>
                <div className>
                    <h7>
                        <b>Color</b>
                    </h7>
                    <div className="col col-3 d-flex mx-auto">

                        <input type="Text" className="form-control" id="exampleInputPassword1"/></div>
                    <h7>
                        <strong>Edad</strong>
                    </h7>
                    <div className="col col-3 d-flex mx-auto">

                        <input type="password" className="form-control" id="exampleInputPassword1"/></div>

                </div>
                <h7>
                    <strong>Raza</strong>
                </h7>
                <div className="col col-3 d-flex mx-auto">

                    <input type="password" className="form-control" id="exampleInputPassword1"/></div>
                <h7>
                    <strong>Estado</strong>
                </h7>
                <div className="col col-3 d-flex mx-auto">

                    <input type="password" className="form-control" id="exampleInputPassword1"/></div>

                <strong>Especie</strong>

                <div className="col col-3 d-flex mx-auto">

                    <input type="password" className="form-control" id="exampleInputPassword1"/></div>
                <button type="submit" className="  d-flex mx-auto btn btn-warning ">Enviar</button>


            </form>
        </div>

    );
};
