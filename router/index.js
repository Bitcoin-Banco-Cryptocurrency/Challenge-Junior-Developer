module.exports = function (app) {

    const asksController = require('../controller/asks.js');
    const bidsController = require('../controller/bids.js');

    app.use(function (req, res, next) {
        next();
    });

    app.get('/api/asks', asksController.getAsks);
    app.get('/api/bids', bidsController.getBids);
}