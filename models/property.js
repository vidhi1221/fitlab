const mongoose = require('mongoose')

const propertySchema = mongoose.Schema({
  name: String,
  city: String,
  state: String,
  image: String,
  owner_id: String,
  property_status: {
    type: String,
    enum: ['active','inactive']
  },
  property_type: {
    type: String,
    enum: ['rent','own']
  },
  property_ref_no: Number,
  turf_type: {
    type: String,
    enum: ['indoor','outdoor','both']
  },
  turf_grass_type: {
    type: String,
    enum: ['artifical','natural']
  }
},
  { timestamps: true });

var propertyModle = mongoose.model("property",propertySchema);

module.exports = propertyModle