const express = require('express')
const jwt = require('jsonwebtoken')
const jsonPostData = require('./mock/posts.json')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//hardcoded values to check user's email & password
const dbUserName = '123@g.com'
const dbPassWord = '123'
const ACCESS_SECRET = 'vjamsvgmdkck<dshjvadfhk'
const REFRESH_SECRET = 'dsfgfrbhryr'

const blackListedTokens = []
app.post('/login', (req, res) => {
  const { username, password } = req.body

  //Get data from DB
  if (username === dbUserName && password === dbPassWord) {

    const payload = { username, isLogged: true }

    //Signing and generating the token
    const accessToken = jwt.sign(payload, ACCESS_SECRET, { expiresIn: '10s', algorithm: 'HS384' })
    const refreshToken = jwt.sign(payload, REFRESH_SECRET, { expiresIn: '1d' })

    return res.json({
      accessToken,
      refreshToken,
      message: "Successfult Logged IN"
    })
  } else {
    res.status(403).json({
      message: 'Invalid UserName/Password'
    })
  }
})


app.get('/refresh', async (req, res) => {
  const refreshToken = req.headers["refreshtoken"]
  if (!refreshToken) {
    return res.status(403).json({
      message: "Refresh Token not present"
    })
  }

  //verifying the token if it is valid
  await jwt.verify(refreshToken, REFRESH_SECRET, function (err, decodedData) {
    if (err) {
      return res.status(401).json({
        message: "Invalid Token"
      })
    }

    const { username, isLogged } = decodedData
    const newAccessToken = jwt.sign({ username, isLogged }, ACCESS_SECRET, { expiresIn: '15s', algorithm: 'HS384' })
    return res.send({
      accessToken: newAccessToken
    })
  });
})

app.delete('/logout', verifyUser, (req, res) => {
  const token = req.headers["authorization"]
  blackListedTokens.push(token)
  res.send("Logged Out Succesfully")
})

async function verifyUser(req, res, next) {
  const token = req.headers["authorization"]

  if (!token) {
    return res.status(403).json({
      message: "Token not present"
    })
  }

  //verifying the token if it is valid
  await jwt.verify(token, ACCESS_SECRET, function (err, decodedData) {
    if (err) {
      return res.status(401).json({
        message: "Invalid Token"
      })
    }

    if (blackListedTokens.includes(token)) {
      console.log(blackListedTokens)
      return res.status(401).json({
        message: "Invalid Token"
      })
    } else {
    //Adding the decoded Data in req in order to access it in other middlewares
    req.userData = decodedData;
    // console.log(decodedData)
    next()
    }
  });

}

app.get('/posts', verifyUser, (req, res) => {
  let filteredPosts = jsonPostData.posts.filter((post) => post.userId === req.userData.username)
  res.send(filteredPosts)
})

const PORT = 8080
app.listen(PORT)
