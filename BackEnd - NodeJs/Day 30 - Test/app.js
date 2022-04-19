function isOdd(num) {
  // if (!Number(num)) throw new Error("Invalid Param")
  if (typeof num === "string") throw new Error("Invalid Param, it is string")
  if (typeof num === "object") throw new Error("Invalid Param, it is object")
  return num % 2 != 0
}

function maketoLower(arr) {
  return arr.map(word => word.toLowerCase())
}

module.exports = {
  isOdd, maketoLower
}