import React from 'react';
import { new_user } from '../services/colocal_api';
import { map } from 'lodash';

const handleSubmit = (event) =>
{
  let data = {}
  map(event.currentTarget, (input) => {
    return data[input.id] = input.value;
  })
  if (data['p_idtipousuario'].checked){
    data['p_idtipousuario'] = 2;
  }
  else {
    data['p_idtipousuario']= 1;
  }
  new_user(data).then((res) =>{
    event.preventDefault();
    return window.location.replace("/SignIn");
  }).catch((error) => {
    console.log(error);
  });
}

const SignUp = () => {
  return (
    <div className="mt-5 pt-5 text-center">
      <form onSubmit={(form_values) => handleSubmit(form_values)} className="d-flex justify-content-around">
        <div className="container">
          <br/>

          <div className="row">
            <div className="col-md-4">
              <label className="form-field d-block" html_for="p_nombre">Nombre</label>
              <input className="form-control" required id="p_nombre" />
            </div>

            <div className="col-md-4">
              <label  html_for="p_primerapellido">Primer Apellido</label>
              <input className="form-control" required id="p_primerapellido" />
            </div>

            <div className="col-md-4">
              <label html_for="p_segundoapellido">Segundo Apellido</label>
              <input className="form-control" id="p_segundoapellido" />
            </div>

          </div>
          <br/>
          <div className="row">
            <div className="col-md-4">
              <label  html_for="p_fechanacimiento">Fecha de nacimiento</label>
              <input className="form-control" required id="p_fechanacimiento" type="date" />
            </div>

            <div className="col-md-4">
              <label  html_for="p_telefono">Telefono</label>
              <input className="form-control" required id="p_telefono" />
            </div>

            <div className="col-md-4">
              <label  html_for="p_idtipousuario">Vendedor?</label>
              <input className="form-control" id="p_idtipousuario" type="checkbox" />
            </div>

          </div>
          <br/>
          <div className="row">
            <div className="col-md-4">
              <label  html_for="p_correo">Correo electronico</label>
              <input className="form-control" required id="p_correo" type="email" />
            </div>

            <div className="col-md-4">
              <label  html_for="p_contrasena">Contraseña</label>
              <input className="form-control" required id="p_contrasena" type="password" autoComplete="off" />
            </div>

      

          </div>
          <br/>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4" ><h3 ><strong>Domicilio</strong></h3></div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-4">
              <label html_for="d_codigopostal">Código Postal</label>
              <input className="form-control" required id="d_codigopostal" />
            </div>
            <div className="col-md-4">
              <label  html_for="d_calle">Calle</label>
              <input className="form-control" required id="d_calle" />
            </div>
            <div className="col-md-4">
              <label  html_for="d_colonia">Colonia</label>
              <input className="form-control" required id="d_colonia" />
            </div>

          </div>
          <br/>
          <div className="row">
            <div className="col-md-4">
              <label  html_for="d_noexterior">No. Exterior</label>
              <input className="form-control" required id="d_noexterior" />
            </div>
            <div className="col-md-4">
              <label  html_for="d_nointerior">No. Interior</label>
              <input className="form-control" id="d_nointerior" />
            </div>
           
            <div className="col-md-4">
              <label  html_for="d_entidadfederativa">Entidad Federativa</label>
              <input className="form-control" required id="d_entidadfederativa" />
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-4">
              <label  html_for="d_municipio">Municipio</label>
              <input className="form-control" required id="d_municipio" />
            </div>
            <div className="col-md-4">
              <label html_for="d_entrecalle1">Entre la calle:</label>
              <input className="form-control" id="d_entrecalle1" />
            </div>
            <div className="col-md-4">
              <label  html_for="d_entrecalle2">Y la calle:</label>
              <input className="form-control" id="d_entrecalle2" />
            </div>
          
          </div>
          <br/>
          <div className="row">
            <div className="col-md-4">
              <label html_for="d_referencia">Referencia</label>
              <input className="form-control" id="d_referencia" />
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-10"></div>
            <div className="col-md-1">
              <button className="btn btn-primary" type="submit">Registrarme</button>
            </div>
          </div>
          <br/>
        </div>

      
    
      </form>
    </div>
  );
}

export default SignUp;