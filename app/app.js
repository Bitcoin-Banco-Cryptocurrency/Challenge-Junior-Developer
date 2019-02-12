const express = require('express');
const server = express();

server.use(express.json({strict: false}));
server.use(express.query());

require('./offers/offers.route').attach(server);

module.exports = server;

