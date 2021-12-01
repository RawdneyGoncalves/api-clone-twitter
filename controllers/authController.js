const express = require("express");

const User = require("../models/user");

const router = express.Router();
module.exports = { 
//registrar usuario.  
  async create (req, res){
  //console.log(req.body)
  try {
    const { email } = req.body;
    //const usuario = await User.find({ where:{email:email} })
    //console.log(email)
    //if (!usuario){
      //console.log(usuario)
      //return res.status(400).send({ error: usuario })
      
    //};
    console.log(email)
    const user = await User.create(req.body);

    return res.json(user);
  } catch (err) {
    return res.status(400).send(err);
  }
},

 async authentication(req, res){

    const {email, password} = req.body; 
    const user = await User.findOne({email, password})
    if (!user) return res.status(400).send({error: 'usuario não encontrado'});
    return res.json({message: "logado"});
   
       
}, 

async showall (req, res){

  const users = await User.find()
  return res.json(users)
}
}