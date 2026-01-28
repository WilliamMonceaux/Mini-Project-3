const express = require('express');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes );

app.use(express.json());

module.exports = app;