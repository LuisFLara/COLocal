import axios from 'axios';
import { apiUrl } from './servers';

export const all = () => {
  return axios.get(apiUrl);
}

export const new_user = async function (data) {

    try {
        //console.log(this.props.switchValue);
        const res = await axios.post('https://wscolocal.herokuapp.com/usuario/consultar', {
            id_usuario: 10
        });

        console.log(res.data);

        //console.log(res);


    } catch (e) {
        console.log(e);
        alert("No hay conexión al web service", "Error");
    }
}

export const validate_user = (data) => {
  return axios.post(`${apiUrl}/usuario/valida`, data);
}

export const new_product = (data) => {
  return axios.post(`${apiUrl}/registrar_producto`, data);
}

export const search_user_data = (id) => {
  return axios.post(`${apiUrl}/usuario/consultar`, id);
}

export const new_brand = (id) => {
  return axios.post(`${apiUrl}/marca/registro`, id);
}

// /marca/registro