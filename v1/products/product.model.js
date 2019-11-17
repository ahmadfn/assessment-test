const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    min: [5, "Product's name must possess more than 5 characters"],
    max: [35, "Product's name must not exceed 35 characters"],
    required: [true, "Product name is required"],
    trim: true
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: 0,
    max: 9999999,
    trim: true
  },
  imageurl: {
    type: String,
    default: null,
    trim: true
  }
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;