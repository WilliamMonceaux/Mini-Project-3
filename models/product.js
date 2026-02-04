const { DataTypes, Model } = require("sequelize");
let { sequelize } = require("../config/dbConnect");

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    externalId: {
      type: DataTypes.INTEGER,
      allowNull: true, 
      unique: true,    
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Title cannot be empty" },
      },
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
        min: { args: [0], msg: "Price cannot be negative" },
      },
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Description is required" },
      },
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: { msg: "Image must be a valid URL link" },
      },
    },
    rating: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: { rate: 0, count: 0 },
    },
  },
  {
    sequelize,
    modelName: "products",
    timestamps: true,
    freezeTableName: true,
  },
);

module.exports = Product;
