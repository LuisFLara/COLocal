import React from 'react';
import { validate_user } from '../services/colocal_api';
import { map } from 'lodash';

const handleSubmit = (event) =>
{
  let data = {}
  map(event.currentTarget, (input) => {
    data[input.id] = input.value;
    return data
  });
  validate_user(data).then((res) =>{
    if(res.code >= 200 && res.code <= 400){
      return window.location.replace("/");
    }
  }).catch((error) => {
    console.log(error);
  });
}

const SignIn = () =>{
  return (
    <div className="mt-5 pt-5 text-center">
      <form onSubmit={(form_values) => handleSubmit(form_values)}>
        <label className="form-field d-block mx-auto" html_for="email">Correo electronico</label>
        <input className="form-field d-block mx-auto" id="email"/>
        <label className="form-field d-block mx-auto" html_for="password">Contraseña</label>
        <input className="form-field d-block mx-auto" id="password" type="password" autoComplete="off"/>
        <input className="btn btn-primary m-2" type="submit" />
      </form>
    </div>
  );
}

export default SignIn;