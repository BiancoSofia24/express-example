const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.render('index');
})

router.get('/products', (request, response) => {
  // response.send('<h2>Products List</h2>');
  response.render('products/index');
})

router.get('/product/:id', (request, response) => {
  // response.send(`<h2>Product ID ${request.params.id}</h2>`);
  response.render('products/single');
})

module.exports = router;
