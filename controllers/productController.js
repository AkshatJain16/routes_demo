const getProducts = (req, res) => {
    res.send(`Fetching all products`);
}

const getProductById = (req, res) => {
    const productId = req.params.id;
    res.send(`Fetching product with ID: ${productId}`);
}

const postProducts = (req, res) => {
    res.send(`New product added`);
}

const editProducts = (req, res) => {
    res.send(`Product updated`);
}

const deleteProducts = (req, res) => {
    res.send(`Product deleted`);
}   

module.exports = {
    getProducts,
    getProductById,
    postProducts,
    editProducts,
    deleteProducts
}