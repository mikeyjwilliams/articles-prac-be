const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/', (req, res) => {
    res.send('Api is up and running');
})

module.exports = server;


