var express = require('express');
var data = require('./data/test.json');//our test data
var app = express();
const PORT = 3000;

app.get('/',(req,res) =>{
  res.send(`We're at the root of the app, on port ${PORT}`);
});

//allows access to the root for serving static files
app.use(express.static(__dirname));

app.listen(PORT, () =>{
  console.log(`App is listening on port ${PORT}`);
  console.log(data);
});
