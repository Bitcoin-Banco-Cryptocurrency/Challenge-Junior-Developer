const queryString = require('./query.string');

function response(req, resp, data) {
    resp.writeHead(resp.statusCode, {"Content-Type": "application/json"});
    resp.end(JSON.stringify(data));
}

function setQuery(req) {
    req.query = queryString(req.url);
}

function getOnlyUrl(req) {
    return req.url.split('?')[0]
}

module.exports = {
    response,
    setQuery,
    getOnlyUrl
};