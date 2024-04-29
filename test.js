const searoute = require('searoute-js');
const fs = require('fs');

// Define the destination GeoJSON point
const destination = {
    "type": "Feature",
    "properties": {},
    "geometry": {
        "type": "Point",
        "coordinates": [-70.925438, 42.349497]
    }
};

// Read GeoJSON data containing many origin points
const originGeoJSON = JSON.parse(fs.readFileSync('Geojson-data/loc_mention.geojson', 'utf8'));

// Initialize an array to store the routes
const routes = [];

// Loop through each origin point in the GeoJSON data
originGeoJSON.features.forEach(originFeature => {
    try {
        // Extract coordinates of the origin point
        const originCoordinates = originFeature.geometry.coordinates;

        // Calculate the route between the origin point and the destination
        const route = searoute(originCoordinates, destination.geometry.coordinates);

        // Add the route to the routes array
        routes.push(route);
    } catch (error) {
        console.error("Error calculating route:", error.message);
    }
});

// Convert routes array to a GeoJSON FeatureCollection
const featureCollection = {
    "type": "FeatureCollection",
    "features": routes
};

// Convert GeoJSON to a JSON string
const routesJSON = JSON.stringify(featureCollection);

// Write the GeoJSON string to a file
fs.writeFileSync('routes.geojson', routesJSON);

console.log("Routes saved to 'routes.geojson'.");
