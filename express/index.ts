import { Request } from "express";
import * as fs from "fs";
import express from "express";

const app = express();
const port = 3038;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
