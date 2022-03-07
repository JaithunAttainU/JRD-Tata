const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("<h1>Hello</h1>")
  // res.sendFile()
  res.end()
})

app.get('/students', (req, res) => {
  res.send("Hello Students")
  res.end()
})

app.listen(8000)