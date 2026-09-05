//GET /cart
const getCartByUserId = (req, res) => {
    const userId = req.params.userid;
    res.send(`Fetching cart items for user with ID: ${userId}`);
}

//POST /cart
const postCartByUserId = (req, res) => {
    const userId = req.params.userid;
    res.send(`New item added to the cart for user with ID: ${userId}`);
}

module.exports = {
    getCartByUserId,
    postCartByUserId
};