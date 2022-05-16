let count = 0;

const displayElement = document.getElementById('displayCount')

displayElement.innerHTML = `<p>You pressed <span>${count}</span></p>`
function increment() {
  count++;
  displayElement.innerHTML = `<p>You pressed <span>${count}</span></p>`
}

function decrement() {
  count--;
  displayElement.innerHTML = `<p>You pressed <span>${count}</span></p>`
}
// // true = 1
// // false = 0

// +true; // +1 = 1
// !'Name'; // !true

// // !true // false
// // //Question 1

const dummyString = "Sapna"

if (dummyString) {
  console.log("Hello Sapna")
}

// //Falsy Values 
// //There are only six falsey values in JavaScript: undefined, null, NaN, 0, "" (empty string), and false of course.

// sum(1)(2)(7)(9)(); //19
// sum(1)(); //1
// sum(1)(2)(); //3

// // //
// // sum(1)(2)(3); //3
// // sum(5)(6); //11

// //Currying
var sum = function (a) {
  return function (b) {
    return a + b
  }
}


var sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b)
    }
    return a
  }
}

// sum(1)(2)(7)(9)();

// sum(1) = function (b) {
//   if (b) {
//     return sum(a * b)
//   }
//   return a
// }

// sum(1)(2) = sum(3);

// sum(3) = function (b) {
//   if (b) {
//     return sum(a + b)
//   }
//   return a
// }

// sum(3)(7) = sum(10)

// sum(10) = function (b) {
//   if (b) {
//     return sum(a + b)
//   }
//   return a
// }

// sum(10)(9) = sum(19)

// sum(19) = function (b) {
//   if (b) {
//     return sum(a + b)
//   }
//   return a
// }

// sum(19)() = 19

// // const Sum = a => b => b ? Sum(a + b) : a;


// console.log(sum(3)(2)(7)(9)); //19

// function add(x) {
//   let sum = x;
//   function resultFunc(y) {
//     sum += y;
//     return resultFunc;
//   }
//   resultFunc.valueOf = function () {
//     return sum;
//   };
//   return resultFunc;
// }

// //MCQ
// console.log(5 < 6 < 7) = true < 7 = 1 < 7 = true
// console.log(7 > 6 > 5) = true > 5 = 1 > 5 = false


let a = true;
setTimeout(() => {
  a = false
}, 2000)

// while (a) {
//   console.log("Hello")
// }

setInterval(() => {
  if (a) {
    console.log("Hello")
  }
}, 300)

// // 1800 //6 2100
// // Subhash - Hello(infinite)
// // Roopam - Hello
// // Swapnil - Print Hello for 2 sec


var dummyFunc = function () {
  var variable1;
  var variable2;
  {
    (function () {
      var variable1 = "let"
      var variable2 = "var"

      console.log(variable1) //let
      console.log(variable2) //var
    })()
  }

  {
    (function () {
      var variable1 = "let"
      var variable2 = "var"
    })()

  }

  console.log(variable2) //error
  console.log(variable1) //error
}

dummyFunc()


foo()
var dummy;
var foo = function () {
  console.log("Hi There")
}

// dummy //undefined
// foo undefined
// console.log(variable1)

let variable1;
console.log(variable1)

// // fooFunc()
let fooFunc = function () {
  console.log("fooFunc")
}
fooFunc()

// Write a function that takes an array of functions and outputs a function that will pass the given value through the pipeline of functions

// ### Example 1

// javascript

const pipeline = [
  (num) => num - 1,
  (num) => num * 10,
  (num) => `${num} as a string`
];

const composed = compose(pipeline);

console.log(composed(4)) // => `30 as a string`

function compose(pipeline) {
  return function (num) {
    for (let i = 0; i < pipeline.length; i++) {
      num = pipeline[i](num);
      console.log(num)
    }
  }
}

function dummy(pipeline) {
  return function (num) {
    for (let i = 0; i < pipeline.length; i++) {
      let pipelinefunc = pipeline[i];
      num = pipelinefunc(num) //30

    }
    return num
  }
}

const person = {
  name1: 'Shubhankar',
  printDetails: () => {
    console.log(this.name1) //window
  }
}

person.printDetails() //this - window

let dummyFunc1 = person.printDetails.bind(person)
dummyFunc1(); //this - window


let obj1 = {
  name1: 'Kanhu'
}


// function testFunc() {
//   console.log("TestFunc", this)
// }

// testFunc();

let dummyFunc2 = person.printDetails.bind(obj1)
dummyFunc2();



// let var1 = 10;

// let var2 = var1;

// console.log(var2);


//map, reduce, filter - default

const arr = [1, 2, 3, 4, 5]

const result = arr.map((num, i, arr) => {
  return num * 2;
})

const oddNumbers = arr.filter(num => {
  return num % 2 == 0
})
console.log(result)

const sum = arr.reduce((acc, curr, index, array) => {
  acc += curr;
  return acc;
})

Array.prototype.myMap = function (callback) {
  let temp = []
  for (let index = 0; index < this.length; index++) {
    temp.push(callback(this[index]))
  }
  return temp
}

Array.prototype.myFilter = function (callback) {
  let temp = []
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index])) {
      temp.push(this[index])
    }
  }
  return temp
}

Array.prototype.MyReduce = function (callback, initialVal) {
  let acc = initialVal
  for (let index = 0; index < this.length; index++) {
    acc = acc ? callback(acc, this[index], index, this) : this[index]
  }
  return acc;
}

const resuktMyMap = arr.myMap((num) => {
  return num * 2
})



console.log(resuktMyMap)