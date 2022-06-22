const express = require("express");

const app = express();

const cors = require("cors");
const connectDB = require("./db/connect");
require("dotenv").config();
const path = require("path");

const taskRoutes = require("./routes/tasks");
const notFound = require("./middleware/NotFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");

// middlewares
app.use(express.json());
app.use(cors());

// routes

app.use("/api/v1/tasks", taskRoutes);


// --------------------------deployment------------------------------
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// const __dirname = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/client/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }
// --------------------------deployment------------------------------

app.use(notFound);
app.use(errorHandlerMiddleware);

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
