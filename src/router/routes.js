const express = require('express'); 
const routes = express.Router();

const authController = require('../controllers/authController');
const userController = require ('../controllers/userController')

routes.post('/register', userController.createUser);

routes.put('/users/:id', userController.updateUser);

routes.delete('/delete/:id', userController.deleteUser);

routes.post('/users/:id',userController.findUserById);

routes.post('/login', authController.authentication);

module.exports = routes; 
