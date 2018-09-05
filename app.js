const createError = require('http-errors');
const express = require('express');

const asksRouter = require('./routes/asks');
const bidsRouter = require('./routes/bids');

const app = express();

app.use(express.json());

app.use('/api/offers/asks', asksRouter);
app.use('/api/offers/bids', bidsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.sendStatus(err.status || 500);
});

module.exports = app;
