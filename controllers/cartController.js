'use strict'
const Models = require("../models");

const getCartItems = async (req, res) => {
    Models.Cart.findAll({})
    .then(data => {
        res.send({ result: 200, data: data });
    })
    .catch(err => {
        console.error(err);
        res.send({ response: 500, error: err.message });
    });
};

const addItemToCart = async (req, res) => {
    Models.Cart.create(req.body)
    .then(data => {
        res.send({ result: 200, data:data });
    })
    .catch(err => {
        console.error(err);
        res.send({ result: 500, error: err.message });
    });
};

const updateCartItem = (req, res) => {
    Models.Cart.update(req.body, {
        where: { id: req.params.id },
        returning: true,
    })
    .then(data => {
        res.send({ result: 200, data: data});
    })
    .catch(err => {
        console.error(err);
        res.send({ response: 500, error: err.message });
    });
};

const deleteCartItem = (req, res) => {
    Models.Cart.destroy({ where: { id: req.params.id }})
    .then(data => {
        res.send({ result: 200, data: data });
    })
    .catch(err => {
        console.error(err);
        res.send({ result: 500, error: err.message });
    });
};

module.exports = {
    getCartItems, 
    addItemToCart,
    updateCartItem, 
    deleteCartItem
};