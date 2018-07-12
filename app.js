const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const userimgRouter = require('./routes/userimg'); //brechin
const apiRouterUser = require('./routes/api_user.js');
const signupRouter= require('./routes/signup');
//const user_imgRouter = require('./routes/user_img'); //brechin
const userBioRouter = require('./routes/user_bio')
const profileRouter = require('./routes/profile')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);

app.use('/api/v1/user', apiRouterUser);

app.use('/signup1', userimgRouter); //brechin
app.use('/signup', signupRouter);

//THis is the route for userBio
app.use('/signup2',userBioRouter);

//This route is for profile.
app.use('/profile',profileRouter)
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

module.exports = app;
