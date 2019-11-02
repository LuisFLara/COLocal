import React from 'react';
import { search_user_data } from '../services/colocal_api';

search_user_data(10).then(res => {
  console.log(res);
})
const Hero = () => {
  return (
    <div className="hero-urban-category">
      <div className="hero-text">
        <h2 className="display-1 gradient-text">CONSUME LOCAL</h2>
        <p className="gradient-text text-white-50">Una forma diferente de comprar.</p>
        <a href="#about" class="btn btn-secondary">¿ESTÁS LISTO?</a>
      </div>
    </div>
  );
}

export default Hero;