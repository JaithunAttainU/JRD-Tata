//Iterators & Generators

const arr = [1, 2, 3, 4, 5]
const str = "Hello"

const personObj = {
  name: 'Sapna Saini',
  phone: 4634576547,
  [Symbol.iterator]: function () {
    var count = 0;
    return {
      next: function () {
        count++;
        switch (count) {
          case 1:
            return {
              value: personObj.name,
              done: false
            }
          case 2:
            return {
              value: personObj.phone,
              done: false
            }
          default:
            return {
              value: undefined,
              done: true
            }
        }
      }
    }
  }
}

//1) [Symbol.iterator] : function() {
//   return {
//     next : function() {
//       return {
//         value:
//         done: 
//       }
//     }
//   }
// }

class Person {
  constructor(name, phone) {
    this.name = name,
      this.phone = phone
  }

  [Symbol.iterator]() {
    var count = 0;
    return {
      next: function () {
        count++;

        switch (count) {
          case 1:
            return {
              value: personObj.name,
              done: false
            }
          case 2:
            return {
              value: personObj.phone,
              done: false
            }
          default:
            return {
              value: undefined,
              done: true
            }
        }
      }
    }
  }

}


// dot notation
personObj.name

// bracket notation
personObj["phone"]


//General For Loop
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

//key of objects
for (const key in personObj) {
  console.log(key)
}


//Values of iterable Objects
for (const iterator of personObj) {
  console.log(iterator) //'Sapna Saini' 4634576547 - not possible without defining Symbol.iterator property
}

personObj[Symbol.iterator] = function () {
  return {}
}


//Generator Functions

//generating unique IDS
function* genFunction() {
  var count = 1;
  while (true) {
    yield count; - //2
      count++;
  }
}

//Range Function
function* rangeGen(start = 1, end = 10, skipCount = 2) {
  for (let index = start; index <= end; index += skipCount) {
    yield index;
  }
}