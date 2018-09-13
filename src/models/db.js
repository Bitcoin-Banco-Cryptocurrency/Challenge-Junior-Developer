const orderBook = [];


async function initDB() {
    this.orderBook = require("../resources/orderBook.json");
    console.log("Initiated DataBase connection");
}

module.exports = {
    orderBook,
    initDB
}