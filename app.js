const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("App is running!");
});

app.listen(8000, "0.0.0.0", () => {
  console.log("Server running on port 8000");
});
