const getAllProducts = () => {
    // Logic to fetch all products from the database or any data source
    return `Fetching all products`;
}

const getProductById = (productId) => {
    // Logic to fetch a product by its ID from the database or any data source
    return `Fetching product with ID: ${productId}`;
}

const addProduct = () =>{
    return `Adding a new product`;
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
};