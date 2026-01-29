const { DataTypes, Model } = require("sequelize");
let { sequelize } = require("../config/dbConnect");

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "orders",
    timestamps: true,
    freezeTableName: true,
  },
);

module.exports = Order;
