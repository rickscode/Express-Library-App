// import useful node libraries
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
// import modules from routes directory for handling URL routes
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
// create express app object
let app = express();
// Set up Connection to MongoDB
let mongoose = require('mongoose');
let mongDB = 'mongodb+srv://rickscode:Pollobibi2441@firstcluster.mqlg7.mongodb.net/local_library?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// request handling chain
// add middleware libraries into request handling chain
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// add code from routes modules to request handling chain
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// export && allow import by /bin/wwww
module.exports = app;
