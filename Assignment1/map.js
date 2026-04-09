
// mapbox token
mapboxgl.accessToken = "pk.eyJ1Ijoib3dlbmZlcmciLCJhIjoiY21uaHp6a3Z5MDg5NjJwb2RrdTVpbDhxbCJ9.i_URRCdviydaQxvfgjhVfw";

const centerLng = -122.6788
const centerLat = 45.5212

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [centerLng, centerLat],
    zoom: 11,
});

map.addControl(new mapboxgl.NavigationControl({
    showCompass: false
}), 'bottom-left');

var popup = new mapboxgl.Popup({ offset: 25 })
    .setHTML('Hello World. Welcome to Portland!');

var popupLayer = new mapboxgl.Popup({closeOnClick: false})
    .setLngLat([-122.64, 45.5])
    .setHTML('<h1>Hi Portland!</h1>')
    .addTo(map);

var popupLayerVoodoo = new mapboxgl.Popup({
    closeOnClick: true, anchor: 'top-left'
    })
    .setLngLat([-122.673308, 45.522675])
    .setHTML('<a href="https://www.voodoodoughnut.com">Voodoo Donuts</a>')
    .addTo(map);

// markers, set after popup
var marker = new mapboxgl.Marker({color:'red'})
    .setLngLat([centerLng, centerLat])
    .setPopup(popup)
    .addTo(map);

var marker2 = new mapboxgl.Marker({color:'green'})
    .setLngLat([-122.69, 45.55])
    .addTo(map);

