var express = require('express');
var data = require('./data/test.json');//our test data
var app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/public')); // set location for static files
app.use(require("body-parser").urlencoded({extended: true})); // parse form submissions

/*

//allows access to the root for serving static files
app.use(express.static(__dirname));

//access asset files in public folder
app.use(express.static('public'));

//allows access to images folder
app.use('/images',express.static('images'));

*/

app.get('/',(req,res) =>{
  //res.send(`We're at the root of the app, on port ${PORT}`);
  //res.json(data);
  res.type('text/html');
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () =>{
  console.log(`App is listening on port ${PORT}`);
  console.log(data);
});
