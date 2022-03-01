//Async Await
//Rest & Spread Operators
//Create our own Promises


//Method: 'GET'

const getJokeBtn = document.getElementById('getJokeBtn')
const displayJokeTag = document.getElementById('jokeID')

//Sample of async - await
async function onClickHandler(event) {

  try {
    const fetchResponse = await fetch('https://jsonplaceholder.typicode.com/users/1') //ResponseObject

    //Js will pause the execution until the previous promise is fulfilled
    const data = await fetchResponse.json()

    //Js will pause the execution until the previous promise is fulfilled.
    console.log(data)
    console.log("Sample")
  } catch (err) {
    console.log("Inside Catch" + err)
  }
}
getJokeBtn.addEventListener('click', onClickHandler)
console.log("After Click")


//Rest & Spread Operators - ...


//Rest - pack multiple elements as array
function add(num1, num2, ...rest) {
  // console.log(num1); //4
  // console.log(num2); //5
  // console.log(rest); //[[4,5], 7,2]

  let sum = num1 + num2;
  for (let index = 0; index < rest.length; index++) {
    sum += rest[index];
  }
  return sum;
}

const total1 = add(4, 5, [4, 5], 7, { name: 'xyz' })
const total2 = add(4)
// const total3 = add(...numbers)


//Spread operator - ... all iterable objects (Unpack Array/String/iterable objects as separate items - spreads)
const numbers = [3, 5, 7, 23, 76, 12, 0]

const [firstEle, secondEle] = numbers
console.log(numbers)
console.log(...numbers)

const myName = 'Roopam'
console.log(...myName)

//Uses - Copying the arrays
const arr1 = [1, 2]
const arr2 = [4, 5]
const arr3 = [2, 7]

const allElements = [1, ...arr1, 4, 8, ...arr2, ...arr3]

//Spread Operator with strings
const str1 = "Hi"
const str2 = "Bye"
console.log(...str1, ...str2)

//Passing Array as comma separated arguments
const min = Math.min(...numbers)


//Create A Promises - To handle async processes

// function fetch() {
//   return new Promise(() => {
//     //http request
//   })
// }

//Pending - Fulfilled/Rejected

const count = 100;
const myOwnPromise = new Promise((resolve, reject) => { // new Array(), new String()
  //async process
  if (count != 100) {
    //Arguments passed in resolve() or reject() would be available inside the callback in .then()
    reject("Promise is rejected")
  } else {
    setTimeout(() => {
      console.log("Set Time out over")
      resolve("Promise is Fulfilled")
    }, 3000)
  }
});

console.log(myOwnPromise)
myOwnPromise.then((data) => {
  console.log(data)
}, (data) => {
  console.log(data)
})

myOwnPromise.catch((error) => {
  console.log("Error")
})
