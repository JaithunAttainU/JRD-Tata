const express = require('express')
const usersMockData = require('../mocks/users.json')
const { getUserData, deleteUserData, editUserData, postUserData } = require('../controllers/users')

const route = express.Router();
route.get('/users', (req, res) => {
  //get data from DB
  res.send(usersMockData.users)
})

route.get('/users/:userId', getUserData)
route.post('/users', postUserData)
route.put('/users/:userId', editUserData)
route.delete('/users/:userId', deleteUserData)

module.exports = route