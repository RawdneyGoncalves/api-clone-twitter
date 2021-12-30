const mongoose = require("mongoose");

try {
  let connect = mongoose.connect(
    "mongodb+srv://teste:Password@cluster0.3ecyu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }

  );
  module.exports = connect;
} catch (err) {
  console.log("este aqui foi o erro" + err);
}



