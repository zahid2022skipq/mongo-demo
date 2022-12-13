const mongoose = require("mongoose");

mongoose
  .connect("mongodb://locahost/playground")
  .then(() => console.log("Connected to mongoDB"))
  .catch((error) => console.log("Error occured ", error));
