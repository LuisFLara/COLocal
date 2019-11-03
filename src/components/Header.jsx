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
        </ul>
        <Link to="/SignUp" className="btn btn-outline-success">¡Registrate!</Link>
        <Link to="/SignIn" className="btn btn-outline-primary">Inicia sesión</Link>
      </div>
    </nav>
  )
}

export default Header;