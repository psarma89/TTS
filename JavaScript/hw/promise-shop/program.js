// require('es6-promise');
'use strict';

//Warmp UP
// setTimeout(function(){console.log('TIMED OUT!');}, 300);

//Fullfill a promise
// var promise = new Promise(function(fulfill, reject){
//   var myValue = 'FULFILLED!'
//   setTimeout(function(){fulfill(myValue)},300);
// });
//
// promise.then(function(results){
//   console.log(results);
// });

//Reject a promise
// var promise = new Promise(function (fulfill, reject) {
//   var error = new Error('REJECTED!');
//   setTimeout(function(){reject(error)},300);
// });
//
// function onReject(error){
//   console.log(error.message);
// }
//
// promise.then(null,onReject);

//To reject or not to reject
// var promise = new Promise(function (fulfill, reject) {
//   fulfill('I FIRED');
//   reject(new Error('I DID NOT FIRE'));
// });
//
// function onReject(error){
//   console.log(error.message);
// }
//
// promise.then(console.log,onReject);

//Always Asynchronous
// var promise = new Promise(function (fulfill, reject) {
//   fulfill('PROMISE VALUE');
// });
//
// promise.then(console.log);
//
// console.log('MAIN PROGRAM');

//Shortcuts
// var promise = Promise.reject(new Error('Something'));
//
// function onReject(error){
//   console.log(error.message);
// }
// promise.catch(onReject);
// function onReject(error){
//   console.log(error.message);
// }
// promise.catch(onReject);

//Promise after Promise

// first().then(function(val){
//   return second(val);
// }).then(console.log)

// first().then(second).then(console.log);

//values and promises
