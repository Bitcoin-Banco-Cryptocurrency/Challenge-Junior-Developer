const http = require('http');
const router = require('./router');
const server = http.createServer();

server.on('request', (request, response) => {
    router(request, response);
});

module.exports = server;