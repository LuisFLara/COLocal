import React from 'react';
import { new_brand } from '../services/colocal_api';
import { map } from 'lodash';

class NewBrandForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      file: null
    }    
      this.handleChange = this.handleChange.bind(this)
    
    }

    handleChange(event){
        this.state({
          file: URL.createObjectURL(event.target.files[0])
        })
      }
    
     handleSubmit = (event) => {
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

      render(){
        return(
        <div className="container">
          <br/><br/><br/><br/><br/><br/>
          <center><h3>Registro de la marca</h3></center>
          
          <div className="pt-5 text-center">
            <form onSubmit={(form_values) => this.handleSubmit(form_values)} >
              
              <div className="row">
                <div className="col-md-3">
                  <label  required html_for="p_nombremarca">Nombre de la Marca</label>
                  <input className="form-control" required id="p_nombremarca" />
                </div>
                <div className="col-md-3">
                  <label  required html_for="p_descripcion">Descripcion</label>
                  <input className="form-control" required id="p_descripcion" />
                </div>
                <div className="col-md-3">
                  <label  required html_for="p_categoria">Categoria</label>
                  <input className="form-control" required id="p_categoria" />
                </div>
                <div className="col-md-3">
                  <label  required html_for="p_correo">Correo</label>
                  <input className="form-control" required id="p_correo" />
                </div>
    
              </div>
              <br/>
              <div className="row">
                <div className="col-md-3">
                  <label  required html_for="p_domicilio">Domicilio</label>
                  <input className="form-control" required id="p_domicilio" />
                </div>
                <div className="col-md-3">
                  <label  required html_for="p_telefono">Telefono</label>
                  <input className="form-control" required id="p_telefono" />
                </div>
                <div className="col-md-3">
                  <label  required html_for="p_horario">Horario</label>
                  <input className="form-control" required id="p_horario" />
                </div>
                <div className="col-md-3">
                  <label  required html_for="p_imagenprincipal">Imagen Principal(url)</label>
                    <input className="form-control" required id="p_imagenprincipal" />
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col-md-3">
                  <label  required html_for="p_imagenportada">Imagen de portada(url)</label>
                  <input className="form-control" required id="p_imagenportada" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-9"></div>
                <div className="col-md-3">
    
                  <button className="btn btn-primary m-2" type="submit" >Registrar Marca</button>
    
                </div>
              </div>
            </form>
          </div>
    
          
        </div>

        )
      }
}

export default NewBrandForm;
