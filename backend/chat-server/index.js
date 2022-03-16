const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.render('index.ejs');
});

io.sockets.on('connection', function(socket) {
    socket.on('username', function(username) {
        socket.username = username;
        io.emit('is_online', '<i>Look who\'s here: ' + socket.username + ' has joined your circle.</i>');
    });

    socket.on('disconnect', function(username) {
        io.emit('is_online', '<i>Goodbye for now! ' + socket.username + ' has chosen to leave your circle.</i>');
    })

    socket.on('chat_message', function(message) {
        io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
    });

});

const server = http.listen(9697, function() {
    console.log('listening on *:9697');
});