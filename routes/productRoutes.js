const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');

//Fetch all products
router.get('/', productController.getProducts);

//Add a new product
router.post('/', productController.postProducts);

//Fetch a product by ID
router.get('/:id', productController.getProductById);

//Update a product by ID
router.put('/:id', productController.editProducts);

//Delete a product by ID
router.delete('/:id', productController.deleteProducts);

module.exports = router;