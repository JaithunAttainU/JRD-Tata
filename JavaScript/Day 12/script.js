//template strings
//new string methods

// Arrow Functions
// Destructing

const productName = 'category';
// const productName = "category";


const firstName = 'Pravin'
const lastName = 'Kumar'
const age = 25

const personDetails = "My name is" + firstName + " " + lastName + ". My age is" + age;

// Template Strings - ``

const details = `My name is ${firstName} ${lastName}. My age is ${age}`

//Preserves formatting/indentation/space
const htmlTag = `<body>
<div>
    <div>
    </div>
  </div>
</body>`

console.log(htmlTag)

//String Methods

const sentence = 'Template literals sound quite fancy, but underneath the jargon, they are just string literals that allow embedded expressions.'

console.log(sentence.startsWith('template')) //false - Case Sensitive
console.log(sentence.startsWith('Template')) //true

//params = searchString, endPosition
console.log(sentence.endsWith('sample', 30))

console.log(sentence.repeat(5))

console.log(sentence.includes('sound quite')) //true

console.log(sentence.charAt(0)) // 'T'


//Arrow Functions


// Function statements / declaration / named function
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}
add();

//function expressions
const add = function (num1, num2) {
  // const result = num1 + num2;
  return num1 + num2;
}
add();


//arrow functions
const add = (num1, num2) => {
  const result = num1 + num2;
  return result;
}

//shorter version
const add = (num1, num2 = 9) => num1 + num2;

const result = add(5);

const printName = name => console.log(name);

//Html Element Events
const btnEle = document.addEventListener('click', event => event.stopPropagation());

/** Limitations of Arrow Functions
 * • Does not have its own bindings to this or super, and should not be used as methods.
   • Does not have arguments, or new.target keywords.
   • Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
   • Can not be used as constructors.
   . Can not use yield, within its body.
 */


let product1 = {
  productName: 'P1',
  category: 'electronics',
  price: 1000,
  description: () => { //Cannot use arrow functions here
    console.log(this.productName); // 'window object'
  }
}
product1.description()

const add = (num1, num2 = 9) => num1 + num2;
add.call(this, 5, 4)//not possible

//not possible
const Person = (name, age, address) => {
  //this = {}
  this.name = name;
  this.age = age;
  this.address = address

  yield //Arrow functions should not be used if functions contains yield keyword
  //return this
}


// //Destructuring- arrays and objects
const studentDetails = ['Swapnil', 'Banker', 25, '1112, abc stree'];

function printDetails(studentDetails) {
  // const firstName = studentDetails[0];
  // const lastName = studentDetails[1];
  // const age = studentDetails[2];

  const [firstName, lastName, age] = studentDetails

  // const [firstName, , age] = studentDetails
  // console.log(studentDetails[0]);
  // console.log(studentDetails[1]);
  console.log(firstName + age)
}

// ['Swapnil', 'Banker', 25, '1112, abc stree'];
// [0: firstName, 1: lastName, 2: age]


let product1 = {
  productName: 'P1',
  title: 'electronics',
  price: {
    discount: 5,
    rate: 1000
  },
  description: function () {
    console.log(this.productName);
  }
}
product1.description();


function printProductDetails(product) {
  const title = 'Attainu Class';
  const { productName, title: productTitle } = product; //destructuring objects
  console.log(productName + productTitle + title)
}

// MCQS

// setTim - 1 //3
// setTim - 1 //3
// setTim - 1 //3


// setTim - 1 - Lexical Scope - i = 0 //0
// setTim - 1 - Lexical Scope - i = 1 //1
// setTim - 1 - Lexical Scope - i = 2 //2

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1);
}

// This always points to the object from where you are calling the function/methods

function detail() {
  console.log(this) //window
}
detail(); //(or) window.detail()


