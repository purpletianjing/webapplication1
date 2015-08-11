var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',function(req,res) {
  res.sendfile('./UML.html');
});

app.listen(3000);
