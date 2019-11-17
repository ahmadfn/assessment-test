const auth = require('./auth.controller');

module.exports = app => {
  app.post('/auth/signup', auth.userCreate);
  app.post('/auth/login', auth.login);
}
