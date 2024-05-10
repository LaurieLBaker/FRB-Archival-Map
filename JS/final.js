mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhbnRvc28yNCIsImEiOiJjbHJoMnpqa28wM3g2MmptZjNhY2I0azZ4In0.hf_HgbByCza1aIBdbbbaOw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/isantoso24/clvv6w8xq06bn01ph4u60fwkh', // Add my own style
    zoom: 1.5,
    center: [-90, 40]
});

map.on('style.load', () => {
    map.setFog({
        "range": [0.8, 8],
        "color": "#A7885B",
        "horizon-blend": 0.5,
        "high-color": "#245bde",
        "space-color": "#000000",
        "star-intensity": 0.15
    }); // Set the default atmosphere style
});

// Define layer groups
const yearlyLayers = ['1871', '1872', '1873', '1874', '1875', '1876', '1877', '1878', '1879', '1880', '1881', '1882', '1883', '1884', '1885'];
const itemLayers = ['coal', 'farm', 'fish', 'lobster', 'mail', 'read_letter', 'hunt', 'stone', 'trade', 'wood', 'wrote_letter'];

// Add layers to the map
map.on('load', function () {
    map.addSource('yearly', {
        type: 'geojson',
        data: 'Geojson-data/loc_df_entry.geojson'
    });

    map.addSource('item', {
        type: 'geojson',
        data: 'Geojson-data/loc_item_fin.geojson'
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
        id: '1883',
        type: 'circle',
        source: 'yearly',
        paint: {
            'circle-color': 'red',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'year'], 1883]
    });
    map.addLayer({
        id: '1884',
        type: 'circle',
        source: 'yearly',
        paint: {
            'circle-color': 'red',
            'circle-radius': 3
        },
        filter: ['==', ['get', 'year'], 1884]
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
        filter: ['==', ['get', 'item'], "Read letter"]
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
        filter: ['==', ['get', 'item'], "wrote letter"]
    });
});

// After the last frame rendered before the map enters an "idle" state.
map.on('load', () => {
    // Define layers for each group
    const yearLayers = [
        '1871', '1872', '1873', '1874', '1875', '1876', '1877', '1878', '1879', '1880', '1881', '1882', '1883', '1884', '1885'
    ];

    const itemLayers = [
        'coal', 'farm', 'fish', 'lobster', 'mail', 'read_letter', 'hunt', 'stone', 'trade', 'wood', 'wrote_letter'
    ];

    // Function to create toggle buttons for each group
    function createToggleButtons(layerGroup, parentElement, groupName) {
        const groupTitle = document.createElement('div');
        groupTitle.textContent = groupName;
        groupTitle.className = 'group-title';
        parentElement.appendChild(groupTitle);

        for (const id of layerGroup) {
            // Create a link.
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = id;
            link.className = 'layer-button';

            // Set layer visibility to 'none' when the map loads.
            map.setLayoutProperty(id, 'visibility', 'none');

            // Show or hide layer when the toggle is clicked.
            link.onclick = function (e) {
                e.preventDefault();
                e.stopPropagation();

                const visibility = map.getLayoutProperty(
                    id,
                    'visibility'
                );

                // Toggle layer visibility by changing the layout object's visibility property.
                if (visibility === 'visible') {
                    map.setLayoutProperty(id, 'visibility', 'none');
                    this.classList.remove('active');
                } else {
                    this.classList.add('active');
                    map.setLayoutProperty(
                        id,
                        'visibility',
                        'visible'
                    );
                }
            };

            // Append the toggle button to the parent element
            parentElement.appendChild(link);
        }
    }

    // Create a parent div for the year layers
    const yearGroup = document.createElement('div');
    createToggleButtons(yearLayers, yearGroup, 'Year Layers');

    // Create a parent div for the item layers
    const itemGroup = document.createElement('div');
    createToggleButtons(itemLayers, itemGroup, 'Item Layers');

    // Append the parent divs to the menu container
    const menu = document.getElementById('menu');
    menu.appendChild(yearGroup);
    menu.appendChild(itemGroup);
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleMenuButton = document.getElementById('toggleMenu');
    const menu = document.getElementById('menu');

    toggleMenuButton.addEventListener('click', function () {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
});


// Add click event listener to show popups
map.on('click', function (e) {
    const features = map.queryRenderedFeatures(e.point, { layers: yearlyLayers.concat(itemLayers) });

    if (!features.length) {
        return;
    }

    const feature = features[0];

    // Create popup HTML content with a button
    const popupContent = `
        <h2>${feature.properties.year}</h2>
        <p>${feature.properties.journal_entry}</p>
        <h3>${feature.properties.location}</h3>
        <button id="nextPointButton">Next Point</button>
    `;

    // Create a popup with the HTML content
    const popup = new mapboxgl.Popup()
        .setLngLat(feature.geometry.coordinates)
        .setHTML(popupContent)
        .addTo(map);

    // Add event listener to the button
    document.getElementById('nextPointButton').addEventListener('click', function() {
        // Close the current popup
        popup.remove();

        // Get the index of the current feature
        const currentIndex = features.indexOf(feature);

        // Get the next feature (if available)
        const nextFeature = features[currentIndex + 1];

        if (nextFeature) {
            // Create popup HTML content for the next feature
            const nextPopupContent = `
                <h2>${nextFeature.properties.year}</h2>
                <p>${nextFeature.properties.journal_entry}</p>
                <h3>${nextFeature.properties.location}</h3>
                <button id="nextPointButton">Next Point</button>
            `;

            // Create a new popup with the HTML content for the next feature
            const nextPopup = new mapboxgl.Popup()
                .setLngLat(nextFeature.geometry.coordinates)
                .setHTML(nextPopupContent)
                .addTo(map);
            
            // Add event listener to the button in the new popup
            document.getElementById('nextPointButton').addEventListener('click', function() {
                // Close the new popup when the button is clicked
                nextPopup.remove();
            });
        }
    });
});

const chapters = {
    '1871': {
        center: [-68.164458, 44.411313],
        zoom: 1.5,
        pitch: 5
    },
    '1872': {
        center: [-68.221639, 44.396160],
        bearing: 0, // its the direction of the 0 to 365 degree
        zoom: 15,
        pitch: 60 // the 3D ness of map looks
    },
    '1873': {
        center: [-68.182394,44.329264],
        zoom: 13,
        speed: 0.6,
        pitch: 40
    },
    '1874': {
        center: [-68.210599,44.388361],
        zoom: 12.3
    },
    '1875': {
        center: [-68.193591,44.376660],
        zoom: 15.3,
        pitch: 20,
        speed: 0.5
    },
    '1876': {
        center: [-68.399086,44.284721],
        zoom: 1.5,
        bearing: 0,
    },
    '1877': {
        center: [-68.332594,44.362517],
        zoom: 17.3,
        pitch: 40
    },
    '1878': {
        center: [-68.366418,44.427352],
        zoom: 14.3,
        pitch: 20
    }, 
    '1879': {
        center: [-68.366418,44.427352],
        zoom: 14.3,
        pitch: 20
    },
    '1880': {
        center: [-68.366418,44.427352],
        zoom: 14.3,
        pitch: 20
    },
    '1881': {
        center: [-68.366418,44.427352],
        zoom: 14.3,
        pitch: 20
    },
    '1882': {
        center: [-68.366418,44.427352],
        zoom: 14.3,
        pitch: 20
    },
    '1883': {
        center: [-68.366418,44.427352],
        zoom: 14.3,
        pitch: 20
    },
    '1884': {
        center: [-68.366418,44.427352],
        zoom: 14.3,
        pitch: 20
    },
    '1885': {
        center: [-68.366418,44.427352],
        zoom: 14.3,
        pitch: 20
    }
};

let activeChapterName = '1871';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).classList.add('active');
    document.getElementById(activeChapterName).classList.remove('active');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    const element = document.getElementById(id);
    const bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}

// On every scroll event, check which element is on screen
window.onscroll = () => {
    for (const chapterName in chapters) {
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

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
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.FullscreenControl());
