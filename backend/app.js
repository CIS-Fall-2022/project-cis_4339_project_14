const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan"); //better debugging
const cors = require("cors");
const config =  require('./config.js');
let mode = '';
//allow using a .env file
require("dotenv").config();   

//creates a new instance of express application
const app = express();

// add cors header to the server
app.use(cors({
  origin: '*'
}));


//sets up mongoose for the mongoDB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connection Success!");
  })
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

//declare port number for the api
//const PORT = process.env.PORT || 3000;
console.log(`NODE_ENV=${config.NODE_ENV}`);

//setup
app.use(express.json());
app.use(morgan("dev"));

//import routes
const primaryDataRoute  = require('./routes/primaryData');
const eventsDataRoute  = require('./routes/eventsData');
const orgRoute = require('./routes/org');
//setup middle ware for routes
app.use('/primaryData', primaryDataRoute);
app.use('/eventData', eventsDataRoute);
app.use('/org', orgRoute )
app.listen(config.PORT, config.HOST, () => {
  console.log(`Server started listening on http://${config.HOST}:${config.PORT}`);
});

//error handler
app.use(function (err, req, res, next) {
  // logs error and error code to console
  console.error(err.message, req);
  if (!err.statusCode)
    err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
