import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListFurniture = () => {
  const [furnitureList, setFurnitureList] = useState([]);
  const [error, setError] = useState(null);
  const [isBackendAvailable, setIsBackendAvailable] = useState(true); // Nouvelle variable d'état

  useEffect(() => {
    // Effect pour vérifier la disponibilité du backend
    axios.get('http://localhost:3000')
      .then(() => {
        // Le backend est disponible, procédez à la récupération des meubles
        axios.get('http://localhost:3000/api')
          .then(response => {
            setFurnitureList(response.data);
          })
          .catch(error => {
            if (error.response && error.response.status === 404) {
              // Handle 404 error by setting furnitureList to an empty array
              setFurnitureList([]);
            } else {
              // Handle other errors
              setError(error.message);
            }
          });
      })
      .catch(() => {
        // Le backend n'est pas disponible
        setIsBackendAvailable(false);
      });
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
        <h1>Liste des Meubles</h1>
      {isBackendAvailable ? ( // Condition pour vérifier la disponibilité du backend
        <>
          {error ? (
            <p>Erreur lors de la récupération de la liste des meubles : {error}</p>
          ) : (
            <ul>
              {furnitureList.map(furniture => (
                <li key={furniture.id}>{furniture.name}</li>
              ))}
              {furnitureList.length === 0 && <p>Aucun meuble disponible.</p>}
            </ul>
          )}
        </>
      ) : (
        <p>Le backend n'est pas disponible. Veuillez réessayer plus tard.</p>
      )}
    </div>
  );
};

export default ListFurniture;
