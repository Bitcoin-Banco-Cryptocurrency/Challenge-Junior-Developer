const fs = require('fs');
const validator = require('../utils/validator');
let BOOKS_DB = [];

/**
 * Ordena os valores dos books
 * ASC ou DESC
 * @param orderBy 
 */
function orderByValues(orderBy) {
    return (list) => {
        if(orderBy && (orderBy === 'ASC' || orderBy === 'DESC')) {
            let booksOrder = list.sort((b1, b2) => {
                return b1[0] - b2[0];
            });
            return orderBy === 'ASC' ? booksOrder  : booksOrder.reverse();
        }
        return list;
    }
}

/**
 * Função para buscar todos os books, filter books e ordenar os livros
 * 
 * @param params 
 */
function findAll(params) {
    const {search, orderBy} = params || {};
    if(validator.isEmpty(search)) {
        return Promise.resolve(getBooks()).then(orderByValues(orderBy));
    }
    return searchValue(search).then(orderByValues(orderBy));
}
/***
 * Filtra os livros conforme o valor passado
 */
function searchValue(search) {
    const books = getBooks().filter((book) => {
        const result1 = book[0].toString().includes(search);
        const result2 = book[1].toString().includes(search);
        return result1 || result2;
    });
    return Promise.resolve(books);
}

/**
 * Função para buscar os livros do arquivo OrderBook.json
 * guardo um cache em memória dos livros para não ficar lendo
 * o arquivo sempre.
 */
function getBooks() {
    const file = `${__dirname}/../../data/OrderBook.json`;
    try {
        if(BOOKS_DB && BOOKS_DB.length > 0) {
            return BOOKS_DB;
        }
        const rawData = fs.readFileSync(file);
        const  data = JSON.parse(rawData);
        BOOKS_DB = data.asks;
        return BOOKS_DB;
    } catch(ex) {
        throw `Falha ao ler os dados do arquivo ${file} | message: ${ex.message}`;
    }
}

module.exports = {
    findAll,
    searchValue
}