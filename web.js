var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 
   var fs = require('fs');
   var str = fs.readFileSync("index.html", "uft8");
   response.send(str);
   var buffer = new Buffer(256);
   buffer.write("hola2");
   response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
