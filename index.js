const express = require('express');

const app = express();

// Rota
app.get('/home', (request, response) => {
  response.send('Hello World!');
})

app.listen(3000);