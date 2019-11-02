import React from 'react';
import { new_user } from '../services/colocal_api';
import { map } from 'lodash';

const handleSubmit = (event) =>
{
  let data = {}
  map(event.currentTarget, (input) => {
    return data[input.id] = input.value;
  })
  new_user(data).then((res) =>{
    if(res.code >= 200 && res.code <= 400){
      return window.location.replace("/SignIn");
    }
  }).catch((error) => {
    console.log(error);
  });
}

const SignUp = () => {
  return (
    <div className="mt-5 pt-5 text-center">
      <form onSubmit={(form_values) => handleSubmit(form_values)} className="d-flex justify-content-around">
        <div className="pull-left">
          <label className="form-field d-block" html_for="p_nombre">Nombre</label>
          <input className="form-field d-block" required id="p_nombre"/>
          <label className="form-field d-block" html_for="p_primerapellido">Primer Apellido</label>
          <input className="form-field d-block" required id="p_primerapellido"/>
          <label className="form-field d-block" html_for="p_segundoapelido">Segundo Apellido</label>
          <input className="form-field d-block" id="p_segundoapelido"/>
          <label className="form-field d-block" html_for="p_fechanacimiento">Fecha de nacimiento</label>
          <input className="form-field d-block" required id="p_fechanacimiento" type="date"/>
          <label className="form-field d-block" html_for="p_telefono">Telefono</label>
          <input className="form-field d-block" required id="p_telefono"/>
          {/* <label className="form-field d-block" html_for="p_vendedor">Vendedor?</label>
          <input className="form-field d-block" id="p_vendedor" type="checkbox"/> */}
          <label className="form-field d-block" html_for="p_correo">Correo electronico</label>
          <input className="form-field d-block" required id="p_correo" type="email"/>
          <label className="form-field d-block" html_for="p_contrasena">Contraseña</label>
          <input className="form-field d-block" required id="p_contrasena" type="password" autoComplete="off"/>
        </div>
        <div className="pull-right order-2">
          <label className="form-field d-block ml-auto" html_for="d_calle">Calle</label>
          <input className="form-field d-block ml-auto" required id="d_calle"/>
          <label className="form-field d-block ml-auto" html_for="d_colonia">Colonia</label>
          <input className="form-field d-block ml-auto" required id="d_colonia"/>
          <label className="form-field d-block ml-auto" html_for="d_nointerior">No. Exterior</label>
          <input className="form-field d-block ml-auto" required id="d_nointerior"/>
          <label className="form-field d-block ml-auto" html_for="d_no_interior">No. Interior</label>
          <input className="form-field d-block ml-auto" id="d_no_interior"/>
          <label className="form-field d-block ml-auto" html_for="d_codigopostal">Código Postal</label>
          <input className="form-field d-block ml-auto" required id="d_codigopostal"/>
          <label className="form-field d-block ml-auto" html_for="d_entidadfederativa">Entidad Federativa</label>
          <input className="form-field d-block ml-auto" required id="d_entidadfederativa"/>
          <label className="form-field d-block ml-auto" html_for="d_municipio">Municipio</label>
          <input className="form-field d-block ml-auto" required id="d_municipio"/>
          <label className="form-field d-block ml-auto" html_for="d_entrecalle1">Entre la calle:</label>
          <input className="form-field d-block ml-auto" id="d_entrecalle1"/>
          <label className="form-field d-block ml-auto" html_for="d_entrecalle2">Y la calle:</label>
          <input className="form-field d-block ml-auto" id="d_entrecalle2"/>
          <label className="form-field d-block ml-auto" html_for="d_referencia">Referencia</label>
          <input className="form-field d-block ml-auto" id="d_referencia"/>
        </div>
        <input className="btn m-2 btn-primary btn-h-40" type="submit" />
      </form>
    </div>
  );
}

export default SignUp;