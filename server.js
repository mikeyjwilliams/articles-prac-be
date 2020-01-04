const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('./API/users/usersRouter');

const server = express();
server.use(helmet());
server.use(cors());

server.use(express.json());



server.use('/users', usersRouter);

server.use('/', (req, res) => {
    res.send('Api is up and running');
})

module.exports = server;


