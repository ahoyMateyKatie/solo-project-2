const path = require('path');

const express = require('express');

const app = express();

const apiRouter = require('./routes/api');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//need to serve static files
app.use(express.static(path.join(__dirname, '../src')));

//route handler
app.use('/api', apiRouter);

app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`)
});

// module.exports = app;