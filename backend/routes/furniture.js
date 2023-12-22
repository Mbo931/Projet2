const express = require('express');  
const router = express.Router();


// Affichage des Réalisations
router.get('/furniture', furnitureController.furnitureList);

// Affichage d'une Réalisation
router.get('/furniture/:id', furnitureController.furnitureDetails);

// Création d'un meuble
router.post('/furniture',auth, furnitureController.furnitureCreate);

// Mise a jour d'un meuble
router.put('/furniture/:id',auth, furnitureController.furnitureUpdate);

// Supprimer un Meuble
router.delete('/furniture/:id',auth, furnitureController.furnitureDelete);

// Route pour mettre à jour uniquement le nombre de fois que le meuble a été réalisé
router.put('/furniture/:id/update-times-built',auth, furnitureController.furnitureUpdateTimesBuilt);

module.exports = router;