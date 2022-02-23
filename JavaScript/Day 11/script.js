/*
Topics Covered
call() and apply() - borrow functions / methods from other objects
Date Object
features - let & const
*/


//Call() and Apply() Methods
function description(random1, random2) {
  console.log(this.productName + random1 + " " + random2)
}

var product1 = {
  productName: 'P1',
  category: 'electronics',
  price: 1000
}
description(); //(or) window.description();
description.apply(product1, ["dscsd", "sdvsfd"]);

var product2 = {
  productName: 'P2',
  category: 'clothing',
  price: 2000
}
description.call(product2, "dcsdc", "dcsdc");

function Person(name, age, address) {
  //this = {}
  this.name = name;
  this.age = age;
  this.address = address
  //return this
}

function Student(name, age, address, marks) {
  /**
   * Reusing Person Constructor function by using call()
   * this.name = name;
   * this.age = age;
   * this.address = address
   */

  Person.call(this, name, age, address)
  this.marks = marks;
}

function Employee(name, age, address, salary) {
  /**
   * Reusing Person Constructor function by using call()
   * this.name = name;
   * this.age = age;
   * this.address = address
   */

  Person.call(this, name, age, address)
  this.salary = salary;
}

// Date Objects
var currentTime = new Date();

/**
 * Other Ways of creating date object
 * new Date()
 * new Date(value)
 * new Date(dateString)
 * new Date(dateObject)
 * 
 * new Date(year, monthIndex)
 * new Date(year, monthIndex, day)
 * new Date(year, monthIndex, day, hours)
 * new Date(year, monthIndex, day, hours, minutes)
 * new Date(year, monthIndex, day, hours, minutes, seconds)
 * new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
 */

//Common methods of date Object

console.log(currentTime.getDate())
console.log(currentTime.getDay())
console.log(currentTime.getHours())
console.log(currentTime.getMonth())
console.log(currentTime.getMinutes())
console.log(currentTime.getFullYear())

/**
 * Refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */


//MCQs

var dummy = 10;
(function () {
  console.log(dummy); //10
  dummy = 20;
  console.log(dummy); //20
})();

console.log(dummy); //20
var dummy = 30;

/**
 * Answer: 10 20 20
 */

// 2009 - 2015 - ES5
// ES6 - EcmaScript (2015) - Es7 Es8


// let and const

/**
 * let & const - declare / initialize first before accessing it
 * Are hoisted but in a different memory - which will not allow you to accces - hoisting happens
 * let & const are block scope
 * Cannot have variable name duplication
 */


console.log(age) //error
const age = 10;

console.log(personName)//referrence error
let personName = 'Lavanya'


let language = 'english'

//block scope
{
  const productName = "Mobile"
  console.log(productName); //mobile
}

{
  const productName = "dress";
  // productName = "fefv" //not possible with const
  console.log(productName); //mobile
}
console.log(productName); //error

//Other Examples of Block Scope
if (true) {
  let age = 10;
} else {

}

//Example of function scope/ local scope
function add(num1, num2) {

}

//Can reassign variables if it declared using let keyword
let productName = 'P1';
productName = "p2";

//Cannot reassign const variables entirely
const studentName = 'Rahul';
studentName = 'Reena'; //not possible

const product2 = {
  productName: 'P2',
  category: 'clothing',
  price: 2000
}

//Complete reassigning const variables are not possible
product2 = {
  productName: 'P2',
  category: 'clothing',
  price: 2000
}
//Object Properties can be changed
product2.category = "electronics"


const arr = [123, 435, 45646];

//Complete reassigning const variables are not possible
arr = [100, 435, 45646];

//Can change values by accessing index
arr[0] = 100


let companyName = 'Attainu';
let companyName = 'xyz'
{
  companyName = 'xyz'
  console.log(companyName);
}
console.log(companyName)


//MCQs

var dummy = 10;
(function () {
  console.log(dummy); //undefined
  var dummy = 20;
  console.log(dummy);  //20
})();

console.log(dummy);
var dummy = 30;
//Answer: undefined 20 10


var dummy = 10;
(function () {
  dummy_3 = 35;
  console.log(dummy_3); //35
  var dummy_3 = 45;
  dummy_2 = 15;
  console.log(dummy); //10
})();
console.log(dummy_2); //15
console.log(dummy_3); //ReferenceError
var dummy = 30;


// MCQS:

console.log("hello" || "world")
console.log("foo" && "bar")

console.log(true || false)
console.log(false || true)

console.log(true && true)
