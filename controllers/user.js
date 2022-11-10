const jwt = require("jsonwebtoken");
const { validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
const async = require('async');
const moment = require("moment");
const mongoose = require('mongoose');
const { Parser } = require('json2csv');

const userModle = require('../models/user')

const createUser = async (req, res) => {
  try {

    const { name, phone_no, email, username, password, user_type } = req.body
    console.log(req.body, "=====================================")
    const result = validationResult(req);
    if (result.errors.length > 0) {
      return res.status(200).json({
        error: true,
        title: result.errors[0].msg,
        errors: result
      })
    }

    const emailExist = await userModle.findOne({ email: email });
    console.log(emailExist)
    if (emailExist) {
      return res.status(200).json({
        title: 'Email is already exists',
        error: true
      })
    }
    const hashedPassword = await bcrypt.hash(password, 16);
    let user = { name, phone_no, email, username, password: hashedPassword, user_type }
    const data = await userModle.create(user)
    if (user_type == 'owner') {
      res.status(200).json({
        title: 'Owner added successfully',
        error: false,
        data
      })
    }
    if (user_type == 'user') {
      res.status(200).json({
        title: 'User added successfully',
        error: false,
        data
      })
    }
  }
  catch (error) {
    return res.status(200).json({
      title: error.message || 'Something went wrong',
      error: true
    })
  }
}

const userList = async (req, res) => {
  try {
    const { user_type } = req.body
    await userModle.find({user_type:user_type}).then(async (data) => {
      if(user_type == 'owner'){
        res.status(200).json({
          title: 'Owner listed succrssfully',
          error: false,
          data
        })
      }
      if(user_type == 'user'){
        res.status(200).json({
          title: 'User listed succrssfully',
          error: false,
          data
        })
      }
    })
  }
  catch (error) {
    return res.status(200).json({
      title: error.message || 'Something went wrong',
      error: true
    })
  }
}



module.exports = {
  createUser,
  userList
}