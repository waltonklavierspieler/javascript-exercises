const removeFromArray = function() {
  var arr = arguments[0];
  for (var i = 1; i < arguments.length; i ++) {
    console.log('Currently on i:', i, ' and arguments[i] is ', arguments[i]);
    console.log('Result of indexOf is:', arr.indexOf(arguments[i]));
    if (arr.indexOf(arguments[i]) >= 0) {
      var j = arr.indexOf(arguments[i]);
      console.log('Found one to remove. Arr before:', arr);
      arr.splice(j, 1);
      console.log('... and arr after: ', arr);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
