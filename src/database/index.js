const mongoose = require("mongoose");
require("dotenv").config();
const username = process.env.DB_NAME;
const password = process.env.DB_PASS;
try {
  let connect = mongoose.connect(
    `mongodb+srv://${username}:${password}@cluster0.bnlrbze.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }

  );
  module.exports = connect;
} catch (err) {
  console.log("este aqui foi o erro" + err);
}



