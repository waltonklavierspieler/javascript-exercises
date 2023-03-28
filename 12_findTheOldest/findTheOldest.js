const findTheOldest = function(people) {
  var oldest;
  var longestLife = 0;
  for (var i = 0; i < people.length; i ++) {
    var lifespan;
    var person = people[i];
    if (person.yearOfDeath === undefined) {
      var currentDate = parseInt(Date().slice(11, 15));
      lifespan = currentDate - person.yearOfBirth;
    } else {
      lifespan = person.yearOfDeath - person.yearOfBirth;
    }
    if (lifespan > longestLife) {
      longestLife = lifespan;
      oldest = people[i];
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
