var express = require('express');
const { check } = require('express-validator');
var router = express.Router();
var property = require('../controllers/property')

router.post('/addProperty',[
  check('name','property Name is required').notEmpty(),
  check('city','city number is required').notEmpty(),
  check('state','state is required').notEmpty(),
  check('property_type','property_type is required').notEmpty(),
  check('property_ref_no','property_ref_no is required').notEmpty(),
  check('turf_type','turf_type is required').notEmpty(),
  check('turf_grass_type','turf_grass_type is required').notEmpty(),
  check('owner_id','owner_id is required').notEmpty(),
],(req,res) => {
  property.createProperty(req,res);
})

router.get('/propertyList',(req,res) => {
  property.propertyList(req,res);
})

module.exports = router;