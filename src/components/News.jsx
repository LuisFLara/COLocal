import React from 'react';
import {
    Link
} from "react-router-dom";




const News = (props) => {
    return (
        <div>
            <br/>
            <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4">

                    <center><h3>Noticias</h3></center>

                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">                                                                 
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src="../img/marcas/estelarMarca.jpg"   alt="First slide"/> 
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5 style={{ backgroundColor: "black"}}>Nueva linea de otoño-invierno</h5>
                                    
                                    </div>

                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="../img/marcas/acevesMarca.jpg" alt="First slide"/> 
                                        <div class="carousel-caption d-none d-md-block">
                                        <h5 style={{ backgroundColor: "black"}}>Nuevas diseños de gorras en piel</h5>
                                    
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="../img/marcas/hispanoMarca.jpg"  alt="First slide"/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5 style={{ backgroundColor: "black" }}>Linea de ropa unisex, en tendencia</h5>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Anterior</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Siguiente</span>
                                </a>
                    
                            </div>

                        </div>

                    </div>

                <div class="col-md-7">
                    <div class="row">

                        <div class="col-md-4">
                            <a href=""><img src="../img/marcas/Cincar.jpeg" style={{ height: "100%", width: "100%" }} alt="" /> </a>
                        </div>
                        <div class="col-md-8">
                                <p><b>Cincar</b>, una agencia de bicicletas con un toque familiar abre sus puertas al público, y en esta ocasión con promociones y muchos descuentos, ¡No te lo puedes perder!.</p>

                        </div>

                    </div>
                    <div class="row">

                        <div class="col-md-4">
                                <a href=""><img src="../img/marcas/ArtesaniasTX.jpeg" style={{ height: "100%", width: "100%" }} alt="" /> </a>
                        </div>
                        <div class="col-md-8">
                            <p>Todas las artesanias de <b>Artesanias TX</b> con el 30% de descuento, ¡Apurate que se acaban!.</p>

                        </div>

                    </div>
                    <div class="row">

                        <div class="col-md-4">
                            <a href=""><img src="../img/marcas/Kinny.jpeg" style={{height:"100%", width:"100%"}} alt=""/> </a>
                        </div>
                        <div class="col-md-8">
                            <p>Corte de dama al 2x1 todo el mes de noviembre, solo menciona que nos viste en <b>Colocal</b> .</p>

                        </div>

                    </div>
                </div>
                </div>
            </div>
        </div>

          

    )
}

export default News;

