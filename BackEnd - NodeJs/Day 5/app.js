const express = require('express')
const app = express()
const postMockData = require('./mock/posts')

//middleware
app.use(express.json())

//Virtual Path
app.use(/*'/home', */express.static('public'/*, { index: false }*/))

// app.use(express.static('files'))
app.get('/', (req, res) => {
  res.send("Hello")
})

app.get('/posts', (req, res) => {

  const { userId, title } = req.query

  let filteredPosts = postMockData.posts

  if (userId) {
    filteredPosts = filteredPosts.filter((post) => post.userId == Number(userId))
  }

  if (title) {
    filteredPosts = filteredPosts.filter((post) => post.title == title)
  }
  res.send(filteredPosts)
})

app.get('/posts/:postId', (req, res) => {

  const { postId } = req.params
  const filterByPostID = postMockData.posts.filter((post) => post.id == Number(postId))
  if (filterByPostID.length == 0) {
    res.send("No Data Found")
  } else {
    res.send(filterByPostID[0])
  }
})

app.post('/posts', (req, res) => {
  const postData = req.body
  postMockData.posts.push(postData)

  const response = {
    ...postData,
    status: 'Succesfull'
  }
  res.json(response)
})

// app.get('/home', (req, res) => {
//   res.sendFile(`${__dirname}/public/index.html`)
// })

// app.get('/script.js', () => {
//   res.sendFile('/Users/jmahirakz/FE/BackEnd - NodeJs/Day 5/files/script.js')
// })
// app.get('/categories/:subCategory/:subCategory2', (req, res) => {
//   console.log(req.params)
// })


// app.get('/posts/1')

// app.get('/posts/2')

// app.get('/posts/3')


const obj = { name: '34543', id: 2343, hobbies: { name: 'draw' } }
console.log(obj.toString())
console.log(JSON.stringify(obj))


app.listen(8081)