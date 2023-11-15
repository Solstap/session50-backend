const express = require("express");

const app = express();// 1 defines the server

require("./middleware")(app); //8 

module.exports = app;