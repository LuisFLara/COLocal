import React from 'react';
import { Link } from 'react-router-dom';
import { search_user_data } from '../services/colocal_api';

const LinkDependingUserType = () => {
  if(localStorage.getItem("user") && localStorage.getItem("user") !== "null") {
    console.log(localStorage.getItem("user"))
    let usr_type = search_user_data(localStorage.getItem("user")).then((res) => {
      console.log(res);
      return res
    });
    return usr_type === '1' ? "/ShowBrands" : "/NewBrand"
  }
  return "/SignUp";
}

const Hero = () => {
  return (
    <div className="hero-urban-category">
      <div className="hero-text">
        <h2 className="display-1 gradient-text">CONSUME LOCAL</h2>
        <p className="gradient-text text-white-50">Una forma diferente de comprar.</p>
        <Link to={LinkDependingUserType()} className="btn btn-secondary">¿ESTÁS LISTO?</Link>
      </div>
    </div>
  );
}

export default Hero;