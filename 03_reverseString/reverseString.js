const reverseString = function(text) {
  var result = '';
  for (var i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
