var wrapLog = function (callback, name) {

  var CB=callback;
  var na=name;

  return function()
  {
    var args = Array.from(arguments);
    var result = CB(...args);             // ellipsis enables us to pass args as parameter to callback
    console.log(na +"(" + args +")  => " + result);

  }
};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24