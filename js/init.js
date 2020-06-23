// Google Maps initMap function
var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 25.017447,
			lng: 121.539763
		},
		zoom: 14
	});
	ko.applyBindings(new viewModel());

}

function mapLoadError() {
	document.getElementById('map').innerHTML = "Unable to load the map due to some error."
}

navToggle = function () {
	$(".tog").toggleClass('toHide');
}