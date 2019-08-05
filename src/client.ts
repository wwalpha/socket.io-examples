import io from 'socket.io-client';

const socket = io('http://52.195.6.225:3000');

socket.on('connect', () => {
  console.log('server connected...');
  console.log('send message to server: ' + 'aaaa');

  socket.emit('chat', 'aaaaa');
});

socket.on('event', (msg: any) => {
  console.log('receive message from server: ' + msg);
  console.log('disconnect from server');

  socket.close();
});

socket.on('disconnect', () => {
  console.log('server disconnect...');
});
