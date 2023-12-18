const express= require('express');
const path = require('path');
const mongoose = require('mongoose');
const app=express();

mongoose.connect('mongodb+srv://cluster0.sfmkbvh.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })

  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.error('Connexion à MongoDB échouée !', error));


app.use('/api/furniture',furnitureRoutes)

  module.exports= app;