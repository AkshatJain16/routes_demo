// controllers/productController.js

//GET /products
const getProducts = (req, res) => {
    res.send(`Fetching all products`);
}

//GET /products/:id
const getProductById = (req, res) => {
    const productId = req.params.id;
    res.send(`Fetching product with ID: ${productId}`);
}

//POST /products
const postProducts = (req, res) => {
    res.send(`New product added`);
}

 

module.exports = {
    getProducts,
    getProductById,
    postProducts,
}