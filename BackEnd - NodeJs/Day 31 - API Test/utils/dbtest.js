const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoose = require('mongoose')
const mongoServer = new MongoMemoryServer()

async function dbTestConnect() {
  await mongoServer.start()
  const mongoUri = mongoServer.getUri()
  await mongoose.connect(mongoUri)
}

async function disconnectDB() {
  await mongoose.connection.dropDatabase() //drop DB
  await mongoose.connection.close() //Close mongoose connection
  await mongoServer.stop() //Stopping mongoserver
}

module.exports = {
  dbTestConnect, disconnectDB
}