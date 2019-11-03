import React from 'react';

const Contact = () => {
    return (
        
        <div>
            <br></br>
        <section id="Contact" className="signup-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-lg-8 mx-auto text-center">

                        <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 className="text-white mb-5">¿Quieres ser parte de este proyecto? <br></br>¡Te Contactamos!</h2>

                        <form className="form-inline d-flex">
                            <input type="email" className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" placeholder="Ingresa tu correo electrónico"></input>
                                <button type="submit" className="btn btn-primary mx-auto">Enviar</button>
                        </form>

                        </div>
                    </div>
                </div>
        </section>
    
        <section className="contact-section bg-black">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3 mb-md-5">
                        <div className="card py-4 h-100">
                            <div className="card-body h-auto text-center">
                                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Dirección</h4>
                                <hr className="my-4"></hr>
                                <div className="small text-black-50">13 de Septiembre #677, Colima, MX</div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-md-4 mb-3 mb-md-5">
                        <div className="card py-4 h-100">
                            <div className="card-body h-auto text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Correo</h4>
                                <hr className="my-4"></hr>
                                    <div className="small text-black-50">
                                        <a href="#a">Colocal@gmail.com</a>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3 mb-md-5">
                        <div className="card py-4 h-100">
                            <div className="card-body h-auto text-center">
                                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Contacto</h4>
                                <hr className="my-4"></hr>
                                    <div className="small text-black-50">312-194-25-13</div>
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