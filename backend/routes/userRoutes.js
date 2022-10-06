const express = require("express");
const { signUp, signIn, getAuthUser, getAllUsers } = require("../controllers/userControllers");
const { registerRules, validator, loginRules } = require("../middlewares/bodyValidator");
const isAdmin = require("../middlewares/isAdmin");
const isAhthPassport = require("../middlewares/isAhthPassport");
const router = express.Router();
const upload = require("../utils/multer");
/**  
 * @post /user/signeup
 * add new user
 * @acess public  
 */ 
router.post("/signup",upload("products").single("file"),registerRules(),validator,signUp); //,
/**  
 * @post /user/signein
 * 
 * @acess public  
 */ 
router.post("/signin",upload("products").single("file"),loginRules(),validator,signIn) 
/**  
 * @post /user/current
 * is connected ?
 * @acess private 
 */ 
router.get("/current",isAhthPassport(),getAuthUser)
/**  
 * @post /allusers
 * get all users
 * @acess private 
 */ 
 router.get("/allusers",isAhthPassport(),isAdmin,getAllUsers)


module.exports=router 