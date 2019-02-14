const http = require('http');
const routes = require('./src/routes');
const port = process.env.PORT || 3000;
const host = process.env.HOST || '127.0.0.1';
const request = require('./src/utils/request');

const server = http.createServer(function (req, resp) {
    const url = request.getOnlyUrl(req);
    request.setQuery(req);
    routes[url] 
        ? routes[url].apply(null, arguments) 
        : notFound(req, resp);
});

function notFound(req, resp) {
    resp.writeHead(404);
    resp.end();
}

server.listen(port, host, () => {
    console.log(`Servidor rodando em http://${host}:${port}`)
    console.log('Para derrubar o servidor: ctrl + c');
});
