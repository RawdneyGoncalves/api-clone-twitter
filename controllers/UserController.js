const express = require("express");
const bcrypt = require("bcrypt");

const User = require("../models/user");


var parse_email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;


const router = express.Router();

exports.createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(403).send({
                message: "Alguns atributos nao foram passados, verifique e tente novamente.",
            });
        }

        if (!parse_email.test(email)) {
            return res.status(403).send({
                message: "email invalido",
            });
        }
        const isExistEmail = await User.findOne({ email });

        if (isExistEmail) {
            return res
                .status(403)
                .send({ message: "Esse email ja esta sendo usado" });
        }

        if (password.length < 6) {
            return res.status(403).send({
                message: "Senha muito pequena, tente uma maior",
            });
        }

        if (password.length > 22) {
            return res.status(403).send({
                message: "Senha muito grande, tente uma menor",
            });
        }
        const user = await User.create({
            email,
            password: bcrypt.hashSync(password, bcrypt.genSaltSync(8)),
        });
        if (User.create) {
            return res
                .status(200)
                .send({ message: "Usuario cadastrado com sucesso!" });
        }
    } catch (error) {

        return res.status(400).send(`Usuario já cadastrado: ${email}`);
    }
}


exports.updateUser = async (req, res) => {
    try {
        const { username, email } = req.body;

        const user = await User.findById(req.params.id);

        if (user) {
            user.username = username;
            user.email = email;
        }

        const updatedUser = await user.save();

        res.json(updatedUser);
    } catch (error) {
        res.json({ error: true, message: error.message });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        await user.delete();

        res.json({ error: false, message: 'deletado' });
    } catch (error) {
        res.json({ error: true, message: error.message });
    }
}

exports.findUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.json({ error: true, message: error.message });
    }
}
