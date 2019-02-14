const bookController = require('./controller/book.controller');
const validator = require('./utils/validator');

const ROUTES = {
    // rotas de api
    '/api/books': bookController.findAll,
    
};

Object.keys(ROUTES).forEach(key => {
    if(validator.isNotFunction(ROUTES[key])) {
        const err = new Error(`Invalid argument ${key} is not a function in routes`);
        throw err;
    }
});

module.exports = ROUTES