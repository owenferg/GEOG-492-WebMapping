// Insert the JavaScript within the <script> tags, within the body
// Start with the Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoib3dlbmZlcmciLCJhIjoiY21uaHp6a3Z5MDg5NjJwb2RrdTVpbDhxbCJ9.i_URRCdviydaQxvfgjhVfw';

// Initialize the map
var map = new mapboxgl.Map({
    container: 'map', // id of a div on your page, where the map will be inserted
    style: 'mapbox://styles/mapbox/outdoors-v11', // stylesheet location
    center: [-122.6788, 45.5212], // starting position [lng, lat] eg. [-122.6788, 45.5212]
    zoom: 3 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

/***  POPUPS  ***/
    // Part A III. markers go here

    // Popup for marker 1
    var popup1_content = '<h2>Play the video to listen to Portland</h2><br>';
    popup1_content += '<iframe width="300px" src="https://www.youtube.com/embed/z1AdmS-LqyA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    popup1_content += '<p>Source: Ian Lind, <a href="https://www.youtube.com/embed/z1AdmS-LqyA" target="_blank">YouTube</a></p>';

    // Popup for marker 2
    var popup2_content = '<h2>Press play to listen to London in 1928</h2><br>';
    popup2_content += '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A892653091&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>';
    popup2_content += '<div style="font-size: 10px; color: #cccccc; line-break: anywhere; word-break: normal; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-family: Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif; font-weight: 100;"><a href="https://soundcloud.com/londonstreetnoises" title="London Street Noises" target="_blank" style="color: #cccccc; text-decoration: none;">London Street Noises</a> - <a href="https://soundcloud.com/londonstreetnoises/cromwell-1928" title="London Cromwell Road / Queen&#39;s Gate in 1928" target="_blank" style="color: #cccccc; text-decoration: none;">London Cromwell Road / Queen&#39;s Gate in 1928</a></div>';
    popup2_content += '<p>Source: LondonStreetNoises.co.uk, <a href="https://soundcloud.com/londonstreetnoises" target="_blank">SoundCloud</a></p>';

    // Popup for marker 3
    var popup3_content = '<h2>Press play to listen to a bison eating</h2><br>';
    popup3_content += '<audio controls><source src="sounds/yell-YELLBisonEating150313.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>';
    popup3_content += '<p>Source: NPS/Jennifer Jerret, <a href="https://www.nps.gov/yell/learn/photosmultimedia/sounds-bisoneating.htm" target="_blank">NPS</a></p>';
    popup3_content += '<img class="popupImage" src="https://www.nps.gov/yell/learn/photosmultimedia/images/ndh-yell-bison-gibbon_2.jpg?maxwidth=1200&maxheight=1200&autorotate=false" alt="A bison lowers its head to graze in a grassy area of Yellowstone National Park.">';
    popup3_content += '<p>Source: NPS/Neal Herbert, <a href="https://www.nps.gov/yell/learn/photosmultimedia/sounds-bisoneating.htm" target="_blank">NPS</a></p>';

/***  END POPUPS  ***/


/***  MARKERS  ***/
    // Part A II. markers go here

    // Marker 1 - Portland
    var marker1 = new mapboxgl.Marker({color:'DarkRed'})
        .setLngLat([-122.6788,45.5212]) // Portland
        .addTo(map);

    // Marker 2 - London
    var marker2 = new mapboxgl.Marker({color:'DarkRed'})
        .setLngLat([-0.1534307, 51.501223]) // London
        .addTo(map);

    // Marker 3 - Yellowstone
    var marker3 = new mapboxgl.Marker({color:'DarkRed'})
        .setLngLat([-110.74524187568,44.706216445069]) // Yellowstone
        .addTo(map);

/***  END MARKERS  ***/


/***  LISTENERS  ***/
    // Part IX 2. listeners go here

    var customPopup = document.getElementById('customPopup');

    function showCustomPopup(content) {
        customPopup.innerHTML = '<button class="customPopupClose" id="customPopupClose" type="button">Close</button>' + content;
        customPopup.classList.remove('hidden');
        document.getElementById('customPopupClose').addEventListener('click', function () {
            customPopup.classList.add('hidden');
            customPopup.innerHTML = '';
        });
    }

    // Add a 'Listener' to the button element with the ID 'LondonButton'.
    document.getElementById('LondonButton').addEventListener('click', function () {
        map.flyTo({
            center: [-0.1534307, 51.501223],
            zoom: 11
        });
        showCustomPopup(popup2_content);
    });

    // Add a 'Listener' to the button element with the ID 'PortlandButton'.
    document.getElementById('PortlandButton').addEventListener('click', function () {
        map.flyTo({
            center:[-122.6788,45.5212],
            zoom: 9
        });
        showCustomPopup(popup1_content);
    });

    // Add a 'Listener' to the button element with the ID 'YellowstoneButton'.
    document.getElementById('YellowstoneButton').addEventListener('click', function () {
        map.flyTo({
            center: [-110.74524187568,44.706216445069],
            zoom: 9
        });
        showCustomPopup(popup3_content);
    });

    marker1.getElement().addEventListener('click', function () {
        showCustomPopup(popup1_content);
    });

    marker2.getElement().addEventListener('click', function () {
        showCustomPopup(popup2_content);
    });

    marker3.getElement().addEventListener('click', function () {
        showCustomPopup(popup3_content);
    });

/***  END LISTENERS  ***/
