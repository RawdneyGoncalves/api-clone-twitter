const express = require('express'); 
const routes = express.Router();

const authController = require('./controllers/authController');

routes.post('/register', authController.create)

routes.get('/users', authController.showall)

routes.get('/',(req, res) => res.send('hello-world'))

module.exports = routes; 