const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.send('Hello World with Node Express');
})

router.get('/products', (request, response) => {
  // response.send('<h2>Products List</h2>');
  response.sendFile(__dirname + '/public/pages/products.html')
})

router.get('/product/:id', (request, response) => {
  response.send(`<h2>Product ID ${request.params.id}</h2>`);
})

module.exports = router;