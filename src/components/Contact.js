import React from 'react';

const Contact = () => {
    return (
        
        <div>
            <br></br>
        <section id="Contact" class="signup-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto text-center">

                        <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 class="text-white mb-5">¿Quieres ser parte de este proyecto? <br></br>¡Te Contactamos!</h2>

                        <form class="form-inline d-flex">
                            <input type="email" class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" placeholder="Ingresa tu correo electrónico"></input>
                                <button type="submit" class="btn btn-primary mx-auto">Enviar</button>
                        </form>

                        </div>
                    </div>
                </div>
        </section>
    
        <section class="contact-section bg-black">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Dirección</h4>
                                <hr class="my-4"></hr>
                                <div class="small text-black-50">13 de Septiembre #677, Colima, MX</div>
                            </div>
                        </div>
                        
                    </div>

                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-envelope text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Correo</h4>
                                <hr class="my-4"></hr>
                                    <div class="small text-black-50">
                                        <a href="#a">Colocal@gmail.com</a>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Contacto</h4>
                                <hr class="my-4"></hr>
                                    <div class="small text-black-50">312-194-25-13</div>
                            </div>
                        </div>
                    </div>

                 

                        

                </div>

            </div>
        </section>
        </div>
        

    );
}

export default Contact;