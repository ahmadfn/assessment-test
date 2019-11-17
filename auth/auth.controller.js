const User = require('./user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.userCreate = (req, res) => {
  User.findOne({email: req.body.email}, (err, result) => {
    if (err) res.status(500).json({status: "Internal Server Error", result: {}, errors: err});
    else if (result) res.status(200).json({status: "OK", result: result, errors: {}});
    else hashPassword();
  });

  function hashPassword() {
    bcrypt.hash(req.body.password, 10, createUser);
  }

  function createUser(err, hashed) {
    if (err) res.status(500).json({status: "Internal Server Error", result: {}, errors: err});
    else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password_digest: hashed
      });

      newUser.save()
        .then(saved => res.status(201).json({status: "OK", result: saved, errors: {}}))
        .catch(err => res.status(500).json({status: "Internal Server Error", result: {}, errors: err}));
    }
  }
}

exports.login = (req, res) => {
  User.findOne({email: req.body.email}, (err, userData) => {
    if (err) res.status(500).json({status: "Internal Server Error", result: {}, errors: err});
    else if (userData !== null) comparePassword(userData);
    else res.status(401).json({status: "Unauthorized", result: {}, errors: {}});
  });

  function comparePassword(userData) {
    bcrypt.compare(req.body.password, userData.password_digest, (err, isRegistered) => {
      if (err) res.status(500).json({status: "Internal Server Error", result: {}, errors: err});
      else if (isRegistered) createToken(userData);
      else res.status(401).json({status: "Unauthorized", result: {}, errors: {}});
    });
  }

  function createToken(userData) {
    jwt.sign({id: userData._id}, process.env.SECRET_KEY, (err, token) => {
      if (err) res.status(500).json({status: "Internal Server Error", result: {}, errors: err});
      else res.status(200).json({status: "OK", result: {access_token: token}, errors: {}});
    })
  }
}