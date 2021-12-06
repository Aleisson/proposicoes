const express = require('express');
const routes = express.Router();
const DeputadosController = require('./controllers/DeputadosController');
const ProposicoesController =require('./controllers/ProposicoesController');



routes.get('/deputados', DeputadosController.show);
routes.get('/', ProposicoesController.show);

module.exports = routes;