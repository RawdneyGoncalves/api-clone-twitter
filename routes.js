const express = require('express'); 
const routes = express.Router();

const authController = require('./controllers/authController');
const UserController = require ('./controllers/UserController')

routes.post('/register', UserController.createUser);

routes.get('/users', UserController.updateUser);

routes.get('/delete', UserController.deleteUser);


routes.post('/login', authController.authentication);

module.exports = routes; 
