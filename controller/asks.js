exports.getAsks = (req, res) => {
    const fs = require('fs');
    let rawData = fs.readFileSync('./db/OrderBook.json');
    let orderBook = JSON.parse(rawData);
    let responseFilter = new Array();
    let amountReq = new Array();

    
    //amount filter
    let arrayAmount;
    const amount = req.query.amount;
    if (amount) {
        if(!Array.isArray(req.query.amount)){
            amountReq.push(req.query.amount); //one amount param
        }else{
            amountReq = req.query.amount; //n amounts params
        }

        for (var i = 0; i < amountReq.length; i++) {
            arrayAmount = orderBook.asks.filter((value) => {
                if (value[1] == amountReq[i]) {
                    responseFilter.push(value);
                }
            });
        }
    } else {
        responseFilter = orderBook.asks;
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