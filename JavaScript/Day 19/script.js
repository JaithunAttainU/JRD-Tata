//Functional Programming Paradigm/Principle

//1. Pure Functions

function add(num1, num2, personObj) {  //Pure Function
  //console.log()
  //log.readWrite - Logging
  //num2 = 40;
  // personObj = { name: 'r34r' }
  // if (num1 == 5) {

  //   const result = num1 + num2;
  // }
  return num1 + num2;

  for (var i = 0; i < 100000000000; i++) { //5ms
    //soSomething
  }
  return result;
}



let skipCount = 5;
function randomFunction(num1) { //Impure Function
  return num1 + skipCount;
}

// { 4, 5 } - 9
// add(4, 5) = 9
// add(1, 2) = 3
// add(4, 5) = 9


// randomFunction(1) - 6
// randomFunction(4) - 9

// skipCount = 10;

// randomFunction(1) - 6

/*
i) Referential transparency - The function always gives the same return value for the 
same arguments.This means that the function cannot depend on any mutable state.

ii) Side - Effect free - console.log, I/o, reasign the variables, modify a mutable obj

*/

/**
 * They're easier to reason about and debug because they don't depend on mutable state.
The return value can be cached or "memoized" to avoid recomputing it in the future.
They're easier to test because there are no dependencies (such as logging, Ajax, database, etc.) that need to be mocked.
 */

// 2. Immutability

const skipCount = 5; //- immutable
function randomFunction(num1) {
  return num1 + skipCount;
}

let obj = Object.freeze({ name: 'Ramaanil' })

//Not allowed
obj.name = "dhkcgskdc"
obj.age = 347547

obj = { name: 'sdfgbht' }

// 3.Functional Composition

//(f ∘ g)(x) = f(g(x))
function addOne(x) {
  return x + 1;
}

function square(x) {
  return x * x;
}

function toString(x) {
  return x.toString();
}

toString(square(addOne(1)))

const composedFunction = R.compose(toString, square, addOne)

composedFunction(1)

setTimeout(() => { }, 400)


//default - GET, POST
const fetchPro = fetch('https://jsonplaceholder.typicode.com/users/1') //Pending

fetchPro.then((responseObj) => {
  return responseObj.json()
}).then((data) => {
  console.log("Fulfilled")
  console.log(data)
}, (data) => {
  console.log("Rejected")
  console.log(data)
}).catch((err) => {
  console.log("Errror")
  console.log(err)
})

