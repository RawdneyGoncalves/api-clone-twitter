const express = require("express");
const cors = require("cors");
const app = express();

app.options('*', cors()) 


const bodyParser = require("body-parser");


const routes = require("./routes");
require("./database/index");
app.use(express.json());




app.use(routes);
console.log("rodando na porta", 3030);
app.listen(3030);
