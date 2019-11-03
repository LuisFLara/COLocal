import React from 'react';


const Categories = () => {
    return (

        <section id="projects" className="projects-section bg-light">
            <div className="container">
     
                <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                                <div className="col-lg-6">
                                <img className="img-fluid"  tyle={{ width: "100%" }}  src="img/boutiqueCategoria.jpg" alt=""></img>
                                </div>
                                <div className="col-lg-6">
                                    <div className="bg-black text-center h-100 project">
                                        <div className="d-flex h-100">
                                            <div className="project-text w-100 my-auto text-center text-lg-left">
                                                <h4 className="text-white">Moda</h4>
                                                <p className="mb-0 text-white-50">Un lugar dónde puedes consumir solo lo mejor en moda, todo producido en el hermoso estado de colima, ¿Te atreves a tomar el reto?.</p>
                                                <hr className="d-none d-lg-block mb-0 ml-0"></hr>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                <div className="row justify-content-center no-gutters">
                                    <div className="col-lg-6">
                                    <img className="img-fluid" style={{ width: "100%" }} src="img/artesaniasCategoria.jpg" alt=""></img>
                                    </div>
                                    <div className="col-lg-6 order-lg-first">
                                        <div className="bg-black text-center h-100 project">
                                            <div className="d-flex h-100">
                                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                                    <a href="#"><h4 className="text-white disabled">Artesanias</h4></a>
                                                <p className="mb-0 text-white-50">Por que lo mejor siempre es aquello hecho con pasión, descubre lo que colima te ofrece, y dejate envolver de la calidad de nuestros artesanos colimenses</p>
                                                <hr className="d-none d-lg-block mb-0 mr-0"></hr>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div className="col-lg-6">
                        <img className="img-fluid" style={{ width: "100%", height:"100%" }} src="img/serviciosCategoria.jpg" alt=""></img>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">Servicios</h4>
                                    <p className="mb-0 text-white-50">Servicios al alcance de un click, súmate a los miles de clientes que disfrutan de un buen servicio, siempre con la mejor calidad.</p>
                                    <hr className="d-none d-lg-block mb-0 ml-0"></hr>
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