const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// If deployed, use the deployed database OR use local mongoHead database
const db = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

// Connect mongoose to the database
mongoose.connect(db, {useNewUrlParser: true}, function(error) {
    if(error) {
        console.log(error);
    }
    else {
        console.log("mongoose connection is successful");
    }
});

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
