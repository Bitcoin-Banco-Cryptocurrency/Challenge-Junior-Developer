const express = require('express');
const app = express();
require('./router/index.js')(app);

app.get('/', (req, res) => {
    let html = '<h1>BTC Bank | Challenge for Developer</h1>' +
        '<br>' +
        '<div>Example urls for test the API:' +
        '<ul>' +
        '<li>http://localhost:8080/api/asks?amount=0.5 | <a href="http://localhost:8080/api/asks?amount=0.5">Link</a></li>' +
        '<li>http://localhost:8080/api/asks?amount=0.5&price=desc | <a href="http://localhost:8080/api/asks?amount=0.5&price=desc">Link</a></li>' +
        '<li>http://localhost:8080/api/asks?amount=0.5&amount=0.63322053&amount=1&price=desc | <a href="http://localhost:8080/api/asks?amount=0.5&amount=0.63322053&amount=1&price=desc">Link</a></li>' +
        '<br>'+
        '<li>http://localhost:8080/api/bids?amount=1 | <a href="http://localhost:8080/api/bids?amount=1">Link</a></li>' +
        '<li>http://localhost:8080/api/bids?amount=1&price=asc | <a href="http://localhost:8080/api/bids?amount=1&price=asc">Link</a></li>' +
        '<li>http://localhost:8080/api/bids?amount=0.5&amount=1&price=desc | <a href="http://localhost:8080/api/bids?amount=0.5&amount=1&price=desc">Link</a></li>' +
        
        '</ul>' +
        '</div>'
    res.send(html);
});

var server = app.listen(8080, function () {
    let port = server.address().port
    console.log(`Listening on port ${port}`);
})