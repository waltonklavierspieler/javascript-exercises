const sumAll = function(x, y) {
  var sum = x;
  if (x < y) {
    for (var i = x+1; i <= y; i++) {
      sum += i;
    }
  }
  if (y < x) {
    for (var j = y+1; j <= x; j++) {
      sum += j;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
