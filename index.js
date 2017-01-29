function init() {
		
		var map=L.map('map', {
				dragging:false, 
				zoomControl:false, 
				scrollWheelZoom:false, 
				touchZoom:false}
			)

		var satellite=L.tileLayer('https://{s}.tiles.mapbox.com/v4/{mapId}/{z}/{x}/{y}.png?access_token={token}', {
			attribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">&copy; Mapbox &copy; OpenStreetMap</a>',
			subdomains: ['a','b','c','d'],
			mapId: 'southmapping.nbh7eb5o',
			token: 'pk.eyJ1Ijoic291dGhtYXBwaW5nIiwiYSI6IkdsNWJpUzQifQ.wGioWqTZt28vefHwFu1hQA'}).addTo(map);
		
	
		var i=Math.floor((Math.random() * 6) + 1);				
		map.setView(locations[i].coords, locations[i].zoom);
		console.log(locations[i])
}
