import express from 'express';
import http from 'http';
import socketIO from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', function(socket) {
  console.log('client connected...');

  socket.on('chat', function(msg) {
    console.log('receive message from client:' + msg);

    console.log('send message to client:' + 'bbbb');
    socket.emit('event', 'bbbbbb');
  });

  socket.on('disconnect', function() {
    console.log('client disconnected');
  });
});

server.listen(3000, function() {
  console.log('listening on *:3000');
});
