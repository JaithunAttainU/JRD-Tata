const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("<h1>Hello</h1>")
})

app.get('/students', (req, res) => {

  //Accessing Query Params from request obj
  const { name } = req.query
  console.log(name)
  res.send(`Hello ${name}`)
})


// app.get('/categories/clothing/men/', (req, res) => {
//   res.send("Hello Students")
// })
// app.get('/categories/furniture', (req, res) => {
//   res.send("Hello Students")
// })
// app.get('/categories/mobiles', (req, res) => {
//   res.send("Hello Students")
// })
// app.get('/categories/mobiles', (req, res) => {
//   res.send("Hello Students")
// })
app.listen(8000)