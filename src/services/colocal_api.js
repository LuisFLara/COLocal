import axios from 'axios';
import { apiUrl } from './servers';

export const all = () => {
  axios.get(apiUrl).then((res) => {
    console.log(res);
  }).catch((error) =>{
    console.log(error);
  });
}