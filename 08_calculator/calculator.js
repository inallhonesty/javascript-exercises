const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(listOfNum) {
	return listOfNum.reduce(function(acc, arg) {
    return acc + arg;
  }, 0)
};

const multiply = function(listOfNum) {
	return listOfNum.reduce(function(acc, arg) {
    return acc * arg;
  }, 1)
};

const power = function(a , b) {
  return a ** b
};

const factorial = function(a) {
  let fact = 1;
  while (a > 1) {
    fact *= a;
    a--
  } 
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
