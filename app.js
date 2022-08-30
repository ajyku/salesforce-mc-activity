var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { response } = require('express');

var app = express();
app.set('view engine', 'ejs');
app.use(express.json());
// app.use(compression());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.static(__dirname + '/public'));
app.use('/', express.static(__dirname + '/www'));
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.post('/execute', (req, res) => {
  console.log('execute data: ', req.body);
  res.json({ foundSignupDate: '2016-03-10' });
});

app.post('/save', (req, res) => {
  console.log('save data: ', req.body);
  res.json({ message: 'saved' });
});

app.post('/publish', (req, res) => {
  console.log('publish data: ', req.body);
  res.json({ message: 'published!!!' });
});

app.post('/validate', (req, res) => {
  console.log('validate data: ', req.body);
  res.json({ message: 'validated!!!' });
});

app.post('/stop', (req, res) => {
  console.log('stop data: ', req.body);
  res.json({ message: 'stoped!!!' });
});

app.set('port', process.env.PORT || 5001);
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

// module.exports = app;
