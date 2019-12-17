const express = require('express')
const http = require('http')
const route = express()
const server = http.createServer(route)
const socket = require('socket.io')(server)


// socket listener
socket.on('connection', function(client) {

    client.on('sendMsg', function(user_msg) {
        socket.emit("check-send-success", user_msg)
    })


    client.on('disconnect', () => {
        console.log('disconnected')
    })
})

// routing
route.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html')
})


// start server
server.listen(8083, () => {
    console.log('App run at 8083')
})
