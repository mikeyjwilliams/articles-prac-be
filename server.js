const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('./API/users/usersRouter');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/', (req, res) => {
    res.send('Api is up and running');
})

server.use('/users', usersRouter);

module.exports = server;


