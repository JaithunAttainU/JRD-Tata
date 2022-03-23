

const express = require('express')
const app = express()
const session = require('express-session')
const usersMockData = require('./mocks/users.json')
const { authUser } = require('./middlewares/middleware.js')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Session configuration
const ONEDAY = 1000 * 60 * 60 * 24

//memory Store - Not mandatory
const myStore = new session.MemoryStore()
app.use(session({
  secret: 'ykuftfkv,gb,eregserhtsh',
  cookie: { maxAge: ONEDAY },
  resave: true,
  name: 'session-id', //change the cookie name
  store: myStore,     //configure the DB/Cache store
  saveUninitialized: false

  //To rewrite/override Unique ID generation
  // genid: function (req) {
  //   return 1
  // },
}))


//hardcoded values to check user's email & password
const dbUserName1 = '123@g.com'
const dbPassWord1 = '123'

const dbUserName2 = 'abc@g.com'
const dbPassWord2 = 'abc'


app.post('/login', (req, res) => {
  const { username, password } = req.body

  //Get data from DB
  if ((username === dbUserName1 && password === dbPassWord1) || (username === dbUserName2 && password === dbPassWord2)) {
    // //write data to my session
    console.log(req.session)

    // adding user data in session
    req.session.userID = username
    req.session.isLogged = true

    console.log(req.session)

    // res.cookie("USER1", username, { maxAge: ONEDAY })
    res.redirect('/users')
  } else {
    res.send("Invalid UserName/Password")
  }
  console.log(username, password)
})

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

app.get('/users', authUser, (req, res) => {
  //get data from DB
  // console.log(req.headers.cookie) //string

  // if(req.headers.cookie.includes('USER1')) {
  // } else {
  //   res.send
  // }
  console.log(myStore)
  res.send(usersMockData.users)
})

app.get('/users/:userId', authUser, (req, res) => {
  const { userId } = req.params
  const userData = usersMockData.users.filter((user) => user.id == Number(userId))
  res.send(userData)
})

app.post('/users', authUser, (req, res) => {
  const userData = req.body
  usersMockData.users.push(userData)
  res.send("Posted Successfully")
})

app.put('/users/:userId', authUser, (req, res) => {
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

app.delete('/users/:userId', authUser, (req, res) => {
  const { userId } = req.params
  usersMockData.users = usersMockData.users.filter((user) => user.id !== Number(userId))
  res.send("Deleted Successfulyy")
})

app.post('/logout', (req, res) => {
  //To destroy the session
  req.session.destroy()
  res.send("Logged Out")
})
app.listen(8081)
