mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhbnRvc28yNCIsImEiOiJjbHJoMnpqa28wM3g2MmptZjNhY2I0azZ4In0.hf_HgbByCza1aIBdbbbaOw';
const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio,
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [-96, 37.8],
    zoom: 3,
    pitch: 40
});

// Winter Harbor
const origin = [-67.8554, 44.0567];

// A single point that animates along the route.
// Coordinates are initially set to the first point of the route.
const point = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'Point',
                'coordinates': origin // Initialize at the origin
            }
        }
    ]
};

// Used to increment the value of the point measurement against the route.
let counter = 0;

// Number of steps to use in the animation, adjust as needed for smoother or faster animation
const steps = 500;

map.on('load', () => {
    // Load the GeoJSON file
    fetch('Geojson-data/routes.geojson')
        .then(response => response.json())
        .then(data => {
            // Extract coordinates from GeoJSON data
            const coordinates = data.features[0].geometry.coordinates;

            // Add a source and layer displaying the route line
            map.addSource('route', {
                'type': 'geojson',
                'data': data // Use the fetched GeoJSON data
            });

            map.addSource('point', {
                'type': 'geojson',
                'data': point
            });

            map.addLayer({
                'id': 'route',
                'source': 'route',
                'type': 'line',
                'paint': {
                    'line-width': 2,
                    'line-color': '#007cbf'
                }
            });

            map.addLayer({
                'id': 'point',
                'source': 'point',
                'type': 'symbol',
                'layout': {
                    'icon-image': 'airport',
                    'icon-size': 1.5,
                    'icon-rotate': ['get', 'bearing'],
                    'icon-rotation-alignment': 'map',
                    'icon-allow-overlap': true,
                    'icon-ignore-placement': true
                }
            });

            let running = false;

            function animate() {
                running = true;
                const currentCoordinate = coordinates[counter];
                const nextCoordinate = coordinates[counter + 1];
                if (!currentCoordinate || !nextCoordinate) {
                    running = false;
                    return;
                }

                // Calculate the interpolated position between current and next coordinates
                const interpolatedPosition = [
                    currentCoordinate[0] + (nextCoordinate[0] - currentCoordinate[0]) * (counter / steps),
                    currentCoordinate[1] + (nextCoordinate[1] - currentCoordinate[1]) * (counter / steps)
                ];

                // Update point geometry to the interpolated position
                point.features[0].geometry.coordinates = interpolatedPosition;

                // Update the source with this new data
                map.getSource('point').setData(point);

                // Request the next frame of animation as long as the end has not been reached
                if (counter < coordinates.length - 1) {
                    requestAnimationFrame(animate);
                }

                counter = counter + 1;
            }

            document.getElementById('replay').addEventListener('click', () => {
                if (!running) {
                    // Set the coordinates of the original point back to origin
                    point.features[0].geometry.coordinates = origin;

                    // Reset the counter
                    counter = 0;

                    // Restart the animation
                    animate(counter);
                }
            });

            // Start the animation
            animate(counter);
        })
        .catch(error => console.error('Error fetching GeoJSON file:', error));
});
