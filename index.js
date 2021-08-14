

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./src/routes");
const path = require("path");
console.log(router)
const port = process.env.PORT||4000; 

console.log(port)
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1", router);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
