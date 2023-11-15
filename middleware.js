const express = require("express"); //6

module.exports = function (app) {
  app.use(express.static("public"));


  const cars = [{name:"Nissan"}, {name: "Toyota"}]; //9

  app.get('/api/v1/cars', (req, res) =>{
    res.status(200).json(cars); // 10
  })
  app.post('/api/v1/cars', (req, res) => {
    const newCar = req.body 
    cars.push(newCar) 
    req.sendStatus(201) // 11
  })

}; // 7