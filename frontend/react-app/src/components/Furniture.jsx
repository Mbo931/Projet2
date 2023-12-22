import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Furniture({furniture}){
  onst [furniture, setFurniture] = useState([]);
  const [error, setError] = useState(null);
  const [isBackendAvailable, setIsBackendAvailable] = useState(true); // Nouvelle variable d'état

  useEffect(() => {
    // Effect pour vérifier la disponibilité du backend
    axios.get('http://localhost:3000')
      .then(() => {
        // Le backend est disponible, procédez à la récupération des meubles
        axios.get('http://localhost:3000/api/furniture')
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
  }, []); // Empty dependency arra
return(
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Meuble</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Voir plus</Button>
      </Card.Body>
    </Card>
    </>
)
}

export default Furniture;