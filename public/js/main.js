$(document).ready(function(){
	$(document).on('click', '.load-countries-btn', function(){
		var itemEl = $(this);
		$.get('/countries', function(data){
			var list = $('<ul>');
			// name is a single item of the thing mapping over
			var listItems = data.map(function(country){
				return $('<li class=country-list>' + country['name'] + '</li>');
			});
			list.append(listItems);
			$('body').append(list);
		})
	});
	$(document).on('click', '.search-btn', function(){
		var requestData = {
			countryName: $('.country-input').val()
		};
		$.post('/search', requestData, 
		// 3rd param is the callback with the response data
		function(responseData){
			// loop through responseData (already filtered) results
			var resultCountryNames = [];
				for (var i = 0; i < responseData.length; i++) {
				resultCountryNames.push(responseData[i].name);
			};
			console.log(resultCountryNames);
			var resultList = $('<ul>');
			var resultListItems = responseData.map(function(country){
				return $('<li class=country-result-name>' + country.name + '</li>');
			});
			resultList.append(resultListItems);
			$('body').append(resultList);
		});
	});
});

// In your Ajax callback, loop through each country in the response and render a list item for each one into an unordered list on the page.

// 