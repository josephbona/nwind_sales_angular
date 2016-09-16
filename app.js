'use strict';

const express = require('express');
const path = require('path');
const app = express();

module.exports = app;

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'browser')));