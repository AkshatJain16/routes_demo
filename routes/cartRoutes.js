const express = require('express');

const router = express.Router();

// Import the cartController
const cartController = require('../controllers/cartController');

//GET /cart
router.get('/:userid', cartController.getCartByUserId);

//POST /cart
router.post('/:userid', cartController.postCartByUserId);

module.exports = router;