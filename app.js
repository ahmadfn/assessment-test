const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 8000;

mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);

if (app.get('env') === 'development') {
  mongoose
  .connect('mongodb://localhost/assessment-test')
  .catch(err => console.log("make sure the mongodb server has been activated"));
}

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('the app works');
});

require('./auth/auth.route')(app);
app.use('/v1', require('./v1/products/product.route'));
app.use('/v2', require('./v2/products/product'));

app.listen(PORT, () => {
  console.log(`server listen at port ${PORT}`);
});