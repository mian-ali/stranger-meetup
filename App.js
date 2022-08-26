const exppres = require('express');
const http = require('http');

const app = exppres();
//Server Port
const PORT = process.env.PORT || 3000;

// http server
app.use(exppres.static('public'));
const server = http.createServer(app);
const io = require('socket.io')(server);

// Server Route Create Append Html File
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

//Short list of users
let connectedPeers = [];

// Socket Connection
io.on('connection', (socket) => {
  connectedPeers.push(socket.id);
  console.log(connectedPeers, 'List');
  console.log('Socket ID: ' + socket.id);

  socket.on('disconnect', () => {
    console.log('User Disconnected');

    const newConnectedPeers = connectedPeers.filter((perrSocketId) => {
      return perrSocketId !== socket.id;
    });

    connectedPeers = newConnectedPeers;
    console.log(connectedPeers, 'List');
  });
});

// listen Server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
