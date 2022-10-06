const express = require('express')
const app = express();
const port = 7000 || 5000;
const cors=require('cors')
const connectDB = require("./config/connectDB")
app.use("/uploads", express.static(__dirname + "/uploads"));
connectDB()
/**
 * pars the body using passport  
 */
// const passport = require("passport");
// app.use(passport.initialize());
/**
 * pars the body using middeleware express.json()  
 */
app.use(express.json()) 
/**
 * use cors in the server to
 * suitch the base of front and back
 *  http://localhost:port-of-frontend-server -->http://localhost:port-of-backtend-server
 * 
 *  or  use proxy in the front in package.json add : "proxy":"http://localhost:port-of-backtend-server"
 */
app.use(cors())
app.use("/product",require("./routes/productRoutes"))
app.use("/user",require("./routes/userRoutes"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))