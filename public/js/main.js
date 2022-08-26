const socket = io('/');

socket.on('connect', () => {
  console.log('Successfully Connected to Socket.io Server');
  console.log('Socket ID Client Side: ' + socket.id);
});
