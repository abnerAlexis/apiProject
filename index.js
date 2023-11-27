//Locally importing express and guilt in node modules fs and path
const express = require('express'),
morgan = require('morgan');
const app = express();

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});