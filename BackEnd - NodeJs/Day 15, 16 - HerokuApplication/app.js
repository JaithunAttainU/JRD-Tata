const express = require('express')
require('dotenv').config()
const app = express()
const postsData = require('./mock/posts.json')

//Getting port number from process.env
const PORT = process.env.PORT || 3000
app.get('/', (req, res) => {
  res.send("Hello")
})

app.get('/posts', (req, res) => {
  res.json(postsData.posts)
})
console.log(process.env)
app.listen(PORT)