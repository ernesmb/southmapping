var map;

function inicio(){

map=L.map('map', {dragging:false, zoomControl:false, scrollWheelZoom:false, touchZoom:false}).setView([22.116, -81.555],11);

var satellite=L.tileLayer('https://{s}.tiles.mapbox.com/v4/{mapId}/{z}/{x}/{y}.png?access_token={token}', {
    attribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">&copy; Mapbox &copy; OpenStreetMap</a>',
    subdomains: ['a','b','c','d'],
    mapId: 'southmapping.nbh7eb5o',
    token: 'pk.eyJ1Ijoic291dGhtYXBwaW5nIiwiYSI6IkdsNWJpUzQifQ.wGioWqTZt28vefHwFu1hQA'}).addTo(map);
  
setInterval(function(){
  n=Math.floor((Math.random()*5));
  switch(n){
	case 0:
	  map.setView( [24.059, -77.629], 9 );
	  break;
        case 1:
	  map.setView( [-48.012, -73.707], 8 );
	  break;
        case 2:
	  map.setView( [36.918, -6.229], 12 );
	  break;
        case 3:
	  map.setView( [-3.097, 37.076], 11 );
	  break;
	case 4:
	  map.setView( [0.137, -50.663], 11 );
	  break;
	case 5:
	  map.setView( [46.544, 75.965], 8 );
	  break;
    /*  case 6:
	  map.setView();
	  break;
        case 7:
	  map.setView();
	  break;
	case 8:
	  map.setView();
	  break;
        case 9:
	  map.setView();
	  break;*/
	}		
}, 5000);
}
