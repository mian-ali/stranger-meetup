const exppres = require('express');
const http = require('http');

const app = exppres();
//Server Port
const PORT = process.env.PORT || 3000;

// http server
const server = http.createServer(app);
app.use(exppres.static('public'));

// Server Route Create Append Html File
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// listen Server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
