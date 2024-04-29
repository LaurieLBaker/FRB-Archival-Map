mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhbnRvc28yNCIsImEiOiJjbHJoMnpqa28wM3g2MmptZjNhY2I0azZ4In0.hf_HgbByCza1aIBdbbbaOw';
const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio,
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [0, 0],
    zoom: 3,
});

map.on('style.load', () => {
    map.addSource('route', {
        type: 'geojson',
        data: 'Geojson-data/routes.geojson' // Pass the GeoJSON object
    });

    map.addLayer('route', {
        "id": "route",
        "minzoom": 0,
        "maxzoom": 22,
        "type": "line",
        "paint": {
            'line-color': 'red',
            'line-width': 2,
            'line-dasharray': [2, 2]
        },
        "source": "route",
    });
})