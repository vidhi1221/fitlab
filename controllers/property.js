const jwt = require("jsonwebtoken");
const { validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
const async = require('async');
const moment = require("moment");
const mongoose = require('mongoose');
const { Parser } = require('json2csv');
const userModle = require("../models/user");
const propertyModle = require("../models/property");

const createProperty = async (req, res) => {
	try {
		let { name, city, state, owner_id, property_status, property_type, property_ref_no, turf_type, turf_grass_type } = req.body

		console.log(req.body)

		const result = validationResult(req);
		if (result.errors.length > 0) {
			return res.status(200).json({
				error: true,
				title: result.errors[0].msg,
				errors: result
			})
		}

		const ownerName = await userModle.findOne({ _id: owner_id })
		if (!ownerName) {
			return res.status(200).json({
				title: 'Owner not found !',
				error: true
			})
		}

		let addProperty = { name, city, state, owner_id, property_status, property_type, property_ref_no, turf_type, turf_grass_type }

		console.log(addProperty)

		const data = await propertyModle.create(addProperty)
					res.status(200).json({
						title : 'Property added successfully',
						error : false,
						data
					})
		}
		 
	catch(error){
		return res.status(200).json({
			title: error.message || "Something went wrong",
			error: true,
		});
	}
}

module.exports = {
	createProperty
}