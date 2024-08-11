const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sumAll = array.reduce((total, num) => total + num, 0)
  return sumAll; 
};

const multiply = function(array) {
  let multiply = array.reduce((total, num) => total * num, 1);
  return multiply;
};

const power = function(a, b) {
	let powerOf = a ** b;
  return powerOf;
};

const factorial = function(a) {
	let array = [];
  
  if(a === 0) {
    array.push(1);
  } else if (a > 0) { 
    for(let i = 0; i < a; i++) 
      {array.push(a - i);}
  }

  let result = array.reduce((total, num) => total * num, 1);
  return result;
}


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
