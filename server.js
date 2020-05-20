var express = require('express');

var app = express();
const port = 3000;

//allows access to the root for serving static files
app.use(express.static(__dirname));

//app.listen(3000);

app.listen(PORT, () =>{
  console.log(`App is listening on port ${PORT}`); 
});
