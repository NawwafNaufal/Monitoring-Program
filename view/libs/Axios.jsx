import axios from 'axios';

export const AxiosInstace = axios.create({
  baseURL: 'http://localhost:3000', 
});
