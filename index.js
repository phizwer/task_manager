const express = require("express");
const App = require("./services/ExpressApp");
const dbConnection = require("./services/Database");

const StartServer = async () => {
  const app = express();
  const port = Number(process.env.PORT || 8080);

  dbConnection.connect((err) => {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("Connected as id: " + dbConnection.threadId);
  });

  await App(app);

  app.listen(port, () => {
    console.log("Listening to port " + port);
  });
};

StartServer();
