const express = require("express");

const app = express();

const cors=require('cors');
const connectDB = require("./db/connect");
require("dotenv").config();
const taskRoutes = require("./routes/tasks");

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.get("/hello", (req, res) => {
  res.send("task manager");
});
app.use("/api/v1/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
