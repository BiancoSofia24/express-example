const express = require('express');
const router = express.Router();
const products = require('./products');

router.get('/', (request, response) => {
  response.render('index');
})

router.get('/products', (request, response) => {
  response.render('products/products-list', { products: products.all() });
})

router.get('/product/:id', (request, response) => {
  // Send data through the url as param
  response.render('products/product-detail', { product: products.getOne(request.params.id) });
})

module.exports = router;
