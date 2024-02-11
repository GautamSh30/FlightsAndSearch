const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");

const db = require("./models/index");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);

    if (process.env.sync_db) {
      try {
        await db.sequelize.sync({ alter: true });
      } catch (error) {
        console.error("Error during synchronization:", error);
      }
    }

    // const city = await City.findOne({
    //   where: {
    //     id: 9,
    //   },
    // });
    // const airport = await city.getAirports();
    // console.log(city, airport);
  });
};

setupAndStartServer();
