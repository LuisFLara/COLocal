import React from 'react';
import { validate_user } from '../services/colocal_api';
import { map } from 'lodash';

const handleSubmit = (event) =>
{
  let data = {}
  map(event.currentTarget, (input) => {
    return data[input.id] = input.value;
  })
  event.preventDefault();
  validate_user(data).then((res) =>{
    if(res.data.datos[0].u_idusuario) {
      localStorage.setItem("user", res.data.datos[0].u_idusuario);
      return window.location.replace("/");
    }
    alert('credenciales incorrectas')
  }).catch((error) => {
    console.log(error);
  });
}

const SignIn = () =>{
  return (
    <div className="mt-5 pt-5 text-center">
      <form onSubmit={(form_values) => handleSubmit(form_values)}>
        <label className="form-field d-block mx-auto" html_for="Correo">Correo electronico</label>
        <input className="form-field d-block mx-auto" id="Correo"/>
        <label className="form-field d-block mx-auto" html_for="Contrasena">Contraseña</label>
        <input className="form-field d-block mx-auto" id="Contrasena" type="password" autoComplete="off"/>
        <input className="btn btn-primary m-2" type="submit" />
      </form>
    </div>
  );
}

export default SignIn;