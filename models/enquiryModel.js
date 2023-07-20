const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  id: {
    type: mongoose.ObjectId,
    required: true,
    unique: true,
    auto:true
  },
  source: {
    type: String,
  },
  destination: {
    type: String,
  },
  package: {
    type: Number,
  },
  person: {
    type: Number,
    required: true,
  },
  status:{
    type:Number,
  },
  name:{
    type:String,
    required: true,
  },
  email:{
    type:String,
    required: true,
  },
  phone:{
    type:Number,
    required: true,
  },
  date:{
    type:Date
  }
});

// Create and export the Enquiry model
const Enquiry = mongoose.model('Enquiry', enquirySchema);
module.exports = Enquiry;
