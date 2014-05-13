var express = require('express');
var bodyParser = require('body-parser');
var countryData = require('./modules/countries.json');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/countries', function(req, res){
	res.send(countryData);
})

app.post('/search', function(req, res){

	// console.log(
	// 	{
	// 		countryName: req.body.countryName
	// 	});
	
	var searchVal = req.body.countryName

	// Filter the countries array to only the names that match the user's search query, then send the matching countries back to the client.

	// testFunc() --> function to test each element in an array
	// country is the loop variable (one of countryData)
	function testFunc(country) {
		// argument to filter func is countryData[i]
		// if a part of searchVal exists in country.name
		if(country.name.indexOf(searchVal) > -1){
			return true;
		}
	}

	var filterResult = countryData.filter(testFunc);
	// console.log(filterResult);
	
	// sending back filtered result. add [0] for just one result
	res.send(filterResult);
	// req.body -- will access object['countryName'] (or object.countryName)
});

var server = app.listen(6183, function() {
	console.log('Express server listening on port ' + server.address().port);
});
