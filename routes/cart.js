const express = require('express');

const router = express.Router();

//GET /cart
router.get('/:userid', (req, res) => {
    res.send(`Fetching cart for user with ID: ${req.params.userid}`);
});

//POST /cart
router.post('/:userid', (req, res) => {
    res.send(`Adding product to cart for user with ID: ${req.params.userid}`);
});

module.exports = router;