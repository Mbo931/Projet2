// Exemple de composant React qui utilise l'API pour récupérer la liste des meubles

import React, { useEffect, useState } from 'react';
import api from '../service/api';

const FurnitureList = () => {
  const [furnitureList, setFurnitureList] = useState([]);

  useEffect(() => {
    // Appel à l'API pour récupérer la liste des meubles
    api.get('/furniture')
      .then(response => {
        setFurnitureList(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération de la liste des meubles :', error);
      });
  }, []);

  // Affichage de la liste des meubles dans le composant
  return (
    <div>
      <h2>Liste des Meubles</h2>
      <ul>
        {furnitureList.map(furniture => (
          <li key={furniture._id}>{furniture.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FurnitureList;
