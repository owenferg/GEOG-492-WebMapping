
// mapbox token
mapboxgl.accessToken = "pk.eyJ1Ijoib3dlbmZlcmciLCJhIjoiY21uaHp6a3Z5MDg5NjJwb2RrdTVpbDhxbCJ9.i_URRCdviydaQxvfgjhVfw";

// map inits
var map = new mapboxgl.Map({
    container: 'map1',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [-121.69314602427785, 45.36851297684787],
    zoom: 11,
})

var map2 = new mapboxgl.Map ({
    container: 'map2', 
    style: 'mapbox://styles/mapbox/dark-v11', 
    center: [-121.76278818006217, 46.85058457028113], 
    zoom: 11,
});

var map3 = new mapboxgl.Map ({
    container: 'map3',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [-121.82099024078967, 48.77369128438814],
    zoom: 11,
})

// markers and popups
var popup = new mapboxgl.Popup()
    .setText('This is my first point.');

var popup2 = new mapboxgl.Popup()
.setText('This is my second point.');

var popup3 = new mapboxgl.Popup()
.setText('This is my third point.');

var marker = new mapboxgl.Marker({color: 'red'})
    .setLngLat([-121.69314602427785, 45.36851297684787])
    .setPopup(popup)
    .addTo(map);

var marker2 = new mapboxgl.Marker({color:'blue'})
    .setLngLat([-121.76278818006217, 46.85058457028113]) 
    .setPopup(popup2) 
    .addTo(map2); 

var marker3 = new mapboxgl.Marker({color:'blue'})
    .setLngLat([-121.82099024078967, 48.77369128438814]) 
    .setPopup(popup3) 
    .addTo(map3); 

// Disable drag and zoom handlers
map.dragPan.disable()
map.scrollZoom.disable()
map.boxZoom.disable()
map.dragRotate.disable()
map.keyboard.disable()
map.doubleClickZoom.disable()
map.touchZoomRotate.disable()
map.touchZoomRotate.disableRotation();

map2.dragPan.disable();
map2.scrollZoom.disable();
map2.boxZoom.disable();
map2.dragRotate.disable();
map2.keyboard.disable();
map2.doubleClickZoom.disable();
map2.touchZoomRotate.disable();
map2.touchZoomRotate.disableRotation();

map3.dragPan.disable();
map3.scrollZoom.disable();
map3.boxZoom.disable();
map3.dragRotate.disable();
map3.keyboard.disable();
map3.doubleClickZoom.disable();
map3.touchZoomRotate.disable();
map3.touchZoomRotate.disableRotation();

// change cursors on maps
map.getCanvas().style.cursor = 'auto';
map2.getCanvas().style.cursor = 'auto';
map3.getCanvas().style.cursor = 'auto';