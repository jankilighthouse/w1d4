var myFn = function(){
  console.log("I am function");

}
myFn.someAttributes = 42;
console.log(myFn.someAttributes);

function runner(f){
  f();
}
runner(myFn);