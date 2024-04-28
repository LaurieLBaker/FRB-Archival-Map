const searoute = require('searoute-js');

// Define origin and destination GeoJSON points:
var origin = {
    "type": "Feature",
    "properties": {},
    "geometry": {
        "type": "Point",
        "coordinates": [
            132.5390625,
            21.616579336740603
        ]
    }
}

var destination = {
    "type": "Feature",
    "properties": {},
    "geometry": {
        "type": "Point",
        "coordinates": [
            -71.3671875,
            75.05035357407698
        ]
    }
}

var route = searoute(origin, destination);
// > Returns a GeoJSON LineString Feature

// Convert route object to a JSON string
var routeJSON = JSON.stringify(route);

// Log the GeoJSON data
console.log(routeJSON);
