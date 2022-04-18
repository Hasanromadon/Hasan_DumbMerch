require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const http = require('http');
const { Server } = require('socket.io');
const app = express();

// socket IO

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});
require('./src/socket')(io);

app.use(cors());
const port = 5000;

app.use(express.json());

// Add endpoint grouping and router
app.use('/api/v1/', routes);
app.use('/uploads', express.static('uploads'));
app.get('*', (req, res) => {
  res.status(404).send({
    status: 'failed',
    message: 'Page not found',
  });
});

// don't forget change app.listen to be server.listen to be

server.listen(port, () => console.log(`Listening on port ${port}!`));
