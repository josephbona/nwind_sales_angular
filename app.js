'use strict';

const express = require('express');
const path = require('path');
const app = express();

module.exports = app;

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function(req, res, next) {
  res.renderFile('./browser/index.html');
});

app.use(require('body-parser').json());

app.use('/api/salesPeople', require('./routes/salesPeople'));
app.use('/api/regions', require('./routes/regions'));