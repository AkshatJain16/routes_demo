// controllers/productController.js
const path = require('path');

//GET /products
const getProducts = (req, res) => {
    
    res.sendFile(path.join(__dirname,'..', 'view', 'product.html'));
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