import React from "react";

export const Nosotros = () => {
    return (
        <>
            <div className="contenedor-grande">
                <div className="caja-nosotros">
                    <div className="imagen-nosotros">
                        <img src="https://i.ibb.co/LrfXxYv/IMG-20230223-151023.jpg"/>
                    </div>
                    <div className="contenido-caja">
                        <h2>
                            Analía Barboza
                            <br/>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                {" "}
                                Montevideo
                            </span>
                        </h2>
                    </div>
                </div>
                <div className="caja-nosotros">
                    <div className="imagen-nosotros">
                        <img src="https://i.ibb.co/hK4HWmG/Caro-app-voil.jpg"/>
                    </div>
                    <div className="contenido-caja">
                        <h2>
                            Carolina Castro
                            <br/>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                {" "}
                                Rivera
                            </span>
                        </h2>
                    </div>
                </div>
                <div className="caja-nosotros">
                    <div className="imagen-nosotros">
                        <img src="https://i.ibb.co/N2F5n7K/IMG-20230223-150458.jpg"/>
                    </div>
                    <div className="contenido-caja">
                        <h2>
                            Santiago Duarte
                            <br/>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                {" "}
                                Durazno
                            </span>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="contenedor-grande">
                <div className="caja-nosotros">
                    <div className="imagen-nosotros">
                        <img src="https://i.ibb.co/FKKzWPn/IMG-20230223-145539.jpg"/>
                    </div>
                    <div className="contenido-caja">
                        <h2>
                            Valentín Fernández
                            <br/>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                {" "}
                                Maldonado
                            </span>
                        </h2>
                    </div>
                </div>
                <div className="caja-nosotros">
                    <div className="imagen-nosotros">
                        <img src="https://i.ibb.co/kJt81B5/IMG-20230223-141123.jpg"/>
                    </div>
                    <div className="contenido-caja">
                        <h2>
                            Axel Olivera
                            <br/>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                {" "}
                                Tacuarembó
                            </span>
                        </h2>
                    </div>
                </div>
            </div>

            {/* <div className="contenedor-grande">
        <div className="caja-nosotros">
          <div className="caja-cartas"></div>
          <div className="intro-contenido">
            <h1>Analía Barboza</h1>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg> Montevideo</p>
            <p>Me interesa la educación en todas sus facetas. Aprendo Lengua de Señas Uruguaya para comunicarme con las personas sordas de nuestra comunidad.</p>
          </div>
        </div>
        <div className="caja-nosotros">
          <div className="caja-cartas"></div>
          <div className="intro-contenido">
            <h1>Carolina Castro</h1>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg> Rivera</p>
            <p>Me considero fanática de todo lo que tenga misterio, amo leer y aprender nuevos idiomas. Comencé a programar a los 12 años a través de Ruby.</p>
          </div>
        </div>
        <div className="caja-nosotros">
          <div className="caja-cartas"></div>
          <div className="intro-contenido">
            <h1>Santiago Duarte</h1>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg> Durazno</p>
            <p>Dedico gran parte de mi tiempo a programar, ya que lo considero un pasatiempo en extremo gratificante, en resumen, es lo mío.</p>
          </div>
        </div>
        <div className="caja-nosotros">
          <div className="caja-cartas"></div>
          <div className="intro-contenido">
            <h1>Valentín Fernández</h1>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg> Maldonado</p>
            <p>Soy estudiante universitario y desarrollador Full Stack. Me interesa la programación desde los 12 años cuando participé en un proyecto con Arduino y Legos.</p>
          </div>
        </div>
        <div className="caja-nosotros">
          <div className="caja-cartas"></div>
          <div className="intro-contenido">
            <h1>Axel Olivera</h1>
            <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg> Tacuarembó
            </p>
            <p>
            Me fascinan los atardeceres, normalmente  hago running a esas horas. Y sobre la programación, que decir, es mi vida.
            </p>
          </div>
        </div>
      </div> */} </>
    );
};
