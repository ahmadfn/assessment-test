const Product = require('./product.model');
const mongoose = require('mongoose');

exports.createProduct = (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    imageurl: req.body.imageurl
  });

  newProduct.save()
    .then(saved => res.status(201).json({status: "OK", result: saved, errors: {}}))
    .catch(err => res.status(500).json({status: "Internal server error", result: {}, errors: err}));
}

exports.showAllProducts = (req, res) => {
  Product.find()
    .then(data => {
      if (data !== []) res.status(200).json({status: "OK", result: data, errors: {}});
      else res.status(200).json({status: "OK", result: [], errors: {}})
    })
    .catch(err => res.status(500).json({status: "Internal server error", result: {}, errors: {}}));
}

exports.showDetailProduct = (req, res) => {
  const isValid = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!isValid) {
    res.status(400).json({status: "Bad Request", result: {}, errors: {}});
  }

  Product.findById(req.params.id)
    .then(data => {
      if (data !== null) res.status(200).json({status: "OK", result: data, errors: {}});
      else res.status(404).json({status: "Not found", result: {}, errors: {}});
    })
    .catch(err => res.status(500).json({status: "Internal server error", result: {}, errors: err}));
}

exports.updateProduct = (req, res) => {
  const isValid = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!isValid) {
    res.status(400).json({status: "Bad Request", result: {}, errors: {}});
  }

  Product.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true, runValidators: true})
    .then(data => {
      if (data === null) res.status(404).json({status: "Not found", result: {}, errors: {}});
      else res.status(201).json({status: "OK", result: data, errors: {}});
    })
    .catch(err => res.status(500).json({status: "Internal server error", result: {}, errors: err}));
}

exports.deleteProduct = (req, res) => {
  const isValid = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!isValid) {
    res.status(400).json({status: "Bad Request", result: {}, errors: {}});
  }

  Product.findByIdAndDelete(req.params.id)
    .then(data => {
      if (data === null) res.status(404).json({status: "Not found", result: {}, errors: {}});
      else res.status(200).json({status: "OK", result: {message: `${data._id} deleted`}, errors: {}});
    })
    .catch(err => res.status(500).json({status: "Internal server error", result: {}, errors: err}))
}