const app = require("./app");
require("dotenv").config();
const dbConnect = require("./dbConnect");

const startServer = async () => {
  await dbConnect();

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
