const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');

//Fetch all products
router.get('/', productController.getProducts);

//Add a new product
router.post('/', productController.postProducts);

//Fetch a product by ID
router.get('/:id', productController.getProductById);

module.exports = router;