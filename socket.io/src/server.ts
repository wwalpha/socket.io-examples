import express from 'express';
import http from 'http';
import socketIO from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('client connected...');

  socket.on('chat', (msg) => {
    console.log('receive message from client:' + msg);

    console.log('send message to client:' + 'bbbb');
    socket.emit('event', 'bbbbbb');
  });

  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
