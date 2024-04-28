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
 
// Optionally, define the units for the length calculation included in the properties object.
// Defaults to nautical miles, can be degrees, radians, miles, or kilometers.
var routeMiles = searoute(origin, destination, "miles");
