const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const notesApiRoute = require("./routes/notes");
const { join } = require("path")

const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// Serve static assets from the /public folder
app.use(express.static(join(__dirname, "public")));

// Endpoint to serve the configuration file
app.get("/auth_config.json", (req, res) => {
  res.sendFile(join(__dirname, "auth_config.json"));
});

// Mongo Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/video-notes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);

// Define API route
app.use("/api/notes/", notesApiRoute)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

const db = mongoose.connection
db.on("error", (error) => console.log(error));
db.once("open", () => {
  console.log("Connected to Database")
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  })
});


