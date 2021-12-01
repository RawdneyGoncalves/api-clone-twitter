const express = require('express');  
const bodyParser = require('body-parser');
const app = express(); 
const routes = require('./routes');
require('./database/index')
app.use(express.json())
app.use(routes); 
try{
   console.log("rodando na porta", 3030);
    app.listen(3030);

}catch(error){

console.log(error)

}


