# Archival-Map
![Archival Map of freeland bunker journey](https://github.com/isantoso24/Archival-Map/blob/main/Screenshot%202024-05-24%20at%2017.12.36.png)


"Atlantic Odyssey: Mapping the Winter Harbor Freeland Bunker's Journal (1871-1885)"
Delve into the pages of Freeland Bunker's journal, a detailed account of his life in Winter Harbor, Maine, from 1871 to 1885. Each entry offers a glimpse into Bunker's daily activities, cherished by our local historical society.

# Introduction
For 37 years, from 1845 to 1909, Freeland Bunker diligently wrote daily entries in his diaries, offering a rare glimpse into the daily routines of Winter Harbor residents during the 19th century. Dr. Todd Little-Siebold, a member of the history faculty at the College of the Atlantic, an Dr. Laurie Baker, with the helph of Winter Harbor Historical Society has led efforts to digitize these diaries with student assistance. These digitized scans have become primary source materials in his classroom. Students have summarized the diaries from 1876 to 1889, highlighting Mr. Bunker’s extensive travels and diverse engagements in business, fraternal organizations, and community governance. From journeys spanning Italy to Gouldsboro, Bunker utilized every available mode of transportation. His activities ranged from managing a significant coal distribution enterprise to engaging in casual fishing.

My project aims to map Bunker's journey over the years, highlighting significant events such as his memorable Atlantic voyage. Through the use of coding tools like R and GIS, alongside HTML and Mapbox GL JavaScript, I'm creating an interactive platform. Here, users can seamlessly explore Bunker's experiences and Winter Harbor's rich history.
# Features
Datasets:
- location-mention: it consist of data based on the year of the journals from 1871-1885
- location-year-layer: it consist the data of significant activity and words mentions from Freeland Bunker's journal

Geojson-data:
- loc_df_entry: geojson or geocoded file for each year entry
- loc_item_fin: geojson or gecoded file for each item mentioned in the journal
- routesFin: General route of Freeland Bunker trips

Final.JS: Javascript for the mapbox and features to call the data.(JS file)

Map.html: HTML script for the interface and css template to call the Javascript file

# Installation
installation to create route follow the guide on npm website for searoute.js

otherwise no need to install anything just simply put your own mapbox token in JS file and youre good to go.

# Usage
intended for Muhammad Ilham Akbar Ramaditya Santoso senior project in collaboration with Winter Harbor Historical Society to obtain the degree of human ecology at the college of the atlantic. Observe and feedback are very welcome.

# Configuration
Adjust theme and visuals follow the guides in mapbox docs

# Contributing
I created this website for Winter Harbor Historical Soceity to inspire other that map could help historical preservation.

# Credits
- Todd Little Siebold and the Class
- Dr. Laurie Baker
- Winter Harbor Historical Society
- Gael Guadarrama
- Noelle Stringer
- Muhammad Ilham Akbar Ramaditya Santoso

# Troubleshooting
Follow guidance in npm and mapbox docs. 

For specific inquiries contact me

# FAQ
How to convert CSV to Geojson? To upload csv to geojson with type and features using arcgis online.

How to download the file from npm test.js? in terminal type node filename

The replay button does not want to replay? Wait until the animation finish then click replay.

