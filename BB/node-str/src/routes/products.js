 'use stric'

const express = require('express');
const route = express.Router();
const controller = require('../controllers/product-controller.js');


//ATENÇÃO AO CONFLITO DE ROTAS 


//rotas de criação
route.post('/', controller.postElement); 
//rotas de put
 route.put('/:id',controller.put);
//rotas de delete
route.delete('/:id',controller.delete);
//rotas de get
route.get('/',controller.get);
//rotas de get
route.get('/:slug',controller.getbySlug);
//rotas de get
route.get('/id/:id',controller.getById);   
//rotas de get
route.get('/tags/:tag',controller.getByTag);





module.exports = route;