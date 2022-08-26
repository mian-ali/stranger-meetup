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

// Socket Connection
io.on('connection', (socket) => {
  console.log('User Connected Successfully to Socket.io Server');
  console.log('Socket ID: ' + socket.id);
});

// listen Server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
