const url = require('url');
const searchAsksbyAmount = require('./src/controllers/asksController');
const notFound = require('./src/controllers/notFoundController');
const searchBidsbyAmount = require('./src/controllers/bidsController');

const routes = {
    '/asks/search-by-amount': {
        'GET': searchAsksbyAmount
    },
    '/bids/search-by-amount': {
        'GET': searchBidsbyAmount
    }
};

function router(request, response) {
    const parsedUrl = url.parse(request.url);

    const routeHandler = routes[parsedUrl.pathname] &&
        routes[parsedUrl.pathname][request.method];

    if (!routeHandler) {
        return notFound(request, response);
    }

    return routeHandler(request, response);
}

module.exports = router;