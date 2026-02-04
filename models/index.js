"use strict";
const User = require("./user");
const Product = require("./product");
const Order = require("./order");
const Cart = require("./cart");

User.hasMany(Order, { foreignKey: "userId" });
Order.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Cart, { foreignKey: "userId" });
Cart.belongsTo(User, { foreignKey: "userId" });
Product.hasMany(Cart, { foreignKey: "productId" });
Cart.belongsTo(Product, { foreignKey: "productId" });

async function init() {
 await User.sync({ alter: true });
  await Product.sync({ alter: true });
  await Order.sync({ alter: true });
  await Cart.sync({ alter: true });
}

init();

module.exports = {
  User,
  Product,
  Order,
  Cart,
};
