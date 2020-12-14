const express = require('express');
require('dotenv').config()
const bodyParser = require ('body-parser');

const user = require('./components/users/routes');

const app = express();

app.use(bodyParser.json())

//Router

// Example
app.use('/user', user)
// app.use('/api/user', user);
// app.use('/api/auth', auth);


module.exports = app;