mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhbnRvc28yNCIsImEiOiJjbHJoMnpqa28wM3g2MmptZjNhY2I0azZ4In0.hf_HgbByCza1aIBdbbbaOw';
const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio,
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [-96, 37.8],
    zoom: 3,
    pitch: 40
});

// A single point that animates along the route.
// Coordinates are initially set to origin.
const point = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'Point',
                'coordinates': [130, 20] //why its only one point
            }
        }
    ]
};

// A simple line from origin to destination.
// Read the GeoJSON data and add line layer
fetch('Geojson-data/realRouteTest.geojson')
    .then(response => response.json())
    .then(data => {
        // Extract coordinates from the point features
        const coordinates = data.features.map(feature => feature.geometry.coordinates);

        // Create a LineString geometry using the extracted coordinates
        const lineString = {
            type: 'LineString',
            coordinates: coordinates
        };

        // Create a new GeoJSON object containing the LineString feature
        const route = {
            type: 'FeatureCollection',
            features: [{
                type: 'Feature',
                geometry: lineString,
                properties: {} // You can add properties if needed
            }]
        };

        // Use or save the new GeoJSON object as needed
        console.log(route); // Output the new GeoJSON object

        // Calculate the distance in kilometers between route start/end point.
        const lineDistance = turf.length(route.features[0]);

        const arc = [];

        // Number of steps to use in the arc and animation, more steps means
        // a smoother arc and animation, but too many steps will result in a
        // low frame rate
        const steps = 500;

        // Draw an arc between the `origin` & `destination` of the two points
        for (let i = 0; i < lineDistance; i += lineDistance / steps) {
            const segment = turf.along(route.features[0], i);
            arc.push(segment.geometry.coordinates);
        }

        // Update the route with calculated arc coordinates
        route.features[0].geometry.coordinates = arc;

        // Used to increment the value of the point measurement against the route.
        let counter = 0;

        // Add source for the line layer
        map.addSource('route', {
            type: 'geojson',
            data: route // Pass the GeoJSON object
        });

        map.addSource('point', {
            'type': 'geojson',
            'data': point
        });
    
        // Add line layer to show up
        map.addLayer({
            "id": "route",
            "minzoom": 0,
            "maxzoom": 22,
            "type": "line",
            "paint": {
                'line-color': 'red',
                'line-width': 2
            },
            "source": "route",
        });

        map.addLayer({
            'id': 'point',
            'source': 'point',
            'type': 'symbol',
            'layout': {
                // This icon is a part of the Mapbox Streets style.
                // To view all images available in a Mapbox style, open
                // the style in Mapbox Studio and click the "Images" tab.
                // To add a new image to the style at runtime see
                // https://docs.mapbox.com/mapbox-gl-js/example/add-image/
                'icon-image': 'ferry',
                'icon-size': 1.5,
                'icon-rotate': ['get', 'bearing'],
                'icon-rotation-alignment': 'map',
                'icon-allow-overlap': true,
                'icon-ignore-placement': true
            }
        });
        let running = false;
        function animate() {
            const start =
                route.features[0].geometry.coordinates[
                    counter >= steps ? counter - 1 : counter
                ];
            const end =
                route.features[0].geometry.coordinates[
                    counter >= steps ? counter : counter + 1
                ];
            if (!start || !end) {
                // Animation finished, reset state
                running = false;
                document.getElementById('replay').disabled = false;
                return;
            }
        
            // Update point geometry to a new position based on counter denoting
            // the index to access the arc
            point.features[0].geometry.coordinates =
                route.features[0].geometry.coordinates[counter];
        
            // Calculate the bearing to ensure the icon is rotated to match the route arc
            point.features[0].properties.bearing = turf.bearing(
                turf.point(start),
                turf.point(end)
            );
        
            // Update the source with this new data
            map.getSource('point').setData(point);
        
            // Request the next frame of animation as long as the end has not been reached
            if (counter < steps) {
                requestAnimationFrame(animate);
            }
        
            counter = counter + 1;
        }

        document.getElementById('replay').addEventListener('click', () => {
            if (!running) {
                // Set the coordinates of the original point back to origin
                point.features[0].geometry.coordinates = origin;
        
                // Update the source layer
                map.getSource('point').setData(point);
        
                // Reset the counter
                counter = 0;
        
                // Restart the animation
                animate();
            }
        });        

    })
    .catch(error => {
        console.error('Error loading GeoJSON:', error);
    });