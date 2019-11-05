let jsonData;

let locationElement = document.getElementById("location");
let weatherElement = document.getElementById("weather");

let city = 260010;
let ward;
let weather;

let count = 0;

let getWeather = function(loc, locward){
  $.getJSON("http://weather.livedoor.com/forecast/webservice/json/v1?city=" + city, setWeatherData);
  
  // city = unescape(encodeURIComponent(jsonData.))
  // ward = unescape(encodeURIComponent())
  console.log(JSON.stringify(jsonData))
  return jsonData;
};

function setWeatherData(data) {
  console.log(data);
  locationElement.innerText = data.pinpointLocations[6].name;
  weatherElement.innerText = data.forecasts[0].telop;
  count++
  console.log(count);
}

getWeather()
setInterval(getWeather, 30000);