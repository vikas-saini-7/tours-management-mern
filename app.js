const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes.js');
const userRouter = require('./routes/userRoutes.js');
const AppError = require('./utils/appError.js');
const globalErrorHandler = require('./controllers/errorController.js')

const app = express();

// 1) MIDDLEWARES
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`))

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
});

app.use(globalErrorHandler)

module.exports = app;