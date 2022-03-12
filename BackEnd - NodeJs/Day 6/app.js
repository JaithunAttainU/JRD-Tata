const express = require('express')
const app = express()

// const rateLimiter = require('express-rate-limit')
// app.use(rateLimiter({
//   windowMs: 1//time,
//   max: 5
// }))

//Common Express Middlewares
//morgan
//helmet
//cors


//CustomMiddleware
app.use(authUser)
// app.use(middleware2)

app.get('/posts', (req, res, next) => {
  console.log("Form Get")
  // next()
  res.send("Get")
})


app.put('/posts', (req, res, next) => {
  res.send("Put Posts")
})

app.post('/posts', (req, res, next) => {
  res.send("Post Posts")
})

// app.use('/posts',middleware2) 
// Route Based Middlewares
app.delete('/posts', middleware2, (req, res, next) => {
  res.send("Delete Posts")
})

// app.use(errorMiddleware())
function authUser(req, res, next) {

  //checking data from Data
  let validUser = true;

  // if (userName == req.userName && password === req.password) {
  //   validUser = true
  // }

  console.log("From Auth Middleware1")
  if (!validUser) {
    res.send("Invalid User")
  }
  //important to call the next middleware
  next()
}

function middleware2(req, res, next) {

  //checking data from Data
  let validUser = true;

  // if (userName == req.userName && password === req.password) {
  //   validUser = true
  // }
  console.log("From Auth Middleware2")
  if (!validUser) {
    res.send("Invalid User")
  }
  next()
}

app.listen(8081)