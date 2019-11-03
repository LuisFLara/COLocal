import React from 'react';
import { get_brands } from '../services/colocal_api';
import { get, find, isEmpty } from 'lodash';

class BrandContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brandContent: {
        categoria: "Ropa",
        correo: "Carlos@mail.com",
        descripcion: "Una marca diferente, del barrio a tu guardaropa",
        domicilio: "13 De Septiembre 677 Col. Villas de oro",
        horario: "Lunes a viernes 9am - 5pm",
        id_marca: 1,
        imagenportada: null,
        imagenprincipal: "../img/marcas/estelarMarca.jpg",
        nombremarca: "Trivandal",
        telefono: "3121942513"

      }
    }

  }

  componentDidMount() {
    get_brands().then((res) => {
      this.setState((state, props) => {
        return{
          brandContent: find(res.data.datos, (r) => { return r.id_marca == this.props.id})
        }
      });
    }).catch((error) => {
      console.log(error);
    })
  }

  renderBrandPortrait(){
    return isEmpty(this.state.brandContent) ? 'imagenportada' : "../img/noimage.jpeg";
  }

  renderBrandProfile(){
    return isEmpty(this.state.brandContent) ? 'imagenprincipal' : "../img/noimage.jpeg";
  }

  render() {
    console.log(this.state)
    return (

      <div className="container" style={{paddingTop:"75px"}}>
        <div style={{position:"relative", left:"0px", top:"0px"}}>
          <img src={this.renderBrandPortrait()} style={{
            width: "100%", height: "400px", position: "relative",top: "0",left: "0"}} className="image-fluid" alt=""/>


          <div  style={{position: "absolute",
          top: "250px",
          left: "100px",
          }}>
            <img src={this.renderBrandProfile()}  style={{height:200, width:200,}} alt=""/>
          </div>

          <div style={{
            position: "absolute",
            top: "340px",
            left: "325px",}}>
              <label htmlFor="" style={{fontWeight:"bold", color:"white", fontSize:35}}>{get(this.state.brandContent,'nombremarca')}</label>
            </div>
          <div style={{
            position: "absolute",
            top: "375px",
            left: "325px",
          }}>
            {/* Categoria*/}
            <a href="/ShowBrands" style={{ fontSize: 13 }}>{get(this.state.brandContent,'categoria')}</a>
          </div>





        </div>
          {/* Div de información */}
          <br/><br/> <br/>
        <div className="row">

          <div className="col-md-4">
            <div style={{
              backgroundColor: "white",
              paddingBottom: "10px"
            }}>
              <div style={{ backgroundColor: "#cbeef7" }}>
                <center><h3>Información</h3></center>
              </div>
              <div className="divInfoProfileBrand">
                {/* Descripción */}
                <label htmlFor="" className="textInfoProfileBrand">{get(this.state.brandContent,'descripcion')}</label>

              </div>

              <div className="divInfoProfileBrand">
                {/* Domicilio */}
                <label htmlFor="" className="textInfoProfileBrand">{get(this.state.brandContent,'domicilio')}</label>

              </div>

              <div className="divInfoProfileBrand">
                {/* Domicilio */}
                <label htmlFor="" className="textInfoProfileBrand">{get(this.state.brandContent,'horario')}</label>

              </div>
              <div className="divInfoProfileBrand">
                {/* Teléfono */}
                <label htmlFor="" className="textInfoProfileBrand">{get(this.state.brandContent,'telefono')}</label>

              </div>

              <div className="divInfoProfileBrand">
                {/* Correo */}
                <label htmlFor="" className="textInfoProfileBrand">{get(this.state.brandContent,'correo')}</label>

              </div>
            </div>

          </div>

          <div className="col-md-8">
            <div style={{
              backgroundColor: "white",
              paddingBottom: "10px"
            }}>

              <div className="divInfoProfileBrand">
                


              </div>

              <div className="divInfoProfileBrand">


              </div>

              <div className="divInfoProfileBrand">


              </div>
              <div className="divInfoProfileBrand">


              </div>

              <div className="divInfoProfileBrand">


              </div>
            </div>

          </div>
        </div>
        <br/>

      </div>

    );
  }
}

export default BrandContainer;