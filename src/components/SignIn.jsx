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
  console.log(data);
  validate_user(data).then((res) =>{
    console.log(res);
    if(res.data.datos[0].u_idusuario) {
      localStorage.setItem("user", true);
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
        <div className="container">
          <br/><br/>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <label className="form-field d-block mx-auto" html_for="Correo">Correo electronico</label>
              <input className="form-control" id="Correo"/>
              <br/>
              <label className="form-field d-block mx-auto" html_for="Contrasena">Contraseña</label>
              <input className="form-control" id="Contrasena" type="password" autoComplete="off"/>
              <br/>
              <button className="btn btn-success" type="submit">¡Iniciar sesión!</button>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;