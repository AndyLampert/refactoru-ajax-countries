
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
});

// In your Ajax callback, loop through each country in the response and render a list item for each one into an unordered list on the page.