const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
exports.authentication = async (req, res) => {

  try {
    const { email, username, password } = req.body;
    const user = await User.find({ email, username });
    if (!user) {
      return res.status(404).send({ message: 'Usuario ou email não encontrado' });
    }
    const passwordMatch = bcrypt.compareSync(String(password), User.password);
    if (!passwordMatch)
      res
        .status(400)
        .send(
          "login ou senha errada, por-favor verifique e tente novamente!"
        );

    return res.json({ message: "logado, bem-vindo senhor: " + user.email || user.name });
  } catch (error) {

  }
}
