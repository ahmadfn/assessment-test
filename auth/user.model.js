const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    min: [3, "Name must possess more than 3 characters"],
    max: [35, "Name's characters must not exceed 35 characters"],
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    trim: true,
    min: [3, "Email must possess more than 3 characters"],
    max: [35, "Email's characters must not exceed 35 characters"],
    required: [true, "Email is required"]
  },
  password_digest: {
    type: String,
    required: [true, "Password is required"]
  }
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

const User = mongoose.model('User', userSchema);

module.exports = User;