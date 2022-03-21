const usersMockData = require('../mocks/users.json')

const getUserData = (req, res) => {
  const { userId } = req.params
  const userData = usersMockData.users.filter((user) => user.id == Number(userId))
  res.send(userData)
}

const postUserData = (req, res) => {
  const userData = req.body
  usersMockData.users.push(userData)
  res.send("Posted Successfully")
}

const editUserData = (req, res) => {
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
}

const deleteUserData = (req, res) => {
  const { userId } = req.params
  usersMockData.users = usersMockData.users.filter((user) => user.id !== Number(userId))
  res.send("Deleted Successfulyy")
}

module.exports = {
  getUserData, deleteUserData, postUserData, editUserData
}