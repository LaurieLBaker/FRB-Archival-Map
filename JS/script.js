
//A beginning to import the layout of the map and API information
mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhbnRvc28yNCIsImEiOiJjbHJoMnpqa28wM3g2MmptZjNhY2I0azZ4In0.hf_HgbByCza1aIBdbbbaOw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    projection: 'globe', // Display the map as a globe, since satellite-v9 defaults to Mercator
    zoom: 1.5,
    center: [-90, 40]
});

//Styling the map aesthetic how it looks
map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
    map.addLayer({ //set the bathymetry style
        "id": "depth",
        "type": "fill",
        "paint": {
            "fill-color": [
                "interpolate",
                [
                    "linear"
                ],
                [
                    "get",
                    "min_depth"
                ],
                0,
                "hsl(201, 93%, 54%)",
                684,
                "hsl(201, 94%, 45%)",
                1932,
                "hsl(201, 94%, 37%)",
                3217,
                "hsl(201, 95%, 31%)",
                4327,
                "hsl(201, 94%, 23%)",
                5731,
                "hsl(201, 93%, 17%)",
                7000,
                "hsl(201, 94%, 15%)"
            ]
        },
        "layout": {},
        "source": "composite",
        "source-layer": "depth"
    })
});

//Adding the line layer, first we have to convert or fetch the geojson data that we have from points to line
// Read the GeoJSON data
fetch('Geojson-data/journals_test.geojson')
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
    const newGeoJSON = {
        type: 'FeatureCollection',
        features: [{
            type: 'Feature',
            geometry: lineString,
            properties: {} // You can add properties if needed
        }]
    };

    // Use or save the new GeoJSON object as needed
    console.log(newGeoJSON); // Output the new GeoJSON object

    // Add source for the line layer
    map.addSource('route', {
        type: 'geojson',
        data: newGeoJSON // Pass the GeoJSON object
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

//work on this more

// Calculate the distance in kilometers between route start/end point.
const lineDistance = turf.length(route.features[0]);
// Number of steps to use in animation, more steps means a smoother arc and animation, but too many steps will result in a low frame rate
const steps = 500;
// Used to increment the value of the point measurement against the route.
let counter = 0;

//Adding the point data
map.on('load', function() {
    map.addSource('points', { //set the geojson
        type: 'geojson',
        data: 'Geojson-data/journals_test.geojson' //path for the json make sure to check the console (cmd + opt +J)
    });
    map.addLayer({ //this is the way to add geojson layer to show up
        'id': 'points',
        'source': 'points',
        'type': 'symbol',
        'layout': {
            // This icon is a part of the Mapbox Streets style.
            // To view all images available in a Mapbox style, open
            // the style in Mapbox Studio and click the "Images" tab.
            // To add a new image to the style at runtime see
            // https://docs.mapbox.com/mapbox-gl-js/example/add-image/
            'icon-image': 'airport',
            'icon-size': 1.5,
            'icon-allow-overlap': true,
            'icon-ignore-placement': true
        }
    });
    let running = false;
    function animate() {
        running = true;
        document.getElementById('replay').disabled = true;
        const start =
            newGeoJSON.features[0].geometry.coordinates[
            counter >= steps ? counter - 1 : counter
            ];
        const end =
            newGeoJSON.features[0].geometry.coordinates[
            counter >= steps ? counter : counter + 1
            ];
        if (!start || !end) {
            running = false;
            document.getElementById('replay').disabled = false;
            return;
        }
        // Update point geometry to a new position based on counter denoting
        // the index to access the arc
        point.features[0].geometry.coordinates =
            newGeoJSON.features[0].geometry.coordinates[counter];

        // Calculate the bearing to ensure the icon is rotated to match the route arc
        // The bearing is calculated between the current point and the next point, except
        // at the end of the arc, which uses the previous point and the current point
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
        if (running) {
            void 0;
        } else {
            // Set the coordinates of the original point back to origin
            point.features[0].geometry.coordinates = origin;

            // Update the source layer
            map.getSource('point').setData(point);

            // Reset the counter
            counter = 0;

            // Restart the animation
            animate(counter);
        }
    });

    // Start the animation
    animate(counter);
});

//Add map search
map.addControl(new mapboxgl.NavigationControl());
//Add map fullscreen
map.addControl(new mapboxgl.FullscreenControl());