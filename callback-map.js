
var map = function(arr,condition)
{
  var result=[];
  arr.forEach( function(cell){
    result.push(condition(cell));
  });
  console.log(result);
  return result;
}


var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});