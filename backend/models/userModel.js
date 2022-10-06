const mongoose = require("mongoose");
const { Schema } = mongoose;


const userSchema = new Schema({
  fullname: String, // String is shorthand for {type: String}
  email: { type: String, lowerecase: true, trim: true, required: true  },
  sexe: String,
  password: String,
  isav: { type: Boolean, default: true },
  creatdate: { type: Date, default: Date.now },
  image: {type: String, default: false},
  isbaned: { type: Boolean, default: false },
  role: {
    type: String,
    enum: ["client", "admin"],
    default: "client",
  },
});
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
