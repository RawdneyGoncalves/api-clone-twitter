const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user.js");  
exports.authentication = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body)
    const user = await User.find({ username , password }).exec();
    console.log(user);
    if (!user) {
      return res
        .status(404)
        .send({ message: "Usuario ou email não encontrado" });
    }
    const passwordMatch = bcrypt.compareSync(String(password), user.password);

    if (!passwordMatch)
      res
        .status(400)
        .send("login ou senha errada, por-favor verifique e tente novamente!");

    return res.json({
      message: `Bem-vidno de volta ${user.u}`
    });
  } catch (error) {
    console.log(error);
  }
};
