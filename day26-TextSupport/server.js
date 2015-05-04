//--dependencies--//
var express = require('express');
var bodyParser = require('body-parser');

//--server variables--//
var app = express();
var port = 9909;

//--middleware--//
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

//--endpoints--//
app.get('/api/interest_rate', function(req, res){
	var num = Math.floor(Math.random() * 2000) / 100;
	res.json(num);
});


//--server listening--//
app.listen(port, function(){
	console.log('Listening on port: ', port);
});
