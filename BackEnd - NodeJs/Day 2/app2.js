function print(str) {
  console.log(str)
}

function sub(num1, num2) {
  return num1 - num2
}

const randomNumber = 5;

//module.exports = sub
module.exports = {
  sub, print, randomNumber
}