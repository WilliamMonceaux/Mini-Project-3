const app = require("./app");
require("dotenv").config();
const { connectMysql } = require("./config/dbConnect");

const startServer = async () => {
  try {
    await connectMysql();

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
