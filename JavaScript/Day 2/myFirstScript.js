
console.log(studentsName);
var studentsName = "xyz";

//Conditional Statements - If..else

// Syntax
// if (conditions) {
//   expresssions(or) statements
// } else if (condition2) {

// } else if (condition3) {

// } else {

// }
var num = 10;
if (num % 2 == 0) {
  console.log("Even")
} else {
  console.log("Odd")
}

//If..else if ...else
if (num % 3 == 0 && num % 5 == 0) {
  console.log("Divisible by 3 & 5")
} else if (num % 3 == 0) {

} else if (num % 5 == 0) {

} else {

}

//Switch Statements
var num = 100;
switch (num) {
  case 1:
    console.log("Mon")
    break;
  case 2:
    console.log("Tue")
    break;
  case 3:
    console.log("Wed")
    break;
  case 4:
    console.log("Thur")
    break;
  case 5:
    console.log("Friday")
    break;
  default:
    console.log("default")
    break;
}

// Loops - for, while, do while


//for loop - Sum of n natural numbers
// Syntax
// for (initialization; considtion; increment / decrement) {

// }
var n = 10;
var sum = 0;
var index;
for (index = 1; index <= n; index++) {
  sum += index;
}
console.log(sum)
console.log(index)



//for in loop - for of loop

var students = { age: 'Srihari', address: 'hbjk,h' };

for (var prop in students) {
  console.log(prop)
}

var arr = ['sdwe', 'fderfe', 'dervcer'];

//loops through the properties of object
for (var prop in arr) {
  console.log(prop)
}

//for of loop
console.log("For of")
for (var arrValue of arr) {
  console.log(arrValue)
}

// while loop

// Syntax
// while (condition) {
//     //expresions
//   }

var num = 10;
var index = 1;
var sum = 0

while (index <= num) {
  if (index == 5) {
    continue;
  }
  sum += index;
  index++;
}
console.log(sum)


//do..while loop
var num = 10;
var index = 11;
var sum = 0
do {
  sum += index;
  index++;
} while (index <= num); //atleast once

console.log(sum)

//return statements
function add(num1, num2) {
  var answer = num1 + num2;
  if (num1 == 10)
    return;
  return answer;
}
var result = add(4, 5);

console.log("Result", result)