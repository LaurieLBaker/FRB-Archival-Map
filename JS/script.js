
//A beginning to import the layout of the map and API information
mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhbnRvc28yNCIsImEiOiJjbHJoMnpqa28wM3g2MmptZjNhY2I0azZ4In0.hf_HgbByCza1aIBdbbbaOw'; //mapbox token you get from the account
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/isantoso24/clvv6w8xq06bn01ph4u60fwkh',
    zoom: 1.5,
    center: [-90, 40]
});

//Styling the map aesthetic how it looks
map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
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
                'coordinates': [ -68.0667218220679, 44.3683756622474] //only select one point of location
            }
        }
    ]
};

// A simple line from origin to destination.
// Read the GeoJSON data and add line layer
fetch('Geojson-data/routes_1876.geojson') //data input
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
        const steps = 1000;

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
                'line-width': 2,
                'line-dasharray': [2,2]
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
// Remaining code for spinning globe and other controls
// The following values can be changed to control rotation speed:
// At low zooms, complete a revolution every two minutes.
const secondsPerRevolution = 120;
// Above zoom level 5, do not rotate.
const maxSpinZoom = 5;
// Rotate at intermediate speeds between zoom levels 3 and 5.
const slowSpinZoom = 3;

let userInteracting = false;
let spinEnabled = true;

function spinGlobe() {
    const zoom = map.getZoom();
    if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
            // Slow spinning at higher zooms
            const zoomDif =
                (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
            distancePerSecond *= zoomDif;
        }
        const center = map.getCenter();
        center.lng -= distancePerSecond;
        // Smoothly animate the map over one second.
        // When this animation is complete, it calls a 'moveend' event.
        map.easeTo({ center, duration: 1000, easing: (n) => n });
    }
}

// Pause spinning on interaction
map.on('mousedown', () => {
    userInteracting = true;
});

// Restart spinning the globe when interaction is complete
map.on('mouseup', () => {
    userInteracting = false;
    spinGlobe();
});

// These events account for cases where the mouse has moved
// off the map, so 'mouseup' will not be fired.
map.on('dragend', () => {
    userInteracting = false;
    spinGlobe();
});
map.on('pitchend', () => {
    userInteracting = false;
    spinGlobe();
});
map.on('rotateend', () => {
    userInteracting = false;
    spinGlobe();
});

// When animation is complete, start spinning if there is no ongoing interaction
map.on('moveend', () => {
    spinGlobe();
});

document.getElementById('btn-spin').addEventListener('click', (e) => {
    spinEnabled = !spinEnabled;
    if (spinEnabled) {
        spinGlobe();
        e.target.innerHTML = 'Pause rotation';
    } else {
        map.stop(); // Immediately end ongoing animation
        e.target.innerHTML = 'Start rotation';
    }
});

spinGlobe();
// Add zoom and rotation controls to the map.
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);
//Add map search
map.addControl(new mapboxgl.NavigationControl());
//Add map fullscreen
map.addControl(new mapboxgl.FullscreenControl());