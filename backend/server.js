const express = require('express');
const app = express();


const port = 3000; // ou le port de votre choix



app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:3000`);
});
