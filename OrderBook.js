var fs = require('fs');

const price = 0;
const amount = 1;

var OrderBook = {
    records: {
        asks: [],
        bids: []
    }
};

/**
 * Recebe um ou mais valores a serem localizados no campo amount dos registros.
 * @returns array|null
 */
OrderBook.search = function (amounts) {
    if (amounts.length > 0) {
        result = {
            asks: [],
            bids: []
        };
        var rec = -1;
        while (++rec < this.records.asks.length) {
            if (amounts.indexOf(this.records.asks[rec].amount) >= 0) {
                result.asks.push(this.records.asks[rec]);
            }
        }
        rec = -1;
        while (++rec < this.records.bids.length) {
            if (amounts.indexOf(this.records.bids[rec].amount) >= 0) {
                result.bids.push(this.records.bids[rec]);
            }
        }
    }
    return result;
};

OrderBook.sort = function (result, direction) {
    var fnSort = function (first, second) {
        if (first.price < second.price) {
            return direction === 'asc' ? -1 : 1;
        }
        if (first.price > second.price) {
            return direction === 'asc' ? 1 : -1;
        }
        return 0;
    };
    result.asks.sort(fnSort);
    result.bids.sort(fnSort);
    return result;
};

module.exports = function () {
    return new Promise(function (accept, reject) {
        OrderBook.records = {
            asks: [],
            bids: []
        };
        fs.stat('OrderBook.json', function (err, stat) {
            if (err) {
                return reject('File OrderBook.json not found.');
            }
            if (!stat.isFile()) {
                return reject('OrderBook.json is not a file.');
            }
            try {
                var jsonData = JSON.parse(fs.readFileSync('OrderBook.json'));
            } catch (error) {
                return reject('OrderBook.json has an invalid json structure.');
            }
            var jsD = -1;
            while (++jsD < jsonData.asks.length) {
                OrderBook.records.asks.push({
                    price: jsonData.asks[jsD][price],
                    amount: jsonData.asks[jsD][amount]
                })
            }
            jsD = -1;
            while (++jsD < jsonData.bids.length) {
                OrderBook.records.bids.push({
                    price: jsonData.bids[jsD][price],
                    amount: jsonData.bids[jsD][amount]
                })
            }
            return accept(OrderBook);
        });
    });
};