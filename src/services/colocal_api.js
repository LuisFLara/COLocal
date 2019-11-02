import axios from 'axios';
import { apiUrl } from './servers';

export const all = () => {
  return axios.get(apiUrl);
}

export const new_user = (data) => {
  return axios.post(`${apiUrl}/usuario/registrar`, data);
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