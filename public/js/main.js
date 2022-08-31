import * as store from './store.js';
const socket = io('/');

socket.on('connect', () => {
  console.log('Successfully Connected to Socket.io Server');
  // console.log('Socket ID Client Side: ' + socket.id);

  store.setSocketId(socket.id);
});
