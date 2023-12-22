const express = require('express');  
const router = express.Router();


// Affichage des Réalisations
router.get('/furniture', furnitureController.furnitureList);

// Affichage d'une Réalisation
router.get('/furniture/:id', furnitureController.furnitureDetails);

// Création d'un meuble
router.post('/furniture', furnitureController.furnitureCreate);

// Mise a jour d'un meuble
router.put('/furniture/:id', furnitureController.furnitureUpdate);

// Supprimer un Meuble
router.delete('/furniture/:id', furnitureController.furnitureDelete);

// Route pour mettre à jour uniquement le nombre de fois que le meuble a été réalisé
router.put('/furniture/:id/update-times-built', furnitureController.furnitureUpdateTimesBuilt);

module.exports = router;