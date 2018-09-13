const url = require('url');
const db = require('../models/db');
const querystring = require('querystring');
const searchOffersByAmount = require('../models/offersModel');

function searchAsksbyAmount(request, response) {
    const parsedUrl = url.parse(request.url);
    const parameters = querystring.parse(parsedUrl.query);
    var amounts = parameters.amount;
    var order = parameters.order
    var asks = db.orderBook.asks;

    var matchedResults = searchOffersByAmount(asks, amounts, order);

    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.write(JSON.stringify(matchedResults));
    response.end();
}

module.exports = searchAsksbyAmount;