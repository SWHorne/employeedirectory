const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const employeeinformations = require("./models/employees.js");
const compression = require("compression");


const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/employees";
const server = express();


mongoose.connect(MONGODB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log("Connected");
});

//compress files for Progressive Web Applications
server.use(compression());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  server.use(express.static("client/build"));
}

// Sets up the Express app to handle data parsing
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get("/employees", (req, res) => {
  employeeinformations.find({}).then(collections => {
    res.json(collections);
  });
});

server.get("/employees/sort/:sortName", ({params}, res) => {
  employeeinformations.find({}).sort({[params.sortName]: 1}).then(collections => {
    res.json(collections);
  });
});

server.get("/employees/:category/:filter", ({params}, res) => {
  employeeinformations.find({[params.category]: params.filter}).then(collections => {
    res.json(collections);
  })
});

server.get("/employees/:category/:filter/sort/:sortName", ({params}, res) => {
  employeeinformations.find({[params.category]: params.filter}).sort({[params.sortName]: 1}).then(collections => {
    res.json(collections);
  });
});


// Send every request to the React app
// Define any API routes before this runs
server.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

server.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});





// mongodb+srv://U0fUser:<password>@employeedir.wk9vg.azure.mongodb.net/<dbname>?retryWrites=true&w=majority

//mongodb+srv://U0fUser:AtlasPW2020@employeedir.wk9vg.azure.mongodb.net/employees?retryWrites=true&w=majority