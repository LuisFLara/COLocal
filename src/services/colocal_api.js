import axios from 'axios';
import { apiUrl } from './servers';

export const all = () => {
  return axios.get(apiUrl);
}