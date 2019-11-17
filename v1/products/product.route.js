const express = require('express');
const router = express.Router();
const product = require('./product.controller');
const auth = require('../../middlewares/authentication');

router.post('/products', auth, product.createProduct);
router.get('/products', auth, product.showAllProducts);
router.get('/products/:id', auth, product.showDetailProduct);
router.put('/products/:id', auth, product.updateProduct);
router.delete('/products/:id', auth, product.deleteProduct);

module.exports = router;