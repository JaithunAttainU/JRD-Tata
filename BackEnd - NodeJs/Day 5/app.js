const express = require('express')
const { writeFile } = require('fs')
const app = express()
// const postMockData = require('./mock/posts')


const jsonPostData = require('./mock/posts.json')
// const bodyParser = require('body-parser')

//body-parser
//middleware
app.use(express.json())

//Virtual Path
app.use(/*'/home', */express.static('public'/*, { index: false }*/))

// app.use(express.static('files'))
app.get('/', (req, res) => {
  res.send("Hello")
})

app.get('/posts', (req, res) => {
// validation()
  const { userId, title } = req.query

  if (!userId) {
    // res.status(400)
    res.status(400).send("Invalid Input, Please give UserId to fetch the posts")
    return
  }
  let filteredPosts = jsonPostData.posts

  if (userId) {
    filteredPosts = filteredPosts.filter((post) => post.userId == Number(userId))
  }

  if (title) {
    filteredPosts = filteredPosts.filter((post) => post.title == title)
  }
  res.send(filteredPosts)
})

app.get('/posts/:postId', (req, res) => {
  // validation()
  const { postId } = req.params
  const filterByPostID = jsonPostData.posts.filter((post) => post.id == Number(postId))
  if (filterByPostID.length == 0) {
    res.status(404).send("No Data Found")
  } else {
    res.send(filterByPostID[0])
  }
})

app.post('/posts', (req, res) => {
  // validation()
  console.log("Body", req.body)
  const postData = req.body

  //validate of user data - postData
  // validateUserData(postData)
  jsonPostData.posts.push(postData)

  writeFile('./mock/posts.json', JSON.stringify(jsonPostData), (err) => {

    if (err) {
      res.status(500).send("Error adding data")
      return
    }
    const response = {
      ...postData,
      status: 'Succesfull'
    }
    res.json(response)
  })
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


//to handle all http methods
app.all('/', (req, res) => {

})

// app.get('/home', () => {
// })

// app.put('/home', () => {
// })

// app.delete('/home', () => {
// })

app.listen(8081)