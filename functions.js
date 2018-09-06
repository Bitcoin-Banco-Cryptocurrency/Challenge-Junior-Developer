const fs = require('fs');

var price = 0;
var amount = 1;

var OrderBook = new Object();

OrderBook = {
    itens: {
        asks: [],
        bids: []
    }
}

function lerArquivo(chargeParams) {
    var object = JSON.parse(fs.readFileSync('OrderBook.json'));
    var i;
    for (i = 0; i < chargeParams; i++) {
        OrderBook.itens.asks.push({
            price: object.asks[i][price],
            amount: object.asks[i][amount]
        });
    }
    for (i = 0; i < chargeParams; i++) {
        OrderBook.itens.bids.push({
            price: object.bids[i][price],
            amount: object.bids[i][amount]
        });
    }
    return OrderBook;
}

function searchByAmounts(amountsParams, sortParams) {
    var obj = lerArquivo(amountsParams);
    if (sortParams === "asc") {
        obj.itens.asks.sort(sortAsc);
        obj.itens.bids.sort(sortAsc);
    } else {
        obj.itens.asks.sort(sortDesc);
        obj.itens.bids.sort(sortDesc);
    }
    return obj;
}

var sortAsc = function (a, b) {
    return a.price - b.price;
}

var sortDesc = function (a, b) {
    return b.price - a.price;
}

//exports
exports.searchByAmounts = searchByAmounts;
exports.sortAsc = sortAsc;
exports.sortDesc = sortDesc;
exports.lerArquivo = lerArquivo;