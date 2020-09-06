var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Here we want to test the automatic update!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

