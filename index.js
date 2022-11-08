const express = require("express");
require("dotenv");
require("./src/database/index.js");
const cors = require("cors");

const app = express();

app.options("*", cors());
const routes = require("./src/router/routes.js");
app.use(express.json());

const PORT = process.env.PORT || 3030;

app.use(routes);
app.listen(PORT, () => {
  console.log(`Servidor rodadando em: http://localhost:${PORT}`);
});
