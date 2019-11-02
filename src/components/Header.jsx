import React from 'react';
import {
  Link
} from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top text-white bg-header-gradient">
      <a className="navbar-brand" href="/"><img src="img/COLocal.png" alt="COLocal" className="colocal-img-1" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Inicio <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to="/showBrands" className="nav-link">Nuestros socios</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Contacto</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Sobre nosotros</Link>
          </li>
        </ul>
        <Link to="/SignUp" className="btn btn-primary m-2 my-sm-0 col-md-12 col-lg-2 col-xl-1">¡Registrate!</Link>
        <Link to="/SignIn" className="btn btn-outline-primary m-2 my-sm-0 col-md-12 col-lg-2 col-xl-1">Inicia sesión</Link>
      </div>
    </nav>
  )
}

export default Header;