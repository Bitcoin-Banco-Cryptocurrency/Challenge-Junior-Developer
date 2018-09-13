function notFound(request, response) {
    response.statusCode = 404;
    response.write('Not found.');
    response.end();
}

module.exports = notFound;