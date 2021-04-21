const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const notesApiRoute = require("./routes/notes");
const passportApiRoute = require("./routes/notes")

const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const notesSchema = require("./models/notes")
// const { db } = require("./models/notes");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use("/api/notes", notesApiRoute);
app.use("/signup", passportApiRoute)

// Send every other request to the React app

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
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

// Define API routes here
app.use("/api/notes", notesApiRoute)

// ------------------------------------Middleware------------------------------------
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

const db = mongoose.connection
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
