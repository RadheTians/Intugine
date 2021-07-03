const express = require('express');
const userRoute = require('./userRoutes');
const app = express();


app.use(express.json());
app.use('/api/v11/', userRoute);
module.exports = app;