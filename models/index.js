"use strict";
const User = require("./user");
const Product = require("./product");
const Order = require("./order");

User.hasMany(Order);
Order.belongsTo(User);

async function init() {
  await User.sync();
  await Product.sync();
  await Order.sync();
}

init();

module.exports = {
  User,
  Product,
  Order,
};
