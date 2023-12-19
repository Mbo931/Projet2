import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Assurez-vous que le port correspond à celui de votre backend
});

export default api;
