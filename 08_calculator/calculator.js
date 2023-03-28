const add = function(a, b) {
	return a + b;
};

const subtract = function(c, d) {
	return c - d;
};

const sum = function(nums) {
  var sum = 0;
	for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

const multiply = function(nums) {
  var product = 1;
  for (var i = 0; i < nums.length; i ++) {
    product *= nums[i];
  }
  return product;
};

const power = function(e, f) {
  var expo = e;
  for (var i = f; f >=1; i --) {
    expo *= e;
  }
  return expo;
};

const factorial = function(x) {
	if (x === 0) {
    return 1;
  }
  var result = x;
  for (var i = x-1; i >=1; i --) {
    result *= x - i;
  }
  return result;
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
