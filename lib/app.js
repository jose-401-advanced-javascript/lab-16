const express = require('express');
const app = express();

// middleware
const morgan = require('morgan');
const checkConnection = require('./middleware/check-connection');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

// test route
app.get('/hello', (req, res) => {
  res.send('hello express');
});

app.use(checkConnection);

// API ROUTES
const zips = require('./routes/zips');
const students = require('./routes/students');
const trades = require('./routes/trades');
const grades = require('./routes/grades');
const books = require('./routes/books');
app.use('/api/zips', zips);
app.use('/api/students', students);
app.use('/api/trades', trades);
app.use('/api/grades', grades);
app.use('/api/books', books);

// NOT FOUND
const api404 = require('./middleware/api-404');
app.use('/api', api404);

// ERRORS
const errorHandler = require('./middleware/error-handler');
app.use(errorHandler);

module.exports = app;