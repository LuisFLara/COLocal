import React from 'react';
import { all, search_user_data } from '../services/colocal_api';
import { redBright } from 'ansi-colors';

search_user_data(10).then(res => { console.log(res) })
class BrandContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brandContent: {}
    }
  }

  componentDidMount() {
    all().then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (

      <div className="container" style={{paddingTop:"75px"}}>
        <div style={{position:"relative", left:"0px", top:"0px"}}>
          
          <img src="../img/boutiqueCategoria.jpg" style={{
            width: "100%", height: "400px", position: "relative",top: "0",left: "0"}} class="image-fluid" alt=""/>


          <div  style={{position: "absolute",
          top: "250px",
          left: "100px",
        
          }}>
            <img src="../img/marcas/estelarMarca.jpg"  style={{height:200, width:200,}} alt=""/>
          </div>
       
          <div style={{
            position: "absolute",
            top: "340px",
            left: "325px",}}>
              <label htmlFor="" style={{fontWeight:"bold", color:"white", fontSize:35}}>Estelar</label>
            </div>
          <div style={{
            position: "absolute",
            top: "375px",
            left: "325px",
          }}>
            {/* Categoria*/}
            <a href="" style={{ fontSize: 13 }}>#Moda</a>
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
                <label htmlFor="" className="textInfoProfileBrand">Una marca dedicada 100% a innovar en moda y ser siempre su mejor opción</label>

              </div>

              <div className="divInfoProfileBrand">
                {/* Domicilio */}
                <label htmlFor="" className="textInfoProfileBrand">Nos ubicamos en: 13 de Septiembre 677 Colonia Villas de Oro</label>

              </div>

              <div className="divInfoProfileBrand">
                {/* Domicilio */}
                <label htmlFor="" className="textInfoProfileBrand">Horario: Lunes a viernes 9am - 5pm</label>

              </div>
              <div className="divInfoProfileBrand">
                {/* Teléfono */}
                <label htmlFor="" className="textInfoProfileBrand">Teléfono: 3121942513</label>

              </div>

              <div className="divInfoProfileBrand">
                {/* Correo */}
                <label htmlFor="" className="textInfoProfileBrand">correo: "Carlos@mail.com"</label>

              </div>
            </div>

          </div>

          <div className="col-md-8">
            <div style={{
              backgroundColor: "white",
              paddingBottom: "10px"
            }}>
           
              <div className="divInfoProfileBrand">
                {/* Descripción */}


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