const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(  './dist/QuizApp'));

// Send all requests to index.html
app.get('*', function(req, res) {
  res.sendFile('./dist/index.html');
});

// default Heroku PORT 
app.listen(process.env.PORT || 8080);
console.log("Listeninig");