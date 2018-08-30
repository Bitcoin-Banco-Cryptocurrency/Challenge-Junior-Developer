'use stric'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const route = express.Router();

//conn database
mongoose.connect('mongodb://uemurarafa:uemurarafa1@ds263460.mlab.com:63460/node_storage');

//carrega as models
const Product = require('./models/product');

//carregar rotas
const indexRoute = require('./routes/index');
const productRoute = require('./routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;