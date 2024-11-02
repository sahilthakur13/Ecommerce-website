<<<<<<< HEAD
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName:{
        type:String,
        require: true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type: String,
        required:true,
        default: "NORMAL",
    },   
},
{timestramps: true})

const User = mongoose.model('user',userSchema)
=======
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

>>>>>>> 1bf548fbb1d3199e6ffe89379facae0f3c3c909b
module.exports = User;