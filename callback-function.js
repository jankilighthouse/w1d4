function findWaldo(arr,found){
  arr.forEach(function(element,i){

  if(element==="Waldo"){
  found(i);
  }
  });
}
  function actionWhenFound(index){
  console.log("Found Waldo at index" + index + "!");
  }

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
