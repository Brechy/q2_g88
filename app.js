const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const userimgRouter = require('./routes/userimg'); //brechin
const apiRouterUser = require('./routes/api_user.js'); //brechin
const signupRouter= require('./routes/signup');

const userCategoriesRouter = require('./routes/usercategories'); //brechin
const userBioRouter = require('./routes/user_bio')
const profileRouter = require('./routes/profile');
const offersRouter = require('./routes/offers');
const requestsRouter = require('./routes/requests');
const membersRouter = require('./routes/members');

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

app.use('/api/v1/user', apiRouterUser); //brechin
app.use('/signup3', userCategoriesRouter); //brechin
app.use('/signup1', userimgRouter); //brechin
app.use('/signup', signupRouter);

app.use('/usercategories', userCategoriesRouter); //brechin

//THis is the route for userBio
app.use('/signup2',userBioRouter);

//These routes is for profile.
app.use('/profile', profileRouter);
app.use('/offers', offersRouter);
app.use('/requests', requestsRouter);

app.use('/members', membersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	console.log(err.message);
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
