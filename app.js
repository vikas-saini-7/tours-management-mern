const fs = require('fs')
const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes.js');
const userRouter = require('./routes/userRoutes.js');

const app = express();

// 1) MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// 3) SERVER 

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Listening...on port ${PORT}`);
})