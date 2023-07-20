const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: mongoose.ObjectId,
    auto: true, // This makes the field auto-generated
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: Number,
    required: true,
  },
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
