// mapbox access token
mapboxgl.accessToken = "pk.eyJ1Ijoib3dlbmZlcmciLCJhIjoiY21uaHp6a3Z5MDg5NjJwb2RrdTVpbDhxbCJ9.i_URRCdviydaQxvfgjhVfw";

// map setup
const map = new mapboxgl.Map({
	container: "map",
	style: "mapbox://styles/owenferg/cmoi8214g009001r44tbkc8kq",
	center: [-98.03, 38.016],
	zoom: 4
});

// zoom controls
map.addControl(new mapboxgl.NavigationControl({
	showCompass: false
}), "top-left");