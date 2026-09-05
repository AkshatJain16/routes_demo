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
    const data = req.body;
    console.log(data);
    res.json({ value: data.productName });
}

 

module.exports = {
    getProducts,
    getProductById,
    postProducts,
}