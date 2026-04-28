// mapbox access token
mapboxgl.accessToken = "pk.eyJ1Ijoib3dlbmZlcmciLCJhIjoiY21uaHp6a3Z5MDg5NjJwb2RrdTVpbDhxbCJ9.i_URRCdviydaQxvfgjhVfw";

// map setup
const map = new mapboxgl.Map({
	container: "map",
	style: "mapbox://styles/owenferg/cmoi9wp7300lc01sehn02f125",
	center: [-157.8583, 21.3069],
	zoom: 1.5
});

// zoom controls
map.addControl(new mapboxgl.NavigationControl({
	showCompass: false
}), "top-left");