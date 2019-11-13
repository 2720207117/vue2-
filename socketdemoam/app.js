var app = require('express')()
var http = require('http').createServer(app)

// app.express(static('/'))
// 导入包
var io = require('socket.io')(http)

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

// 当客户端连接服务端时->connection
io.on('connection', function(socket) {
    console.log('一个用户连接了----')
        // btn.on('click')
        // 监听客户端发射emit的事件chat message
    socket.on('chat message', function(msg) {
        console.log('客户端发来额消息是: ' + msg)
            // 服务端向客户端发送消息

        // emit('发送消息的事件名', 发送的内容)
        // socket.emit('abc', '收到了')
        io.emit('abc', msg)
    })
})

http.listen(3001, '0.0.0.0', function() {
    console.log('listening on *:3001')
})