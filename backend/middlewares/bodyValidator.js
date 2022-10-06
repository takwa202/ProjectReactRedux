const e = require("express");
const { body, validationResult } = require("express-validator");


const registerRules = () => [
  body("fullname", "the name is required").notEmpty(),
  body("email", "the mail is not valid").isEmail(),
  body("password", "the password is required").isLength({ min: 6, max: 20 }),
];
const loginRules = () => [ 
  body("email", "the mail is not valid").isEmail(),
  body("password", "the password is not valid").isLength({ min: 6, max: 20 }),
];
const validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });//costumError(errors.array())
  } else next();
};
const costumError = (error) => {  
error.map((e)=>({msg:e.msg}))
 }


module.exports = { validator, loginRules, registerRules };
