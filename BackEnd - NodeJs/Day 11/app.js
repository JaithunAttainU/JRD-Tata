

const express = require('express')
const app = express()
const session = require('express-session')
const usersMockData = require('./mocks/users.json')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Session configuration
const ONEDAY = 1000 * 60 * 60 * 24
app.use(session({
  secret: 'ykuftfkv,gb,',
  cookie: { maxAge: ONEDAY },
  resave: true,
  saveUninitialized: false
}))

//hardcoded values to check user's email & password
const dbUserName = '123@g.com'
const dbPassWord = '123'

app.post('/login', (req, res) => {
  const { username, password } = req.body

  //Get data from DB
  if (username === dbUserName && password === dbPassWord) {
    //write data to my session
    console.log(req.session)

    // adding user data in session
    req.session.userID = username
    req.session.isLogged = true

    console.log(req.session)
    res.redirect('/users')
  } else {
    res.send("Invalid UserName/Password")
  }
  console.log(username, password)
})

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

app.get('/users', (req, res) => {
  //get data from DB
  res.send(usersMockData.users)
})

app.get('/users/:userId', (req, res) => {
  const { userId } = req.params
  const userData = usersMockData.users.filter((user) => user.id == Number(userId))
  res.send(userData)
})

app.post('/users', (req, res) => {
  const userData = req.body
  usersMockData.users.push(userData)
  res.send("Posted Successfully")
})

app.put('/users/:userId', (req, res) => {
  const { userId } = req.params
  const userData = req.body
  usersMockData.users = usersMockData.users.map((user) => {
    if (user.id == Number(userId)) {
      return userData
    } else {
      return user
    }
  })
  res.send("Updated succefully")
})

app.delete('/users/:userId', (req, res) => {
  const { userId } = req.params
  usersMockData.users = usersMockData.users.filter((user) => user.id !== Number(userId))
  res.send("Deleted Successfulyy")
})
app.listen(8081)
