import React from 'react';


const Categories = () => {
    return (

        <section id="projects" class="projects-section bg-light">
            <div class="container">
     
                <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                                <div class="col-lg-6">
                                <img class="img-fluid" style={{ width: "100%" }}  src="img/boutiqueCategoria.jpg" alt=""></img>
                                </div>
                                <div class="col-lg-6">
                                    <div class="bg-black text-center h-100 project">
                                        <div class="d-flex h-100">
                                            <div class="project-text w-100 my-auto text-center text-lg-left">
                                                <h4 class="text-white">Moda</h4>
                                                <p class="mb-0 text-white-50">Un lugar dónde puedes consumir solo lo mejor en moda, todo producido en el hermoso estado de colima, ¿Te atreves a tomar el reto?.</p>
                                                <hr class="d-none d-lg-block mb-0 ml-0"></hr>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                               
                <div class="row justify-content-center no-gutters">
                                    <div class="col-lg-6">
                                    <img class="img-fluid" style={{ width: "100%" }} src="img/artesaniasCategoria.jpg" alt=""></img>
                                    </div>
                                    <div class="col-lg-6 order-lg-first">
                                        <div class="bg-black text-center h-100 project">
                                            <div class="d-flex h-100">
                                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                                    <a href="#"><h4 class="text-white">Artesanias</h4></a>
                                                <p class="mb-0 text-white-50">Por que lo mejor siempre es aquello hecho con pasión, descubre lo que colima te ofrece, y dejate envolver de la calidad de nuestros artesanos colimenses</p>
                                                <hr class="d-none d-lg-block mb-0 mr-0"></hr>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div class="col-lg-6">
                        <img class="img-fluid" style={{ width: "100%", height:"100%" }} src="img/serviciosCategoria.jpg" alt=""></img>
                    </div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Servicios</h4>
                                    <p class="mb-0 text-white-50">Servicios al alcance de un click, súmate a los miles de clientes que disfrutan de un buen servicio, siempre con la mejor calidad.</p>
                                    <hr class="d-none d-lg-block mb-0 ml-0"></hr>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
     


    );
}

export default Categories;