function duckCount() {
   // using the build in arguments object to create an array of the passed in arguments
   var args = [...arguments];
   return args.reduce(function(hasQuack,arg){
     return Object.prototype.hasOwnProperty.call(arg, 'quack') ? hasQuack +=1 : hasQuack +=0;
   },0)
 }

module.exports = duckCount


// var notDuck = Object.create({quack: true})
// var duck = {quack: true}
//
// console.log(duckCount(duck,notDuck))
