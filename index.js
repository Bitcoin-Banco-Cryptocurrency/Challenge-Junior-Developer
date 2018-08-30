var qs = require('querystring');
var fs = require('fs');
var http = require('http');
var OrderBook = require('./OrderBook');

var postData = function (req) {
    return new Promise(function (accept, reject) {
        var body = '';
        req.on('data', function (chunk) {
            body += chunk;
        });
        req.on('end', function () {
            var qsData = qs.parse(body);
            var postData = {};
            if (qsData['amounts'] !== undefined) {
                try {
                    postData.amounts = JSON.parse(qsData['amounts']);
                } catch (e) {
                    return reject('Invalid amounts');
                }
                if (postData.amounts.length < 1) {
                    return reject('No amounts sent.');
                }
            } else {
                return reject('No amounts sent.');
            }
            if (qsData['sortDirection'] !== undefined) {
                if (['asc','desc'].indexOf(qsData['sortDirection'].toLowerCase()) < 0) {
                    return reject('Invalid sortDirection');
                }
                postData.sortDirection = qsData['sortDirection'].toLowerCase();
            }
            accept(postData);
        });
    });
};

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        postData(req).then(function (postData) {
            OrderBook().then(function (OB) {
                var result = OB.search(postData.amounts);
                if (postData.sortDirection !== undefined) OB.sort(result, postData.sortDirection);
                res.writeHead('200', {'Content-Type': 'application/json'});
                res.end(JSON.stringify(result));
            }).catch(function (fail) {
                console.log(fail);
            });
        }).catch(function (error) {
            res.writeHead('500');
            res.end(error);
        });
    } else {
        res.writeHead(405);
        return res.end();
    }
});

server.listen('2020');
console.log('Aguardando requisições na porta 2020.');
