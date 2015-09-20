var zeroBottlesSong = function() {
  return "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.<br/>"
}

var oneBottleSong = function(staticNumber) {
  var userNumber= staticNumber;
  return userNumber + " bottle of beer on the wall, "  +  userNumber + " bottle of beer. Take one down, pass it around no more bottles of beer on the wall.<br/>"
}

var twoBottlesSong = function(staticNumber) {
  var userNumber= staticNumber;
  return userNumber + " bottles of beer on the wall, "  +  userNumber + " bottles of beer. Take one down, pass it around " + (userNumber -1) + " bottle of beer on the wall.<br/>"
}

var mainBottlesSong = function(staticNumber) {
  var userNumber= staticNumber;
  return userNumber + " bottles of beer on the wall, "  +  userNumber + " bottles of beer. Take one down, pass it around " + (userNumber -1) + " bottles of beer on the wall.<br/>"
}
