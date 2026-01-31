const express = require('express');
const router = express.Router();
const {
  getCartItems,
  addItemToCart,
  updateCartItem,
  deleteCartItem
} = require('../controllers/cartController');

router.get('/', getCartItems);

router.post('/', addItemToCart);

router.put('/:id', updateCartItem);

router.delete('/:id', deleteCartItem);