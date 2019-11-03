import React from 'react';
import { new_brand } from '../services/colocal_api';
import { map } from 'lodash';

const handleSubmit = (event) => {
  let data = {}
  if(!localStorage.getItem('user') || localStorage.getItem('user') == "null"){
    alert('Inicie sesión para continuar');
    event.preventDefault();
    return window.location.replace("/SignIn");
  }
  data['p_id_usuario'] = localStorage.getItem('user');
  map(event.currentTarget, (input) => {
    return data[input.id] = input.value;
  })
  event.preventDefault();
  new_brand(data).then((res) =>{
    debugger;
    return window.location.replace("/Brandings");
  }).catch((error) => {
    console.log(error);
  });
}
const NewBrandForm = () => {
  return(
    <div className="mt-5 pt-5 text-center">
      <form onSubmit={(form_values) => handleSubmit(form_values)}>
        <label className="form-field d-block mx-auto" required html_for="p_nombremarca">Nombre de la Marca</label>
        <input className="form-field d-block mx-auto" required id="p_nombremarca" />
        <label className="form-field d-block mx-auto" required html_for="p_descripcion">Descripcion</label>
        <input className="form-field d-block mx-auto" required id="p_descripcion" />
        <label className="form-field d-block mx-auto" required html_for="p_categoria">Categoria</label>
        <input className="form-field d-block mx-auto" required id="p_categoria" />
        <label className="form-field d-block mx-auto" required html_for="p_correo">Correo</label>
        <input className="form-field d-block mx-auto" required id="p_correo" />
        <label className="form-field d-block mx-auto" required html_for="p_domicilio">Domicilio</label>
        <input className="form-field d-block mx-auto" required id="p_domicilio" />
        <label className="form-field d-block mx-auto" required html_for="p_telefono">Telefono</label>
        <input className="form-field d-block mx-auto" required id="p_telefono" />
        <label className="form-field d-block mx-auto" required html_for="p_horario">Horario</label>
        <input className="form-field d-block mx-auto" required id="p_horario" />
        <label className="form-field d-block mx-auto" required html_for="p_imagenprincipal">Imagen Principal(url)</label>
        <input className="form-field d-block mx-auto" required id="p_imagenprincipal" />
        <label className="form-field d-block mx-auto" required html_for="p_imagenportada">Imagen de portada(url)</label>
        <input className="form-field d-block mx-auto" required id="p_imagenportada" />
        <input className="btn btn-primary m-2" type="submit" />
      </form>
    </div>
  );
}

export default NewBrandForm;