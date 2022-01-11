var express = require('express');
var router = express.Router();
const request = require('request')

const apiKey = require('../config')
const apiBaseUrl = `https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${apiKey}`

router.get('/', function(req,res){
  res.render('index')})

router.post('/yourWeather',(req,res)=>{
// submitted data from forms comes in the request object
// querystring data=> is in req.query
// posed data=> is in req.body

  const weatherLocation= req.body.weatherLocation;
  // res.json(req.body)
  const searchUrl=`${apiBaseUrl}&${weatherLocation}`
  console.log(searchUrl)
  request.get(searchUrl, (error, response, body)=>{
    const parsedData = JSON.parse(body);
    // res.json(parsedData.weather[1].description)
  
    res.render('yourWeather',{
      parsedTemp: parsedData.main.temp,
      parsedCond: parsedData.weather[1].description
    })
  })
})
module.exports = router;