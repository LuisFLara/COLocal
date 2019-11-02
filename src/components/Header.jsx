import React from 'react';

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top text-white">
      <a className="navbar-brand" href="/">{props.children}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Inicio <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Nuestros socios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contacto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Sobre nosotros</a>
          </li>
        </ul>
        <button className="btn btn-primary m-2 my-sm-0 col-md-12 col-lg-2 col-xl-1">¡Registrate!</button>
        <button className="btn btn-outline-primary m-2 my-sm-0 col-md-12 col-lg-2 col-xl-1">Inicia sesión</button>
      </div>
    </nav>
  )
}

export default Header;