const fibonacci = function(n) {
  var sequence = [0, 1];
  for (var i = 1; i <= n; i++) {
    sequence[i+1] = sequence[i] + sequence[i-1];
  }
  console.log(sequence, 'looking for item number', n);
  return sequence[n];
};

// Do not edit below this line
module.exports = fibonacci;
