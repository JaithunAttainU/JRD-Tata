const express = require('express')
const jwt = require('jsonwebtoken')
const jsonPostData = require('./mock/posts.json')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//hardcoded values to check user's email & password
const dbUserName = '123@g.com'
const dbPassWord = '123'
const SECRET = 'vjamsvgmdkck<dshjvadfhk'

app.post('/login', (req, res) => {
  const { username, password } = req.body

  //Get data from DB
  if (username === dbUserName && password === dbPassWord) {

    const payload = { username, isLogged: true }

    //Signing and generating the token
    const token = jwt.sign(payload, SECRET, { expiresIn: '1d', algorithm: 'HS384' })
    console.log(token)
    return res.json({
      accessToken: token,
      message: "Successfult Logged IN"
    })
  } else {
    res.status(403).json({
      message: 'Invalid UserName/Password'
    })
  }
})


async function verifyUser(req, res, next) {
  const token = req.headers["authorization"]

  if (!token) {
    return res.status(403).json({
      message: "Token not present"
    })
  }

  //verifying the token if it is valid
  await jwt.verify(token, SECRET, function (err, decodedData) {
    if (err) {
      return res.status(401).json({
        message: "Invalid Token"
      })
    }

    //Adding the decoded Data in req in order to access it in other middlewares
    req.userData = decodedData;
    // console.log(decodedData)
    next()
  });

}

app.get('/posts', verifyUser, (req, res) => {
  let filteredPosts = jsonPostData.posts.filter((post) => post.userId === req.userData.username)
  res.send(filteredPosts)
})

const PORT = 8080
app.listen(PORT)
