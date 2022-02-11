//Object 
var studentDetails = {
  name: 'Brian',
  address: "sdefre"
}

var listOfStudents = new Array("frefe", "wefer");
var classNames = ['dwfer', "frerfe", 'efder'];

classNames[6] = "sdfve";
//access
console.log(classNames[6])

for (var index = 0; index < classNames.length; index++) {
  console.log(classNames[index])
}

var mixed = [2, undefined, 'dcfd', { name: "imran" }, function () { console.log("dfer") }]

//length
mixed.length

var newLength = listOfStudents.push("karthik", "lavanya");
var poppedEle = listOfStudents.pop();

var newLength = listOfStudents.unshift("Jaithun", "ddc")
var firstRemovedEle = listOfStudents.shift();

console.log(listOfStudents.toString())


var numbers = [1, 2, 5, 4]
console.log(numbers.join("-"))
console.log(numbers.reverse())

var newNumbers = [6, 7, 2, 4]

//returns a new Array
numbers.concat(newNumbers)

//returns a new array
//slice
numbers.slice(1, 3)
numbers.slice(1)

//in-place
//splice(startIndex, deleteCount, item1, item1,....itemn)
var animals = ['lion', 'fox', 'tiger']
animals.splice(1, 2, "cat", "dog")

animals.indexOf('lion')
animals.lastIndexOf('lion')


var numbers = [65, 45, 23, 76]
console.log(numbers.sort(function (a, b) {
  return 0;
}))

setTimeout(function () {
  console.log("hi")
}, 8000);

//forEach
//map
//filter
//reduce
//every & some