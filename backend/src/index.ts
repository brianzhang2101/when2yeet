import express, { Application } from "express";

const app: Application = express();
const PORT = process.env.PORT || 3001;

// Support extracting json from body of requests
app.use(express.json());

app.use("/api/events", require("./routes/events"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(PORT, () => {
  console.log(`Started on ${PORT}`);
});
