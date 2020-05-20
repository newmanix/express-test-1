var express = require('express');
//import data from './data/test.json';
var data = require('./data/test.json');

var app = express();
const PORT = 3000;

//allows access to the root for serving static files
app.use(express.static(__dirname));

app.listen(PORT, () =>{
  console.log(`App is listening on port ${PORT}`);
  console.log(data);
});
