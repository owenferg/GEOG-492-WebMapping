
// mapbox token
mapboxgl.accessToken = "pk.eyJ1Ijoib3dlbmZlcmciLCJhIjoiY21uaHp6a3Z5MDg5NjJwb2RrdTVpbDhxbCJ9.i_URRCdviydaQxvfgjhVfw";

const centerLng = -123.08991
const centerLat = 44.0507

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [centerLng, centerLat],
    zoom: 11,
});

// zoom
map.addControl(new mapboxgl.NavigationControl({
    showCompass: false
}), 'bottom-left');

// define each popup for each marker
const popupDDR = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: true,
    offset: 25
    })
    .setLngLat([-123.1084, 44.0686])
    .setHTML(`
        <h2>Round1 Arcade (Dance Dance Revolution)</h2>
        <p>During my free time, I like to head to Valley River Center and go to Round1 with my 
        friends. My favorite game to play is Dance Dance Revolution, a dancing rhythm game.
        I've been consistently playing it since November and my friends say I'm very good
        at it.</p>
        <a href="https://www.round1usa.com/">Read more about Round1</a><br>
        <a href="https://en.wikipedia.org/wiki/Dance_Dance_Revolution">Read more about Dance Dance Revolution</a>
        `);

const popupCat = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: true,
    offset: 25
    })
    .setLngLat([-123.0336, 44.0563])
    .setHTML(`
        <h2>Eugene Springfield Cat Lounge</h2>
        <p>A favorite reoccuring date between me and my partner is to visit the
        local cat cafe. You pay
        for 60 minutes to basically just hang out with cats and chill. Their beverage
        and snack selection is alright as well. We both aren't in living situations
        where we can have cats, so we use this as an outlet for the cat-lovers within
        us.</p>
        <a href="https://eugenespringfieldcatlounge.com/">Read more about the cat lounge</a>
        `);

const popupGarden = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: true,
    offset: 25
    })
    .setLngLat([-123.0336, 44.0563])
    .setHTML(`
        <h2>Owen Rose Garden</h2>
        <p>How could I not like a rose garden named after me!</p>
        <p style="font-size: 0.5rem; font-style: italic;">not really...</p>
        <p>This garden is perfect around late May-June, which is coming up fast. There are
        many different stunning colors of roses across the garden, so it's a spot you
        definitely don't want to miss when the season is right (however, my allergies would
        beg to differ).</p>
        <a href="https://www.eugene-or.gov/facilities/facility/details/124">Read more about Owen Rose Garden</a>
        `);

const popupMarket = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: true,
    offset: 25
    })
    .setLngLat([-123.0336, 44.0563])
    .setHTML(`
        <h2>Saturday Market</h2>
        <p>What's there not to love about the Saturday Market? Every Saturday from
        10am to 4pm, many vendors gather to sell pretty much everything you could ever
        hope for. From delicious food, to neat little trinkets, visiting the market is
        one of the best ways to spend Saturdays in Eugene.</p>
        <a href="https://eugenesaturdaymarket.org/">Read more about the Saturday Market</a>
        `);

// define each marker
var markerDDR = new mapboxgl.Marker({color:'pink'})
    .setLngLat([-123.1084, 44.0686])
    .addTo(map);

var markerCat = new mapboxgl.Marker({color:'lightblue'})
    .setLngLat([-123.0336, 44.0563])
    .addTo(map);

var markerGarden = new mapboxgl.Marker({color:'lightgreen'})
    .setLngLat([-123.1023, 44.0627])
    .addTo(map);

var markerMarket = new mapboxgl.Marker({color:'orange'})
    .setLngLat([-123.0912, 44.0508])
    .addTo(map);

// set the popups for each marker
markerDDR.setPopup(popupDDR);
markerCat.setPopup(popupCat);
markerGarden.setPopup(popupGarden);
markerMarket.setPopup(popupMarket);

// event listeners for markers
const markers = [markerDDR, markerCat, markerGarden, markerMarket];

for (const marker of markers) {
    const markerElement = marker.getElement();

    markerElement.addEventListener('mouseenter', () => {
        markerElement.style.cursor = 'pointer';
    });

    markerElement.addEventListener('click', () => {
        map.flyTo({
            center: marker.getLngLat(),
            essential: true
        });
    });

    markerElement.addEventListener('mouseleave', () => {
        markerElement.style.cursor = '';
    });
}

