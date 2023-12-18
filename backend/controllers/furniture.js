const Furniture = require('../models/Furniture');
const fs=require('fs');

// Affichage des Réalisations

exports.furnitureList=(req,res)=>{
    Furniture.find({}, (err, furnitureList) => {
    if (err) {
      return res.status(500).json({ error: ' Server Error' });
    }
    res.json(furnitureList);
  });
};

// Affichage d'une Réalisation

exports.furnitureDetails = (req, res) => {
  const furnitureId = req.params.id;

  Furniture.findById(furnitureId, (err, furniture) => {
    if (err) {
      return res.status(500).json({ error: ' Server Error' });
    }
    if (!furniture) {
      return res.status(404).json({ error: 'Meuble Introuvable' });
    }
    res.json(furniture);
  });
};

// Supprimer un Meuble
exports.furnitureDelete = (req, res) => {
  const furnitureId = req.params.id;

  Furniture.findByIdAndRemove(furnitureId, (err, removedFurniture) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    if (!removedFurniture) {
      return res.status(404).json({ error: 'Furniture not found' });
    }
    res.send('Furniture deleted successfully');
  });
};

// Création d'un meuble

exports.furnitureCreate = (req,res)=>{
    const{ name, catégory, description, keywords, materials, imageUrl} = req.body;

    const newFurniture= new Furniture({
        name, 
        catégory,
        description,
        keywords, 
        materials, 
        imageUrl
    });

    newFurniture.save((err, furniture) => {
    if (err) {
      return res.status(500).json({ error: ' Server Error' });
    }
    res.status(201).json(furniture);
  });
};

// Mise a jour d'un meuble

exports.furnitureUpdate = (req, res) => {
  const furnitureId = req.params.id;
  const { name, category, keywords, materials, imageUrl } = req.body;

  Furniture.findByIdAndUpdate(
    furnitureId,
    { name, category, keywords, materials, imageUrl, $inc: { timesBuilt: 1 } },
    { new: true },
    (err, updatedFurniture) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!updatedFurniture) {
        return res.status(404).json({ error: 'Furniture not found' });
      }
      res.json(updatedFurniture);
    }
  );
};

// Mise à jour de la Quantité d'un Meuble

exports.furniture_update_times_built = (req, res) => {
  const furnitureId = req.params.id;
  const { timesBuilt } = req.body;

  Furniture.findByIdAndUpdate(
    furnitureId,
    { timesBuilt },
    { new: true },
    (err, updatedFurniture) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!updatedFurniture) {
        return res.status(404).json({ error: 'Furniture not found' });
      }
      res.json(updatedFurniture);
    }
  );
};

