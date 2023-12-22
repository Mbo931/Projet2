import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Assurez-vous que le port correspond à celui de votre backend
});
axios.get('http://localhost:3000/furniture')
  .then(response => {
    // Traitement des données si la requête réussit
  })
  .catch(error => {
    if (error.response) {
      // La requête a été effectuée, mais le serveur a répondu avec un code d'erreur
      console.error('Erreur de réponse du serveur:', error.response.status);
    } else if (error.request) {
      // La requête n'a pas réussi à atteindre le serveur
      console.error('La requête n\'a pas pu atteindre le serveur.');
    } else {
      // Une erreur s'est produite lors de la configuration de la requête
      console.error('Erreur lors de la configuration de la requête:', error.message);
    }
  });

export default api;
