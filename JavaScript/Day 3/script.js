
//Global & Local Scope
var num = 300;
function a() {
  num = 100; 
  // console.log(num); //100
}

function b() {
  var num = 200;
  // console.log(num); 200
}
a();
b();
//console.log(num); 100

var age;


//default values for parameters
function add(num1, num2 = "ferfv") {
  return num1 + num2
}
var result = add(3)


//allows to call func1 even before declaration due to hoisting
func1(5, 4);
//Function statements or function declaration
//named functions
function func1(param1, param2) {
  //statements
  console.log("Named Function")
}


//function expressions
//anonymous function
var sub = function (param1, param2) {
  return param1 - param2
}
//Cannot call sub() function because it is treated as a variable
// during hoisting and sub varibale will be undefined
var subResult = sub(5, 4);


// Reference Error
// var answer = func2(5, 4);
// console.log(dcjhved)


//arguments vs parameters

//Callback Function

//First - Class functions
//Higher Order Functions
function addNumbers(num1, num2, printResult) {
  var result = num1 + num2;
  printResult(result)
}

function printResult(result) {
  console.log(result)
}

var add = function () {

}
addNumbers(1, 2, printResult)


function callApi(callBack) {
  var result = get();

  //after getting a response
  callBack();
}

setTimeout(function () {
  console.log("hello")
}, 5000)


function add(num1, num2) {
  var result = num1 + num2;

  //returning a function from a function
  return function () {
    console.log(result);
  }
}
var answer = add(4, 5)();

//IIFE - Immediately invoked function expressions
(function () {
  console.log("mfm")
})();


setTimeout(function () {
  console.log("hello")
}, 5000)

console.log("After setTimeeout")