const express = require('express'),
  morgan = require('morgan'),
  //Importing built-in node modules data, fs and path.
  data = require('./topten.json')
  fs = require('fs'),
  path = require('path');

  const app = express();

//creating a write stream in append mode, and a txt file in root dir.
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), { flags: 'a' });

//setting up the logger
app.use(morgan('combined', { stream: accessLogStream }));

app.get('/', (req, res) => {
  res.send('Welcome to the movie app!');
});

app.use(express.static('public'));

// http://localhost:8080/movies displays the top ten movies in JSON format
app.get('/movies', (req, res) => {
  res.send(JSON.stringify(data));
});

//Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('File not available.')
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});