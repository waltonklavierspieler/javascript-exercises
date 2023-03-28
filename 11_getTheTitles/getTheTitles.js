const getTheTitles = function(library) {
  var titles = [];
  for (var i = 0; i < library.length; i ++) {
    console.log('book:', library[i], ' and title:', library[i].title);
    var toAdd = library[i].title;
    console.log('toAdd var is', toAdd);
    titles.push(toAdd);
    console.log('titles list is currently', titles);
  }
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
