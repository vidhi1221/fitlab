var express = require('express');
const { check } = require('express-validator');
var router = express.Router();
var user = require('../controllers/user');

router.post('/createUser',[
  check('name','Name is required').notEmpty(),
  check('phone_no','Phone number is required').notEmpty(),
  check('username','Username is required').notEmpty(),
  check('email','Email is required').notEmpty(),
  check('password','Password is required').notEmpty(),
  check('user_type','User type is required').notEmpty(),
],(req,res) => {
  user.createUser(req,res);
})

router.get('/userList',(req,res) => {
  user.userList(req,res);
})

module.exports = router;