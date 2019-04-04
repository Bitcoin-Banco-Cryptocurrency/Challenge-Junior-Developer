exports.getBids = (req, res) => {
    const fs = require('fs');
    let rawData = fs.readFileSync('./db/OrderBook.json');
    let orderBook = JSON.parse(rawData);
    let responseFilter = new Array();

    //amount filter
    let arryAmount;
    const amount = req.query.amount;
    if (amount) {
        for (var i = 0; i < amount.length; i++) {
            arryAmount = orderBook.bids.filter((value) => {
                if (value[1] == amount[i]) {
                    responseFilter.push(value);
                }
            });
        }
    } else {
        responseFilter = orderBook.bids;
    }

    //price filter
    const price = req.query.price;
    if (price) {
        if (price === 'asc')
            responseFilter = responseFilter.sort((a, b) => parseFloat(a[0]) - parseFloat(b[0]));
        else if (price === 'desc')
            responseFilter = responseFilter.sort((a, b) => parseFloat(b[0]) - parseFloat(a[0]));
    }

    res.send(responseFilter);
}