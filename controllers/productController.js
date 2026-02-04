"use strict";
const Models = require("../models");

const BASE_URL = "http://fakestoreapi.com/products";

const getProducts = async (req, res) => {
  try {
    const products = await Models.Product.findAll({});

    res.status(200).json(products);
  } catch (error) {
    console.error(`Error fetching products from DB: ${error.message}`);
    res.status(500).json({ error: "Failed to retrieve products" });
  }
};

const createProduct = async (req, res) => {
  Models.Product.create(req.body)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateProduct = (req, res) => {
  Models.Product.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteProduct = (req, res) => {
  Models.Product.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
