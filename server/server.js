'use strict'
require('dotenv').config()
// Import DB Connection
require("./config/db");
// require express and bodyParser
const express = require("express");
//authentication
const mongoose = require('mongoose');
const session = require('express-session');
var passport = require('passport');
var crypto = require('crypto');
const Session = require("./api/models/session");
var MongoDBStore = require('connect-mongodb-session')(session);
// create express app
const app = express();

// define port to run express app
const port = process.env.PORT || 3001;

// use bodyParser equivalent middleware on express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//avoid CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * -------------- SESSION SETUP ----------------
 */
var store = new MongoDBStore({
  Session
});

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  store: store,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 //1 day
  }
}));

/**
 * -------------- PASSPORT AUTHENTICATION ----------------
 */

// Need to require the entire Passport config module so app.js knows about it
require('./config/passport');

app.use(passport.initialize());
app.use(passport.session());

// Import API route
var routes = require('./api/routes/route'); //importing route
routes(app);

// Add endpoint
app.get('/', (req, res) => {
  res.send("API funcioando!");
});

// Listen to server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});