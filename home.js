const http = require('http');
const fnc = require('./function');
const fs = require('fs');
const url = require('url');

var server = http.createServer(function (req, res) {
    // Url Ex: http://localhost:3030/OrderBook.json?amounts=13&sort=asc
    var q = url.parse(req.url, true);
    var qdata = q.query;
    res.writeHead(200, { 'Content-Type': 'application-json' });
    res.write(fnc.organizar(qdata.amounts, qdata.sort));
    //funcao organizar recebe o numero que amount que deseja ser visto e o tipo de ordenação.
    return res.end();
})
server.listen(3030);

