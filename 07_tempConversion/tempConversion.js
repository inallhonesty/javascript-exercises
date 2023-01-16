const convertToCelsius = function(t) {
  let result = (t - 32) * 5 / 9;
  return Number(result.toFixed(1));
};

const convertToFahrenheit = function(t) {
  let result = t * 9 / 5 + 32;
  return Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
