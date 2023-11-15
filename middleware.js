const express = require("express"); //6

module.exports = function (app) {
  app.use(express.static("public"));
}; // 7