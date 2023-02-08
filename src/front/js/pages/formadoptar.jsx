import React from "react";


export const FormAdoptar = () => {

    return (
        <>
            <div className="d-flex w-100 justify-content-center ">
                {/* encerrar todo este card dentro de una etiqueta Link */}

                <div className="mx-auto w-50 card text-center m-4  rounded-5   border border-success p-2 mb-2   border border-5"
                    style={
                        {background: "#B9F3FC"}
                }>
                    <div className="row g-0">
                        <p>
                            <div className="col-md-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHzfL9ih32nOG1UrP1LPIifbNHatB0P-GUIg&usqp=CAU" className="img-fluid rounded-start" alt="..."/>
                            </div>
                        </p>
                        <div className="col-md-8">
                            <p></p>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Scooby-Doo
                                </h5>
                                <p className="card-text colm">
                                    {/* hcer filas aquI */} </p>
                                <p className="card-text">
                                    <small className="text">
                                        <div>
                                            <strong>
                                                <p>
                                                    Genero:</p>

                                                <p>Tamaño:
                                                </p>
                                                <p>
                                                    Color:</p>
                                                <p>
                                                    Nombre:</p>
                                                <p>
                                                    Edad:</p>
                                                <p>
                                                    Raza :</p>
                                                <p>
                                                    Estado:</p>
                                                <p>
                                                    Especie:</p>

                                            </strong>
                                            <p>
                                                <button type="button" class="btn btn-info">Adoptar</button>
                                            </p>
                                        </div>
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
};


// pipenv install flask-jwt-extended
