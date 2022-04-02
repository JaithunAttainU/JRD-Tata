
//DB Connection
const mongoose = require('mongoose')

async function initMongoDB() {
  await mongoose.connect(process.env.MONGO_URL, (err) => {
    if (err) {
      console.log("Error in connecting to DB")
    } else {
      console.log("successfully connected to DB")
    }
  })
}

module.exports = {
  initMongoDB
}