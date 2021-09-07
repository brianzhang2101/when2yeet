import express, { Application } from "express";

const app: Application = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Started on ${PORT}`);
});
