
import axios from 'axios';
const LOCALHOST='https://leninyoutubebackend.onrender.com/'

export const API_BASE_URL = LOCALHOST;

const api = axios.create({
  baseURL: API_BASE_URL,
});


export default api;