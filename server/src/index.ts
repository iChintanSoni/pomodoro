import express from "express";
import json from "./files/sample.json";

const app = express();
const port = 8080;

app.use(express.static("./client"));

app.get("/", (req, res) => {
  res.status(200).send("index.html");
});

app.get("/greet", (req, res) => {
  res.status(200).send(json);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
