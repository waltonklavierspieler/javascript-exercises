const convertToCelsius = function(temp) {
  var celcius = (temp-32) * (5/9);
  return Math.round(celcius * 10)/10;
};

const convertToFahrenheit = function(temp) {
  var fahrenheit = (temp * (9/5) + 32);
  return Math.round(celcius * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
