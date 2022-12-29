const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// get driver connection
const dbo = require("./db/conn");

// test
app.use(require("./routes/test"));
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer();
  console.log(`Server is running on port: ${port}`);
});