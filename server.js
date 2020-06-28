const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(  './dist/quiz-app'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join('index.html', { root: 'dist/project-name'} ));
});

// default Heroku PORT
app.listen(process.env.PORT || 8080);
console.log("Listeninig");