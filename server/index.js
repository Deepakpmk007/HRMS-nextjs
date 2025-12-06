const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const globalErrorHandler = require('./controllers/ErrorController');
const AppError = require('./utils/appError');
const db = require('./server');
const userRoute = require('./routers/userRoute');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
console.log(process.env.PORT);

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

db();

app.use('/api/v1/user/', userRoute);

app.all(/.*/, (req, res, next) => {
    next(AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
