const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.pre("save", async function (next) {
  console.log(this.password)
  //hashing Password
  const hashPass = await bcrypt.hash(this.password, 5)
  this.password = hashPass
  console.log("Save Middleware 1")
})

userSchema.pre("save", function () {
  console.log("Save Middleware 2")
})

userSchema.pre("find", function () {
  console.log("FindMiddleware")
  this.startTime = Date.now()
})

userSchema.post("find", function (data) {
  console.log("Post find middleware")
  const totaltime = Date.now() - this.startTime
  console.log("Time required for find operation", totaltime)
  console.log("Find Data is", data)
})

userSchema.post('save', function () {
  console.log("After Save Operation")
})
const UserModel = mongoose.model('user_detail', userSchema)

module.exports = UserModel
