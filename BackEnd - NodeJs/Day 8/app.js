

const express = require('express')
const app = express()
app.use(express.json())
const usersMockData = require('./mocks/users.json')

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
