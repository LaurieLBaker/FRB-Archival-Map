const fs = require('fs');
const searoute = require('searoute-js');

// Define the destination GeoJSON point
const destination = {
    "type": "Feature",
    "properties": {},
    "geometry": {
        "type": "Point",
        "coordinates": [-70.925438, 42.349497]
    }
};

// Read GeoJSON data containing many origin points (assuming it's stored in a file)
const originGeoJSON = JSON.parse(fs.readFileSync('Geojson-data/journals_test.geojson', 'utf8'));

// Initialize an array to store the GeoJSON features for each route
const routeFeatures = [];

// Loop through each origin point in the GeoJSON data
originGeoJSON.features.forEach(originFeature => {
    // Calculate the route between the current origin point and the fixed destination
    const route = searoute(originFeature.geometry.coordinates, destination.geometry.coordinates);
    
    // Create a GeoJSON feature for the route
    const routeFeature = {
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": [originFeature.geometry.coordinates, route.coordinates] // Use the original origin point and the calculated route coordinates
        },
        "properties": originFeature.properties // Preserve properties from the original origin point
    };

    // Add the route feature to the array
    routeFeatures.push(routeFeature);
});

// Create a GeoJSON object with the route features
const geojsonOutput = {
    "type": "FeatureCollection",
    "features": routeFeatures
};

// Convert the GeoJSON object to a JSON string
const geojsonString = JSON.stringify(geojsonOutput);

// Write the GeoJSON string to a file
fs.writeFileSync('routes.geojson', geojsonString);

console.log("GeoJSON file 'routes.geojson' created successfully.");
