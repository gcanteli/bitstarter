var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 
   var fs = require('fs');
   var str = fs.readFileSync("index.html", "utf8");
   //response.send(str);
   var buffer = new Buffer(52256);
   var len = buffer.write(str);
   response.send(buffer.toString("utf8",0, len));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
