var bottleCount = function (userNumber) {
  var beerSong = "";  //stays outside the loop.  Gets added to by beerLine.
  while (userNumber >= 0) {
    var beerLine= "";  //changes with each loop.  Starts blank with each loop.

  if (userNumber === 0) {
    beerLine = zeroBottlesSong(userNumber);
  }
  else if (userNumber === 1) {
    beerLine= oneBottleSong(userNumber);
  }
  else if (userNumber === 2) {
    beerLine= twoBottlesSong(userNumber);
  }
  else {
    beerLine= mainBottlesSong(userNumber);
  }
  userNumber = userNumber - 1;  //decreases the loop count each time
  beerSong = beerSong + beerLine; //adding a line to the beerSong-which will be added all at once to html page
}
return beerSong;
}
//helper function
var zeroBottlesSong = function() {
  return "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.<br/>"
}
//helper function
var oneBottleSong = function(userNumber) {
  return userNumber + " bottle of beer on the wall, "  +  userNumber + " bottle of beer. Take one down, pass it around no more bottles of beer on the wall.<br/>"
}
//helper function
var twoBottlesSong = function(userNumber) {
  return userNumber + " bottles of beer on the wall, "  +  userNumber + " bottles of beer. Take one down, pass it around " + (userNumber -1) + " bottle of beer on the wall.<br/>"
}
//helper function
var mainBottlesSong = function(userNumber) {
  return userNumber + " bottles of beer on the wall, "  +  userNumber + " bottles of beer. Take one down, pass it around " + (userNumber -1) + " bottles of beer on the wall.<br/>"
}
