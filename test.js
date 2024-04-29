const searoute = require('searoute-js');
const fs = require('fs'); // If using Node.js to read GeoJSON data from a file

// Define the destination GeoJSON point:
const destination = {
    "type": "Feature",
    "properties": {},
    "geometry": {
        "type": "Point",
        "coordinates": [
            -70.925438,42.349497
        ]
    }
};

// Read GeoJSON data containing many origin points (assuming it's stored in a file)
// Replace 'your_geojson_file.json' with the path to your GeoJSON file
const originGeoJSON = JSON.parse(fs.readFileSync('Geojson-data/journals_test.geojson', 'utf8'));

// Initialize an array to store the routes
const routes = [];

// Loop through each origin point in the GeoJSON data
originGeoJSON.features.forEach(originFeature => {
    // Calculate the route between the current origin point and the fixed destination
    const route = searoute(originFeature.geometry.coordinates, destination.geometry.coordinates);
    // Add the route to the routes array
    routes.push(route);
});

// Convert routes array to a JSON string
const routesJSON = JSON.stringify(routes);

// Log the GeoJSON data for all routes
console.log(routesJSON);
