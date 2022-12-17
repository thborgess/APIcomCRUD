const { Router } = require('express');

const PlayerController = require('./Controllers/PlayerController');

const routes = Router();

routes.post('/players', PlayerController.cadastrar);
routes.get('/playerslist', PlayerController.list);
routes.get('/players/:id', PlayerController.show);
routes.delete('/playersdelete/:id', PlayerController.delete);


 module.exports = routes;