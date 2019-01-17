const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
require('dotenv').config();

const key = process.env.API_KEY;

app.get('/weather', function (req, res) {
  console.log(city);
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`
  console.log("kjfhdisehf");

  request(url, function (err, response, body) {
    if(err){
      console.log("erro");
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
       console.log('weather', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log('weather', {weather: weatherText, error: null});
      }
    }
  });
})

app.listen(3009, function () {
  console.log('Example app listening on port 3009!')
})
