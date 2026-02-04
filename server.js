const app = require("./app");
require("dotenv").config();
const { connectMysql, sequelize } = require("./config/dbConnect");
const Models = require("./models");

const seedProducts = async () => {
  try {
    const response = await fetch('http://fakestoreapi.com/products');
    const products = await response.json();
   
    for (const product of products) {
      await Models.Product.findOrCreate({
        where: { externalId: product.id },
        defaults: {
          title: product.title,
          price: product.price,
          description: product.description,
          category: product.category,
          image: product.image,
          rating: product.rating
        }
      });
    }
    console.log('Products seeded successfully');
  } catch (error) {
    console.error('Error seeding products:', error);
  }
};

const startServer = async () => {
  try {
    await connectMysql();

    await sequelize.sync({ alter: true });
    console.log("Models Synchronized");

    await seedProducts();

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Database connection error", err);
    process.exit(1);
  }
};

startServer();
