'use strict'

const app = require('../src/app');
const debug = require('debug')('nodestr:server');
const http = require('http');

const port = normalizePort(process.env.port || 3000);
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


console.log("Api runing in port :  " + port);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}



function onError(error) {
    if (erro.syscall) {
        throw error;
    }
    switch (error.code) {
        case 'EACCES':
            console.error(bind + "requires elevated privileges");
            process.exit(1);
            break;
        case 'EADDRINUSE ':
            console.error(bind + 'is alredy in use ');
            break;
        default:
            throw error;

    }
}


function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Litening on  ' + bind);
} 
