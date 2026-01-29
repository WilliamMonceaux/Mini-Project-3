"use strict";
const User = require("./user");
const Product = require("./product");
const Order = require("./order");
const Cart = require("./cart");

User.hasMany(Order);
Order.belongsTo(User);
User.hasMany(Cart);
Cart.belongsTo(User);
Product.hasMany(Cart);
Cart.belongsTo(Product);


async function init() {
  await User.sync();
  await Product.sync();
  await Order.sync();
  await Cart.sync();
}

init();

module.exports = {
  User,
  Product,
  Order,
  Cart,
};
