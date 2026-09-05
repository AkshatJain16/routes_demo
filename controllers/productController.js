// controllers/productController.js
const path = require('path');

// GET /products
const getProducts = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'product.html'));
};

// GET /products/:id
const getProductById = (req, res) => {
    const productId = req.params.id;

    if (!productId) {
        const error = new Error('Product ID is required');
        error.statusCode = 400;
        throw error;
    }

    res.send(`Fetching product with ID: ${productId}`);
};

// POST /products
const postProducts = (req, res) => {
    const data = req.body;

    if (!data.productName) {
        const error = new Error('Product name is required');
        error.statusCode = 400;
        throw error;
    }

    console.log(data);

    res.json({
        value: data.productName
    });
};

module.exports = {
    getProducts,
    getProductById,
    postProducts
};