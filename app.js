const express = require('express');
const productRoutes = require('./routes/productRoute');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Mini-Project 2 Backend Server')
});

app.use('/api/shop', productRoutes );

module.exports = { app };