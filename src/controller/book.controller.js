const bookRepository = require('../repository/book.repository');
const request = require('../utils/request');

/**
 * Controller responsável por buscar os livros do repository
 */
exports.findAll = function(req, resp) {
    bookRepository
        .findAll(req.query)
        .then(books => request.response(req, resp, books))
        .catch(err => {
            resp.writeHead(500);
            request.response(req, resp, {
                mensagem: 'Falha ao realizar a consulta no servidor'
        })
    });
}
