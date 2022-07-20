const express = require('express');
const route = express.Router()

const services = require('../services/render');

// Root Route @method GET 
route.get('/',services.homeRoutes);

// Root Route @method GET / add user
route.get('/add-user',services.add_user)

// Root Route @method GET / update user
route.get('/update-user',services.update_user)

//export
module.exports = route