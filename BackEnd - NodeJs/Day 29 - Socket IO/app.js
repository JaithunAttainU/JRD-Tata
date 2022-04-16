const express = require('express')
const { Server } = require('socket.io')
const { createServer } = require('http')

const app = express()
app.use(express.static('public'))

const httpServerInstance = createServer(app)
const socketServer = new Server(httpServerInstance)

socketServer.on('connection', (socketInstance) => {

  console.log("Client Connected")
  console.log(socketInstance.id)
  // console.log(socketInstance)

  socketInstance.on('chat', (msg) => {
    // console.log("Event Triggered", msg.textMsg)
    // console.log("User Name", socketInstance.data.name)
    socketInstance.broadcast.emit("broadcastMsg", msg)
  })
})

httpServerInstance.listen("3000", () => {
  console.log("Server Started")
})