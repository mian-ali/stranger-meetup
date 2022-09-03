import * as store from './store.js';
import * as wss from './wss.js';

// initialize of socket.io connectedPeers
const socket = io('/');

wss.registerSocketEvents(socket);

// registerSocketEvents event handler for personal code copy button
const personalCodeCopyButton = document.getElementById(
  'personal_code_copy_button'
);
personalCodeCopyButton.addEventListener('click', () => {
  const personalCode = store.getState().socketId;
  navigator.clipboard && navigator.clipboard.writeText(personalCode);
});
