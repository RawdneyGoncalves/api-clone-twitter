const express = require('express'); 
const routes = express.Router();

const authController = require('./controllers/authController');

routes.post('/register', authController.create)

routes.get('/users', authController.showall)

routes.post('/login', authController.authentication)

module.exports = routes; 