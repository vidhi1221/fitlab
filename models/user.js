const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: String,
  username: {
    unique: true,
    type: String
  },
  phone_no:Number,
  email: {
    type: String,
    required: 'Email address is required',
    unique: true,
    lowercase: true
  },
  password: String,
  user_type:{
    type:String,
    enum:['user','owner']
  },
  is_delete: {
    type: Boolean,
    default: false
  },
  otp:String,
},
  { timestamps: true });

var userModle = mongoose.model("user",userSchema);

module.exports = userModle