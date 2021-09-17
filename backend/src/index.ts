import express, { Application } from "express";

const app: Application = express();
const PORT = process.env.PORT || 3001;

// Support extracting json from body of requests
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.use("/api/events", require("./routes/events"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(PORT, () => {
  console.log(`Started on ${PORT}`);
});
