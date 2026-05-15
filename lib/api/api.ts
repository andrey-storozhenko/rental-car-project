import axios from 'axios';

const baseURL = 'https://car-rental-api.goit.study';


export const api = axios.create({
  baseURL,
});