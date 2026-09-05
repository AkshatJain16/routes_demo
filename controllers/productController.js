// controllers/productController.js

const productService = require('../services/productService');

//GET /products
const getProducts = (req, res) => {
    const result = productService.getAllProducts();
    res.send(result);
}

//GET /products/:id
const getProductById = (req, res) => {
    const productId = req.params.id;
    const result = productService.getProductById(productId);
    res.send(result);
}

//POST /products
const postProducts = (req, res) => {
    const result = productService.addProduct(req.body);
    res.send(result);
}

 

module.exports = {
    getProducts,
    getProductById,
    postProducts,
}