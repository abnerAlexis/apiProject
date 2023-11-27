//Locally importing express and built in node modules fs and path
const express = require('express'),
morgan = require('morgan'),
fs = require('fs'),
path = require('path');
const app = express();

//creating a write stream in append mode and text file in root dir
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), { flags: 'a' });

//logger setup
app.use(morgan('combined'), {stream: accessLogStream});

app.get('/', (req, res) => {
    res.send('This is a movie app.');
});

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});