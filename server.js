const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const path = require("path");
const cors = require("cors");
const app = express();


// IMPORT Models
require("./models/note.model.js");

// Setting up server
app.use(bodyParser.json({ urlencoded: true }));
app.use(cors());

// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
  console.log(`Request_Endpoint: ${req.method} ${req.url}`);
  next();
});

// Connecting to MongoDB
mongoose.Promise = global.Promise;
const uri = 'mongodb+srv://bedant-hota:root@cluster0.ppa1i.mongodb.net/KeeperApp';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use("/api", require("./routes/home.route.js"));
app.use("/api/trash", require("./routes/trash.route.js"));
app.use("/api/reminder", require("./routes/reminder.route.js"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});