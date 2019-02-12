const json = require('../../OrderBook.json').asks;

exports.getOffers = (req, res) => {
    let errors = [];
    if (req.query.quantity && (isNaN(req.query.quantity) || req.query.quantity < 1)) {
        errors.push('quantity must be a number >= 1');
    }
    if (req.query.order && (req.query.order !== 'asc' && req.query.order !== 'desc')) {
        errors.push('order must be only "asc" or "desc"');
    }
    if (errors.length) {
        return res.status(400).send({message: errors.join(', ')});
    }
    let quantity = req.query.quantity || 0;
    let order = req.query.order || '';

    let greater = json.filter((value) => {
        return value[0] >= quantity;
    });

    let sorted = greater;
    if (order !== '') {
        sorted = greater.sort((value1, value2) => {
            if (order === 'asc') {
                return value1[1] - value2[1];
            } else if (order === 'desc') {
                return value2[1] - value1[1];
            }
        });
        res.status(200).send(sorted);
    } else {
        res.status(200).send(sorted);
    }
};