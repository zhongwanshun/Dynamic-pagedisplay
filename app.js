var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var careerRouter = require('./routes/career');
var comingsoonRouter = require('./routes/comingsoon');
var contactRouter = require('./routes/contact');
var faqRouter = require('./routes/faq');
var index2Router = require('./routes/index2');
var index3Router = require('./routes/index3');
var portfolioRouter = require('./routes/portfolio');
var pricingRouter = require('./routes/pricing');
var teamRouter = require('./routes/team');
var testimonialRouter = require('./routes/testimonial');



var app = express();
app.use('/www', express.static('public'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/career', careerRouter);
app.use('/cominsoon', comingsoonRouter);
app.use('/contact', contactRouter);
app.use('/faq', faqRouter);
app.use('/index2', index2Router);
app.use('/index3', index3Router);
app.use('/portfolio', portfolioRouter);
app.use('/pricing', pricingRouter);
app.use('/team', teamRouter);
app.use('/testimonial', testimonialRouter);







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
    res.render('404');
});

module.exports = app;