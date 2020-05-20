var express = require('express');

var app = express();

//allows access to the root for serving static files
app.use(express.static(__dirname));

app.listen(3000);
