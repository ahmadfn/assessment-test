const User = require('../auth/user.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authentication = (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, process.env.SECRET_KEY, {algorithms: ['HS256'], expiresIn: "2 days"} ,(err, decoded) => {
    if (err) res.status(500).json({status: "Internal Server Error", result: {}, errors: err});
    else findUser(decoded);
  });

  function findUser(decoded) {
    User.findById(decoded.id)
      .then(userData => {
        if (userData) {
          req.userId = userData._id;
          next();
        } else {
          res.status(401).json({status: "Unauthorized", result: {}, errors: {}});
        }
      })
      .catch(err => res.status(500).json({status: "Internal Server Error", result: {}, errors: err}));
  }
}

module.exports = authentication;