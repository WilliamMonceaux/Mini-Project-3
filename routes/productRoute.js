const express = require('express');
const router = express.Router();
const { productList } = require('../controllers/productController');

router.get('/products', productList )

module.exports = router;