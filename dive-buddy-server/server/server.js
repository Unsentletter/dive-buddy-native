const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

var { mongoose } = require('./db/mongoose');
var { User } = require('./models/user');

const PORT = 3001;

const app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('it worked');
})

// SIGN IN
app.post('/users', (req, res) => {
  console.log(req.body);
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  })
  .then((token) => {
    res.header('x-auth', token).send(user)
  })
  .catch((err) => {
    res.status(400).send(err);
  })
});

// app.get('/users/me', authenticate, (req, res) => {
//   res.send(req.user)
// })
//
// // LOG IN
// app.get('/users/login', (req, res) => {
//
// })


app.listen(PORT, function () {
  console.log(`Listening on PORT ${PORT}`);
})
