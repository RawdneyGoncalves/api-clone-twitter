const express = require("express");
const cors = require("cors");
const app = express();

app.options('*', cors()) 

const routes = require("./routes");
require("./database/index");
app.use(express.json());


const PORT = process.env.PORT || 3030

app.use(routes);
console.log("Rodando na porta:", PORT);
app.listen(PORT);
