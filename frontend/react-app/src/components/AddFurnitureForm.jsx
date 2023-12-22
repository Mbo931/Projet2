import React, { useState } from 'react';
import api from '../service/api';

const AddFurnitureForm = () => {
  const [furnitureData, setFurnitureData] = useState({
    name: '',
    category: '',
    description:'',
    
  });

  const handleInputChange = (e) => {
    setFurnitureData({ ...furnitureData, [e.target.name]: e.target.value });
  };

  const handleAddFurniture = async () => {
    try {
      // Effectuer une requête POST vers la route backend pour ajouter un meuble
      const response = await api.post('/furniture', furnitureData);

      // Traiter la réponse, peut-être afficher un message de succès
      console.log('Meuble ajouté avec succès :', response.data);
    } catch (error) {
      // Gérer les erreurs, afficher un message d'erreur par exemple
      console.error('Erreur lors de l\'ajout du meuble :', error.response.data);
    }
  };

  return (
    <div>
        
        <label for="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Nom du meuble"
        onChange={handleInputChange}
      />
      
      <label for="category-furniture-choice">Category</label>
        <input
             list="category-furniture" 
             id="category-furniture-choice" 
             name="category-furniture-choice"
              onChange={handleInputChange} />

        <datalist id="category-furniture">
          <option value="Etagere"></option>
          <option value="Armoire"></option>
          <option value="Commode"></option>
          <option value="Placard"></option>
          <option value="Table"></option>
        </datalist>
        <label for="description">Description</label>

        <textarea 
            id="description" 
            name="story" r
            ows="5" cols="33"
            onChange={handleInputChange}>
        
        </textarea>
      <button onClick={handleAddFurniture}>Ajouter Meuble</button>
    </div>
  );
};

export default AddFurnitureForm;
