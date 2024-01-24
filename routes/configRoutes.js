const indexR = require("./index");
const usersR = require("./users");
const gamesR = require("./games");
const playersR = require("./players");


exports.routesInit = (app) => {
  // הגדרת ראוטים לאיזה ראוטר הם שייכים
  app.use("/", indexR);
  app.use("/users", usersR);
  app.use("/games", gamesR);
  app.use("/players", playersR);

}