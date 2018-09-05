
const fs = require('fs');

const price = 0;
const amount = 1;

var Book = {
    itens: {
        asks: [],
        bids: []
    }
};

exports.organizar = function (amountParam, sortParam) {
    //fnc organizar recebe o nº de parametros que desejam ser vistos e o tipo de ordenação 
    var object = {};
    object = JSON.parse(fs.readFile('OrderBook.json'));
    //montagem do objeto lendo e converterndo o arq. OrderBook.json
    var i;

    //iteração para adicionar labels price e amount ao array multidimencional
    for (i = 0; i < object.asks.lenght; i++) {
        Book.itens.asks.push({
            price: object.asks[i][price],
            //seting label price;
            amount: object.asks[i][amount]
            //seting label amount;
        })
    }
    for (i = 0; i < object.bids.lenght; i++) {
        Book.itens.bids.push([
            object.bids[i][price],
            //seting label price;
            object.bids[i][amount]
            //seting label amount;
        ])
    }
    var resultSearch = {};
    resultSearch =  search(amountParam, this.Book);
    //objeto resultSearch recebe o numero de amount que deseja ser visto com base no objeto que foi como paramentro
    var resutlSort = {};
    resutlSort = sorting(sortParam, this.resultSearch);
    //objeto resutlSort recebe o tipo de ordenação e obj que contem o numero desejado de amount
    return resutlSort;
    //retorna o numero desejado de amount com o tipo de ordenação desejada.
};

exports.sorting = function (sortParam, object) {
    var sgObj = object;
    var param = sortParam.toLocaleLowerCase();
    if (param === 'asc') {
        var sort = function (a, b) {
            if (a.price > b.price) {
                return 1;
            }
        };
    } else {
        var sort = function (a, b) {
            if (a.price < b.price) {
                return -1;
            }
        };
    }
    sgObj.bids.sorting(sort);
    sgObj.asks.sorting(sort);
    return sgObj

}

exports.search = function (amounts, object) {
    var amObj = object;
    var aux = {
        asks: [],
        bids: []
    };
    for (i = 0; i <amounts; i++) {
        aux.asks.push(amObj.asks[i]);
        aux.bids.push(amObj.bids[i]);
    }
        return aux;
}

//console.log(organizar());