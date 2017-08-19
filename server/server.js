(function(){

  var express = require('express'),
        path = require('path'),
        http = require('http'),
        bodyParser = require('body-parser');

  var app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

  app.use(express.static('dist'));

  // app.get('*', function(request,response){
  //   response.sendFile(path.join(__dirname, '../dist/index.html'));
  // });

  app.set('port',3000);

  var server = http.createServer(app);

  server.listen(3000, function(){
    console.log('Server running on port 8080...');
  });
})();
