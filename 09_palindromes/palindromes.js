const palindromes = function (text) {
  // remove spaces and punctuation
  var punctuation = '!"#$%&\'()*+,-./:;<= >?@[\\]^_`{|}~';
  var lettersOnly = '';
  var splitText = text.split('');
  for (var i = 0; i < splitText.length; i ++) {
    var currentChar = splitText[i];
    if (punctuation.indexOf(currentChar) === -1) {
      lettersOnly += currentChar.toLowerCase();
    }
  }
  console.log('letters Only:', lettersOnly);
  var reversed = '';
  for (var j = lettersOnly.length - 1; j >= 0; j --) {
    reversed += lettersOnly[j];
  }
  console.log('Reversed:', reversed);
  return reversed === lettersOnly;
};

// Do not edit below this line
module.exports = palindromes;
