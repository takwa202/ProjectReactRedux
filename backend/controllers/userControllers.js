const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var passport  = require('passport');

/** ************************** signeup ****************************** **/
const signUp = async (req, res) => {
  const { email, password, fullname ,sexe} = req.body;
  // protocole :http
  // host : localhost
  const url = `${req.protocol}://${req.get("host")}`;
  // console.log(req.file);
  const { file } = req;
  //console.log(req.body)

  try {
    const existUser = await userModel.findOne({ email });
    if (existUser) {
  res.status(400).send({ msg: "user already existed" });
    } else {
      const newUser = new userModel({ ...req.body });
      const haspass = await bcrypt.hash(password,10);
      newUser.password=haspass;
      //console.log(newUser);
      newUser.image = `${url}/${file.path}`;
      await newUser.save();
      res.send({ user: newUser, message: "user aded succesffuly" });
    }

    // console.log(existUser)
  } catch (error) {

    res.status(400).send({error:error.message});

  }
};
 /** ************************** signein ****************************** **/
const signIn = async (req,res) => { 
    const {email,password}=req.body;
    console.log(email)
    try {
        const existUser = await userModel.findOne({ email });
        if (!existUser) {
            res.status(400).send({ msg: "user do not existed" });
        } else {
            const matchpass = await bcrypt.compare(password,existUser.password);
            if (!matchpass) {
                res.status(400).send({ msg: "wrong password " }); 
            } else {
                const payload ={_id:existUser._id}
                var token = jwt.sign(payload, 'mysecrit');//7otha fe .env !!!
                res.send({user:existUser,token})
            }
            
        }
         
    } catch (error) {
        res.status(400).send({error:error.message});
    }
 }
const getAuthUser =async (req,res) => { 
    try {
        res.send({user:req.user})
    } catch (error) {
        res.status(400).send({error:error.message});  
    }
 }
 const getAllUsers =async (req,res) => { 
    try {
        const allUsers = await userModel.find()
        res.send({allUsers})
    } catch (error) {
        res.status(400).send({error:error.message});
    }
  }


module.exports = { signUp ,signIn,getAuthUser,getAllUsers};
