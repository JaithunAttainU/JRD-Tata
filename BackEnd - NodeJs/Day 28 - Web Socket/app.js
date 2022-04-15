const express = require('express')
const app = express()
const { WebSocketServer } = require('ws')

app.use(express.static('public'))

//To create a WebSocketServer
const webSocketServer = new WebSocketServer({ port: 3001 })


webSocketServer.on('connection', (connectObj) => {
  console.log("Web Socket Server Connected")

  //to listen to messages sent by client on connection object
  connectObj.on('message', (msg) => {
    console.log("Message Received from Client", msg.toString())
  })

  //Will be triggered when the connection is dropped
  connectObj.on('close', () => {
    console.log("Connected stopped")
  })

  //To send msga to client every 3 secs
  setInterval(() => {
    connectObj.send("Message from Server")
  }, 3000)
})

//Will be triggered when socket server goes down/closed
webSocketServer.on('close', () => {
  console.log("Server Stopped")
})

app.listen("3000", () => {
  console.log("Server Started")
})