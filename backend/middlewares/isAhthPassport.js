const passport = require('passport');
const userModel = require('../models/userModel')
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'mysecrit';//heth fe .env
passport.initialize()
passport.use(
    new JwtStrategy(
    opts,
    async(decoded,done)=>{
        try {
            const user= await userModel.findById(decoded._id).select("-password")
            if (!user) {
                done(null,false)
                
            } else {
                done(null,user)
            }
        } catch (error) {
           console.log(error) 
           done(error,false)
        }
    }
    )
)
module.exports = isAuthpassport = () =>
  passport.authenticate("jwt", { session: false });