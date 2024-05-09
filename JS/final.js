mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhbnRvc28yNCIsImEiOiJjbHJoMnpqa28wM3g2MmptZjNhY2I0azZ4In0.hf_HgbByCza1aIBdbbbaOw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/isantoso24/clvv6w8xq06bn01ph4u60fwkh', // Add my own style
    zoom: 1.5,
    center: [-90, 40]
});

map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});

map.on('load', function () {
    map.addSource('yearly', { //add yearly data
        type: 'geojson',
        data: 'Geojson-data/loc_df_entry.geojson'
    });

    map.addSource('item', { //add items data
        type: 'geojson',
        data: 'Geojson-data/loc_item.geojson'
    });

    // Add a layer to visualize the dataset
    map.addLayer({
        id: '1871',
        type: 'circle',
        source: 'yearly',
        paint: {
            'circle-color': 'red',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'year'], 1871]
    });
    map.addLayer({
        id: '1872',
        type: 'circle',
        source: 'yearly',
        paint: {
            'circle-color': 'red',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'year'], 1872]
    });
    map.addLayer({
        id: '1873',
        type: 'circle',
        source: 'yearly',
        paint: {
            'circle-color': 'red',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'year'], 1873]
    });
    map.addLayer({
        id: '1874',
        type: 'circle',
        source: 'yearly',
        paint: {
            'circle-color': 'red',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'year'], 1874]
    });
    map.addLayer({
        id: '1875',
        type: 'circle',
        source: 'yearly',
        paint: {
            'circle-color': 'red',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'year'], 1875]
    });
    map.addLayer({
        id: '1876',
        type: 'circle',
        source: 'yearly',
        paint: {
            'circle-color': 'red',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'year'], 1876]
    });
    map.addLayer({
        id: '1877',
        type: 'circle',
        source: 'yearly',
        paint: {
            'circle-color': 'red',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'year'], 1877]
    });
    map.addLayer({
        id: '1878',
        type: 'circle',
        source: 'yearly',
        paint: {
            'circle-color': 'red',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'year'], 1878]
    });
    map.addLayer({
        id: '1879',
        type: 'circle',
        source: 'yearly',
        paint: {
            'circle-color': 'red',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'year'], 1879]
    });
    map.addLayer({
        id: '1880',
        type: 'circle',
        source: 'yearly',
        paint: {
            'circle-color': 'red',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'year'], 1880]
    });
    map.addLayer({
        id: '1881',
        type: 'circle',
        source: 'yearly',
        paint: {
            'circle-color': 'red',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'year'], 1881]
    });
    map.addLayer({
        id: '1882',
        type: 'circle',
        source: 'yearly',
        paint: {
            'circle-color': 'red',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'year'], 1882]
    });
    map.addLayer({
        id: '1864',
        type: 'circle',
        source: 'yearly',
        paint: {
            'circle-color': 'red',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'year'], 1883]
    });
    map.addLayer({
        id: '1885',
        type: 'circle',
        source: 'yearly',
        paint: {
            'circle-color': 'red',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'year'], 1885]
    });
//Break
    map.addLayer({
        id: 'coal',
        type: 'circle',
        source: 'item',
        paint: {
            'circle-color': 'green',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'item'], "coal"]
    });
    map.addLayer({
        id: 'farm',
        type: 'circle',
        source: 'item',
        paint: {
            'circle-color': 'green',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'item'], "farm"]
    });
    map.addLayer({
        id: 'fish',
        type: 'circle',
        source: 'item',
        paint: {
            'circle-color': 'green',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'item'], "fish"]
    });
    map.addLayer({
        id: 'lobster',
        type: 'circle',
        source: 'item',
        paint: {
            'circle-color': 'green',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'item'], "lobster"]
    });
    map.addLayer({
        id: 'mail',
        type: 'circle',
        source: 'item',
        paint: {
            'circle-color': 'green',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'item'], "mail"]
    });
    map.addLayer({
        id: 'read_letter',
        type: 'circle',
        source: 'item',
        paint: {
            'circle-color': 'green',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'item'], "read letter"]
    });
    map.addLayer({
        id: 'hunt',
        type: 'circle',
        source: 'item',
        paint: {
            'circle-color': 'green',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'item'], "hunt"]
    });
    map.addLayer({
        id: 'stone',
        type: 'circle',
        source: 'item',
        paint: {
            'circle-color': 'green',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'item'], "stone"]
    });
    map.addLayer({
        id: 'trade',
        type: 'circle',
        source: 'item',
        paint: {
            'circle-color': 'green',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'item'], "trade"]
    });
    map.addLayer({
        id: 'wood',
        type: 'circle',
        source: 'item',
        paint: {
            'circle-color': 'green',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'item'], "wood"]
    });
    map.addLayer({
        id: 'wrote_letter',
        type: 'circle',
        source: 'item',
        paint: {
            'circle-color': 'green',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'item'], "wrote_letter"]
    });
});

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