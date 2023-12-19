const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  keywords: [String],
  materials: [
    {
      
      type: String,
      supplier: String,
    },
  ],
  imageUrl: String, 
  quantity: { type: Number, default: 0 }, //  nombre de fois construit
  
});

const Furniture = mongoose.model('Furniture', furnitureSchema);

module.exports = Furniture;
