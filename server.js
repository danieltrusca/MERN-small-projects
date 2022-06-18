const express = require("express");

const app = express();
const taskRoutes = require("./routes/tasks");

// middlewares
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("task manager");
});
app.use("/api/v1/tasks", taskRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is running on PORT: ${PORT}...`);
});
