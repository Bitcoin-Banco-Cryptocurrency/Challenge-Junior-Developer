const server = require('./server');
const db = require('./src/models/db');

db.initDB();

server.listen(3000);
console.log("Initiated Server on 127.0.0.1:3000");