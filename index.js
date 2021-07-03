const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');
dotenv.config({
    path: './config.env',
});


const DB = process.env.DATABASE

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Database is connected');
  });

const port = process.env.PORT || 8000;


const server = app.listen(port, () => {
    console.log('Server is listening at ' + port);
});
