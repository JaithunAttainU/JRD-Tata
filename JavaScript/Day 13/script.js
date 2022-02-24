//Prototypal Inheritance - __proto__, prototype
//Es6 Classes - Syntatic sugar - constructor functions
//Getters and Setters

const person = {
  name: 'Akhilesh',
  details: function () {
    console.log(this.name)
  }
}


// Object -> Person - > Engineer - > p1.__proto__
//Prototype - Construtor functions

// function Person(name) { //Person.prototype
//   this.name = name;;
//   this.age = age
//   this.details = function () {
//     console.log(this.name)
//   }
// }

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }

  details() {
    console.log(this.name)
  }
}


class Rectangle {
  constructor(l, b) {
    this._length = l;
    this._breadth = b;
  }

  get length() {
    console.log("GET")
    return this._length
  }

  set length(value) {
    console.log("SET")
    this._length = value
  }

  get breadth() {
    return this._breadth;
  }

  set breadth(value) {
    this._breadth = value
  }

  getArea() {
    return this._length * this._breadth
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.side = side
  }
}

const r1 = new Rectangle(10, 5)
const sq = new Square(5)

const p1 = new Person('Deepa', 24)
const p2 = new Person('Sudhakar', 25)
// p1.details("fer")
const arr = [1, 2, 4]

arr.includes()
// Array, String, Function


// MCQS
// let fruit = 'apple'
// let fruit = 'orange'

// console.log(fruit)

var a = 0;
var b = 0;
while (a < 3) {
  a++;
  b += a;
  console.log(b); //1 3 6
}

// a: 3  b: 6