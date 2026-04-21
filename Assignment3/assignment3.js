mapboxgl.accessToken = "pk.eyJ1Ijoib3dlbmZlcmciLCJhIjoiY21uaHp6a3Z5MDg5NjJwb2RrdTVpbDhxbCJ9.i_URRCdviydaQxvfgjhVfw";

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/owenferg/cmnz6sujk003u01st26p0407m',
    center: [-122.669, 45.517],
    zoom: 8.5,
});

const nav = new mapboxgl.NavigationControl({})
map.addControl(nav,'top-left');

var state = { panelOpen: true };

function panelSelect(e){
if(state.panelOpen){
    document.getElementById('descriptionPanel').style.height = '26px';
    document.getElementById('glyph').className = "chevron glyphicon glyphicon-chevron-up";
    state.panelOpen = false;
} else {
    document.getElementById('descriptionPanel').style.height = '250px';
    document.getElementById('glyph').className = "chevron glyphicon glyphicon-chevron-down";
    state.panelOpen = true;
}
}