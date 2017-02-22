var searchStartBnt = document.body.querySelector('.head-search');
var searchForm = document.getElementById('search-form');

searchStartBnt.addEventListener('click', function() {
	searchForm.classList.toggle('hidden');
});

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: 34.797, lng: -112.000},
    	scrollwheel: true,
    	zoom: 10
    });
}