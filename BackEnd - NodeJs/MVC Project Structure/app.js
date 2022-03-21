

const express = require('express')
const app = express()
const userRoutes = require('./routes/users')

app.use(express.json())
app.use('/', userRoutes)
app.listen(8081)


//Example of SetImmediate & Internal Working of Event Loop in Node JS
setTimeout(() => {
  console.log("Timer")
}, 0)

setInterval(() => {
  console.log("Interval")
}, 1000)

setImmediate(() => {
  console.log("Immediate")
})

const fs = require('fs')
fs.readFile('Sample.txt', () => {
  console.log("I/O")
  setTimeout(() => {
    console.log("timers")
  }, 0)
  setImmediate(() => {
    console.log("Immediate")
  })
})