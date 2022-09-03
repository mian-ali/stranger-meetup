import * as store from './store.js';
import * as ui from './ui.js';

export const registerSocketEvents = (socket) => {
  socket.on('connect', () => {
    console.log('Successfully Connected to Socket.io Server');
    // console.log('Socket ID Client Side: ' + socket.id);

    store.setSocketId(socket.id);
    ui.updatePersonalCode(socket.id);
  });
};
