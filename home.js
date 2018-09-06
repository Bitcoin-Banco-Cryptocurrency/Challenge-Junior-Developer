const http = require('http');
const fnc = require('./functions');
const url = require('url');

var server = http.createServer(function (req, res) {

    var q = url.parse(req.url, true);
    var qdata = q.query;

    res.writeHead(200, { 'Content-Type': 'application/json' });    
    res.write(qdata.amounts + " - " + qdata.sort);
    res.write("<br>");
    res.write(JSON.stringify(fnc.searchByAmounts(qdata.amounts, qdata.sort )));

    return res.end();
})


server.listen(3030);

