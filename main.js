mapboxgl.accessToken = "pk.eyJ1Ijoib3dlbmZlcmciLCJhIjoiY21uaHp6a3Z5MDg5NjJwb2RrdTVpbDhxbCJ9.i_URRCdviydaQxvfgjhVfw";

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v11',
  center: [-123.08991, 44.0507],
  zoom: 10,
  antialias: true
});

map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right');

const zoomValue = document.getElementById('zoom-value');
const centerCopyButton = document.getElementById('center-copy-button');
const crosshairToggle = document.getElementById('crosshair-toggle');
const mapFrame = document.querySelector('.map-frame');

function updateZoomLabel() {
  zoomValue.textContent = map.getZoom().toFixed(1);
}

function formatCoordinates(lngLat, decimalPlaces = 5) {
  const lng = lngLat.lng.toFixed(decimalPlaces);
  const lat = lngLat.lat.toFixed(decimalPlaces);
  return `[${lng}, ${lat}]`;
}

function getCenterCoordinates() {
  return formatCoordinates(map.getCenter(), 3);
}

function updateCrosshairVisibility() {
  mapFrame.classList.toggle('crosshair-hidden', !crosshairToggle.checked);
}

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const helper = document.createElement('textarea');
  helper.value = text;
  helper.setAttribute('readonly', '');
  helper.style.position = 'absolute';
  helper.style.left = '-9999px';
  document.body.appendChild(helper);
  helper.select();
  const copied = document.execCommand('copy');
  document.body.removeChild(helper);
  return copied;
}

map.on('load', () => {
  updateZoomLabel();
  centerCopyButton.textContent = `Copy center coords ${getCenterCoordinates()}`;
  updateCrosshairVisibility();

  crosshairToggle.addEventListener('change', updateCrosshairVisibility);

  map.addSource('focus-circle', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: []
    }
  });

  map.addLayer({
    id: 'focus-circle-fill',
    type: 'circle',
    source: 'focus-circle',
    paint: {
      'circle-radius': 10,
      'circle-color': '#0d9488',
      'circle-opacity': 0.32,
      'circle-stroke-color': '#0f766e',
      'circle-stroke-width': 2
    }
  });

  map.on('zoom', updateZoomLabel);
  map.on('move', () => {
    centerCopyButton.textContent = `Copy center coords ${getCenterCoordinates()}`;
  });

  centerCopyButton.addEventListener('click', async () => {
    const centerCoordinates = getCenterCoordinates();

    try {
      await copyToClipboard(centerCoordinates);
      centerCopyButton.textContent = `Center copied!`;
      window.setTimeout(() => {
        centerCopyButton.textContent = `Copy center coords ${getCenterCoordinates()}`;
      }, 1200);
    } catch (error) {
      void error;
    }
  });

  map.on('click', async (event) => {
    const coordinates = formatCoordinates(event.lngLat);

    const source = map.getSource('focus-circle');
    if (source) {
      source.setData({
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [event.lngLat.lng, event.lngLat.lat]
          },
          properties: {}
        }]
      });
    }

    try {
      await copyToClipboard(coordinates);
    } catch (error) {
      void error;
    }

    new mapboxgl.Popup({ closeButton: false, closeOnClick: true, offset: 12 })
      .setLngLat(event.lngLat)
      .setHTML(`<strong>Copied to clipboard</strong>${coordinates}`)
      .addTo(map);
  });
});