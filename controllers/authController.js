const express = require("express");
const bcrypt = require("bcrypt");

const User = require("../models/user");

const router = express.Router();
module.exports = {
  //registrar usuario
  async create(req, res) {

    const { email, password } = req.body;

    try {

      const user = await User.create({
        email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(8)),
      });

      return res.json(user);

    } catch (error) {

      return res.status(400).send(`Usuario já cadastrado: ${email}`);
    }
  },
  //faz a autenticação do usuario e compara
  async authentication(req, res) {
    const { email, password, name } = req.body;
    try {
      const user = await User.findOne({ email, name });
      if (!user) res.status(400);
      const passwordMatch = bcrypt.compareSync(String(password), user.password);
      if (!passwordMatch)
        res
          .status(400)
          .send(
            "login ou senha errada, por-favor verifique e tente novamente."
          );

      return res.json({ message: "logado, bem-vindo senhor: " + user.email || user.name });
    } catch (error) {

    }
  },

  async busca(req, res) {
    User.findById(req.params.id, function (err, user) {
      if (err) res.send(err);
      // retorna o usuário desejado.
      return res.json(user);
    });
  },

  async showall(req, res) {
    const users = await User.find();
    return res.json(users);
  },
};
