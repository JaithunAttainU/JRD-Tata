
//Hoisting

var result = add(5, 4)

console.log(studentName) //undefined
var studentName = 'Sitanshu';


function add(num1, num2) {

  console.log(studentAge);

  var studentAge = 25;
  function doSomething() {

  }
  return num1 + num2
}

// appears to be ->

var studentName;
var result;
function add(num1, num2) {
  return num1 + num2
}

console.log(studentName)
studentName = 'Sitanshu';
result = add(5, 4)



//Closures
var count = 0;
function addCount() {
  count++;
}




var cartObj = (function () {
  var totalPrice = 0;

  var kdskdlc = 100;

  function addProductPrice(amount) {
    totalPrice += amount;
    console.log(kdskdlc)
    // var addVariable = 10
    // function doSomething() {
    //   console.log(addVariable);
    //   console.log(totalPrice);
    // }

    // return doSomething
  }

  function removeProductPrice(amount) {
    totalPrice -= amount;
  }

  function getPrice() {
    return totalPrice;
  }

  return {
    addPrice: addProductPrice,
    removePrice: removeProductPrice,
    getPrice: getPrice
  };
})();


cartObj.addPrice(10);
// addProductPrice(5)


// //Example MCQ
var a = 1;
function b() {
  console.log(a);
  a = 10;
  return;
  function a() {
    console.log("doSomething")
  }
}
b();
console.log(a);

// //1 10

// //10 1

// //1 

// MCQs
console.log("110" - 2) //110 - 2 108

console.log("sdfer" - 5) //-> Nan - 5 -> NaN