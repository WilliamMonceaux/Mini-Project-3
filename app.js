const express = require('express');
const productRoutes = require('./routes/productRoute');

const app = express();

app.use(express.json());

app.use('/api/shop', productRoutes );

module.exports = app;