'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

//add elements
exports.postElement = (req, res, next) => {
    var product = new Product(req.body);
    //EX: product.title = req.body.title;
    product
        .save()
        .then(x => {
            res.status(201).send({
                message: 'Product successfully registered'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Failed to register product',
                data: e
            });
        });
};


//deleta product
exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};

//retorna products
exports.get = (req, res, next) => {
    //var product = new Product(req.body);
    //EX: product.title = req.body.title;
    Product.find({
        active: true
    }, 'title price slug')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

//retorna por slug findOne
exports.getbySlug = (req, res, next) => {
    //var product = new Product(req.body);
    //EX: product.title = req.body.title;
    Product.findOne({
        slug: req.params.slug,
        //active: true
    }, 'title description price slug tags')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

//retorna por ID
exports.getById = (req, res, next) => {
    //var product = new Product(req.body);
    //EX: product.title = req.body.title;
    Product.findById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

//retorna por Tag
exports.getByTag = (req, res, next) => {
    Product.find({
        tags: req.params.tag,
        active: true
    })
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

//alter product by ID {title,description,price}
exports.put = (req, res, next) => {
    Product.findByIdAndUpdate(
        req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price
            }
        })
        .then(x => {
            res.status(200).send({
                message: 'Product updated successfully'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Failed to update product',
                data: e
            });
        });
};

//findOneAndRemove
exports.delete = (req, res, next) => {
    Product
        .findOneAndRemove(req.params.id)
        .then(x => {
            res.status(200).send({
                message: 'Product successfully removed'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Failed to remove product',
                data: e
            });
        });
};
