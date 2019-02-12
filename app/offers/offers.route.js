const offersController = require("./offers.controller");

exports.attach = (server) => {
    server.get('/offers', [offersController.getOffers]);
};