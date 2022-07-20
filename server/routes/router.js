const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller  = require('../controller/controller');

// Root Route @method GET 
route.get('/',services.homeRoutes);

// Root Route @method GET / add user
route.get('/add-user',services.add_user);

// Root Route @method GET / update user
route.get('/update-user',services.update_user);

route.post('/api/users', controller.create)
route.post('/api/users', controller.find)
route.post('/api/users/:id', controller.update)
route.post('/api/users/:id', controller.delete)

//export
module.exports = route