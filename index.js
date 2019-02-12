const server = require('./app/app');

process.on('uncaughtException', function (err) {
    console.error(err);
});

server.listen(7001, function () {
    console.log('Server listening at 7001');
});