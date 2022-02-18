// // Immediately Invoked Function Expressions(IIFE)

// //function statements
function add(num1, num2) {
  return num1 + num2
}

// // function expressions

var add = function (num1, num2) {
  return num1 + num2
}

add();

var result = (
  function add(num1, num2) {
    return num1 + num2
  }
)(5, 4);

(
  function (num1, num2) {
    return num1 + num2
  }
)(5, 4);

// //function statements /function definitions
// function add() {

// }
// add()

// //function expressions
// var add = function () {

// }
// add()

//MCQ
var x = 10;
console.log(x);

if (true) {
  var x = 20;
  console.log(x);
}
console.log(x);

// x: 20   //10 20 20


// setTimer() - only once after the time

// setInterval() - run after each interval - 5s 5s, 10s,15s,20s

function doSomethingTimer(name) {
  console.log("Timer")
  console.log("Name" + name)
}

console.log("Before Timer")
//(callBackFunc, time)
var timerId = setTimeout(doSomethingTimer, 5000)

var count = 0;
function intervalFunction() {
  count++;
  console.log("Interval")
  if (count == 1) {
    clearInterval(intervalId)
    // clearTimeout(timerId)
  }
}

var intervalId = setInterval(intervalFunction, 2000)
console.log("After Timer")


//MCQs
var temp = 'hi';
function display() {
  console.log(temp);
  var temp = 'bye';
};
display();
console.log(temp);

// global scope
// temp: 'hi'
// display: function display() {
//   console.log(temp);
//   var temp = 'bye';
// };


// function scope/local scope
// temp: 'bye'


// //undefined hi


// function add() {

// }

// MCQs
var fn;
if (false) {
  fn = function () {
    return 10;
  }
} else {
  fn = function () {
    return 20;
  }
}
var result = fn();


// fn: function () {
//   return 20;
// }

// result: 20